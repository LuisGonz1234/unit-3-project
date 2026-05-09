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

  const [tasks] = useState(["Finish React project", "Commit changes to GitHub", "Practice presentation",])
  
  useEffect(() => {
  localStorage.setItem("darkMode", String(darkMode));
}, [darkMode]);

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
  return (
    <main className={darkMode ? "app dark" : "app"}>
      <h1>React Task Tracker</h1>
      <p>This app will help me track homework tasks.</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <h2> My task </h2>

      <ul> {tasks.map((task, index) => (<li key={index}>{task}</li>))}</ul>


    </main>
  );
}

export default App;