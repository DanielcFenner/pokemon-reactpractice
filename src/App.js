import React from "react";
import Genselect from "./components/Genselect";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = React.useState("dark-theme");

  function toggleTheme() {
    console.log("hi");
    setTheme((oldTheme) => {
      console.log("hi");
      if (oldTheme === "dark-theme") {
        return "";
      } else {
        return "dark-theme";
      }
    });
  }

  return (
    <div className={theme}>
      <button className="themeToggle" onClick={toggleTheme}>
        🌅
      </button>
      <Header />
      <main>
        <Genselect />
      </main>
    </div>
  );
}

export default App;
