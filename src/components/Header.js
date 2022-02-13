import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <button className="header--themeToggle" onClick={props.themeToggle}>
        🌅
      </button>
      <header>pokésoulmates</header>
      <div className="header--underline"></div>
    </div>
  );
}
