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
            return 897;
          case 1:
            return 150;
          case 2:
            return 250;
          case 3:
            return 385;
          case 4:
            return 492;
          case 5:
            return 648;
          case 6:
            return 720;
          case 7:
            return 808;
          case 8:
            return 905;
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
    console.log(gen);
  }

  return (
    <div className={`${theme} wrapper`}>
      <div className="wrapperCenter">
        <Header themeToggle={toggleTheme} />
        <main>
          {gen >= 0 && <Soulmates gen={genRange} />}
          {gen === -1 && <Genselect gen={chooseGen} />}
        </main>
      </div>
    </div>
  );
}

export default App;
