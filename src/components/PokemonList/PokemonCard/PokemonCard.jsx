import React from "react";

const PokemonCard = ({pokeInfo, key}) => {
  return (
      <section key={key} >
          <p>{pokeInfo.name}</p>
          <img src={pokeInfo.script} alt={pokeInfo.name} />
      </section>
  )
};

export default PokemonCard;
