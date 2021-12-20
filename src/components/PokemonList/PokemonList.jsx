import React from "react";
import { v4 as uuidv4 } from 'uuid';

const PokemonList = ({pokemonData}) => {
  return (
    <section>
      {
        pokemonData.map(pokemon => 
          <section key={uuidv4()} >
              <p>{pokemon.name}</p>
              <img src={pokemon.script} alt={pokemon.name} />
          </section>
        )
      }
    </section>
  )
};

export default PokemonList;
