import React from "react";

const Card = ({pokeInfo}) => {
  return (
    <section key={pokeInfo.name} >
          <img src={pokeInfo.script} alt={pokeInfo.name} />
          <p>{pokeInfo.name}</p>
          {pokeInfo.typeOne ? <p>Type 1: {pokeInfo.typeOne}</p> : null}
          {pokeInfo.typeTwo ? <p>Type 2: {pokeInfo.typeTwo}</p> : null}
    </section>
  )
};

export default Card;
