import { useState } from "react";
import "./App.css";

function App() {
  // state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "app dark" : "app"}>
      <h1>React Task Tracker</h1>
      <p>This app will help me track homework tasks.</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </main>
  );
}

export default App;