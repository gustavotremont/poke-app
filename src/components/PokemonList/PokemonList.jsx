import React from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import { v4 as uuidv4 } from 'uuid';

const PokemonList = ({pokemonData}) => {

  const printPokemons = () => pokemonData.map(pokemon => <PokemonCard pokeInfo={pokemon} key={uuidv4()}/>)

  return (
    <section>
      {printPokemons()}
    </section>
  )
};

export default PokemonList;
