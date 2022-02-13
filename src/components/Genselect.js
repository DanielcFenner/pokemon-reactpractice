import React from "react";

export default function Genselect(props) {
  return (
    <div className="genSelect">
      <div className="genSelect--title">Which Generation?</div>

      <div
        className="genSelectButton genSelectAll"
        onClick={() => props.gen(0)}
      >
        All Generations
      </div>
      <div className="genSelectButton" onClick={() => props.gen(1)}>
        Gen I
      </div>
      <div className="genSelectButton" onClick={() => props.gen(2)}>
        Gen II
      </div>
      <div className="genSelectButton" onClick={() => props.gen(3)}>
        Gen III
      </div>
      <div className="genSelectButton" onClick={() => props.gen(4)}>
        Gen IV
      </div>
      <div className="genSelectButton" onClick={() => props.gen(5)}>
        Gen V
      </div>
      <div className="genSelectButton" onClick={() => props.gen(6)}>
        Gen VI
      </div>
      <div className="genSelectButton" onClick={() => props.gen(7)}>
        Gen VII
      </div>
      <div className="genSelectButton" onClick={() => props.gen(8)}>
        Gen VIII
      </div>
    </div>
  );
}
