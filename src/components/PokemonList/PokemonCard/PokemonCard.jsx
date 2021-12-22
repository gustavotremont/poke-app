import React from "react";

const PokemonCard = ({pokeInfo}, key) => {
  return (
      <section key={key} >
          <p>{pokeInfo.name}</p>
          <img src={pokeInfo.script} alt={pokeInfo.name} />
          {pokeInfo.typeOne ? <p>Type 1: {pokeInfo.typeOne}</p> : null}
          {pokeInfo.typeTwo ? <p>Type 2: {pokeInfo.typeTwo}</p> : null}
      </section>
  )
};

export default PokemonCard;
