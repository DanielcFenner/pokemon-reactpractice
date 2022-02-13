import React from "react";

export default function Soulmates(props) {
  const [pokes, setPokes] = React.useState([]);
  const [newPoke, setNewPoke] = React.useState(
    randomRange(props.gen.min, props.gen.max)
  );

  console.log(pokes);

  function soulmateButton() {
    setNewPoke(randomRange(props.gen.min, props.gen.max));
  }

  const firstUpdate = React.useRef(true);
  React.useEffect(
    function () {
      if (firstUpdate.current) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + newPoke)
          .then((res) => res.json())
          .then((data) => {
            if (pokes.length < 6 && props.gen != 0) {
              setPokes((oldPokes) => {
                return [
                  ...oldPokes,
                  {
                    key: data.id,
                    name: data.name,
                    img: data.sprites.other["official-artwork"].front_default,
                  },
                ];
              });
            }
          });
      }
    },
    [newPoke]
  );

  function randomRange(min, max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  const pokeElements = pokes.map((poke) => {
    return (
      <div key={poke.key} className="soulmates--pokeContainer">
        <div className="soulmates--pokeTitle">{poke.name}</div>
        <img className="soulmates--pokeImg" src={poke.img}></img>
      </div>
    );
  });

  return (
    <div className="soulmates">
      <div className="soulmates--title">Find your pokésoulmates</div>
      {pokes.length < 6 && (
        <button className="soulmates--findButton" onClick={soulmateButton}>
          Get pokésoulmate
        </button>
      )}
      {pokes.length === 6 && (
        <button
          className="soulmates--resetButton"
          onClick={() => props.resetButton(-1)}
        >
          Reset?
        </button>
      )}
      <div className="soulmates--pokeGrid">{pokeElements}</div>
    </div>
  );
}
