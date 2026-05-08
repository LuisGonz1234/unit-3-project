type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header>
      <h1>React Task Tracker</h1>
      <p>This app will help me track homework tasks.</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </header>
  );
}

export default Header;