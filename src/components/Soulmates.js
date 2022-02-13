import React from "react";

export default function Soulmates(props) {
  const [pokes, setPokes] = React.useState([]);
  const [newPoke, setNewPoke] = React.useState(
    Math.floor(Math.random() * props.gen) + 1
  );

  function soulmateButton() {
    setNewPoke(Math.floor(Math.random() * props.gen) + 1);
  }

  const firstUpdate = React.useRef(true);
  React.useEffect(
    function () {
      if (firstUpdate.current) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + newPoke)
          .then((res) => res.json())
          .then((data) => {
            if (pokes.length < 6) {
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
      <button className="soulmates--findButton" onClick={soulmateButton}>
        Get pokésoulmate
      </button>
      <div className="soulmates--pokeGrid">{pokeElements}</div>
    </div>
  );
}
