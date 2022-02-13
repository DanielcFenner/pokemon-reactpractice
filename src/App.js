import React from "react";
import Genselect from "./components/Genselect";
import Header from "./components/Header";
import Soulmates from "./components/Soulmates";

function App() {
  const [theme, setTheme] = React.useState("dark-theme");
  const [gen, setGen] = React.useState(-1);
  const [genRange, setGenRange] = React.useState(0);

  React.useEffect(
    function () {
      setGenRange(() => {
        switch (gen) {
          case -1:
            return 0;
          case 0:
            return { min: 0, max: 897 };
          case 1:
            return { min: 0, max: 150 };
          case 2:
            return { min: 150, max: 250 };
          case 3:
            return { min: 250, max: 385 };
          case 4:
            return { min: 385, max: 492 };
          case 5:
            return { min: 492, max: 648 };
          case 6:
            return { min: 648, max: 720 };
          case 7:
            return { min: 720, max: 808 };
          case 8:
            return { min: 808, max: 897 };
        }
      });
    },
    [gen]
  );

  function toggleTheme() {
    setTheme((oldTheme) => {
      if (oldTheme === "dark-theme") {
        return "";
      } else {
        return "dark-theme";
      }
    });
  }

  function chooseGen(gen) {
    setGen(gen);
  }

  return (
    <div className={`${theme} wrapper`}>
      <div className="wrapperCenter">
        <Header themeToggle={toggleTheme} />
        <main>
          {gen >= 0 && <Soulmates gen={genRange} resetButton={chooseGen} />}
          {gen === -1 && <Genselect gen={chooseGen} />}
        </main>
      </div>
    </div>
  );
}

export default App;
