import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  // state for dark mode
  const [darkMode, setDarkMode] = useState(() => {
  const savedMode = localStorage.getItem("darkMode");
  return savedMode === "true";
});

  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return [
    "Finish React project",
    "Commit changes to GitHub",
    "Practice presentation",
  ];
});  
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
  localStorage.setItem("darkMode", String(darkMode));
}, [darkMode]);

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

function addTask() {
  if (newTask.trim() === "") {
    return;
  }

  setTasks([...tasks, newTask]);
  setNewTask("");
}
  return (
    <main className={darkMode ? "app dark" : "app"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div>
        <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <h2> My task </h2>

      <TaskList tasks={tasks} />

    </main>
  );
}

export default App;