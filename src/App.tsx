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
      <h1>React Task Tracker</h1>
      <p>This app will help me track homework tasks.</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      
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

      <ul> {tasks.map((task: string, index: number) => (<li key={index}>{task}</li>))}</ul>


    </main>
  );
}

export default App;