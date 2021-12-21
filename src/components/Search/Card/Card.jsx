import React from "react";

const Card = ({pokeInfo}) => {
  return (
    <section key={pokeInfo.name} >
          <p>{pokeInfo.name}</p>
          <img src={pokeInfo.script} alt={pokeInfo.name} />
    </section>
  )
};

export default Card;
