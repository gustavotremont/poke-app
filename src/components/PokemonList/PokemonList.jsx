import React, {useContext} from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import {pokemonContext} from '../../context/pokemonContext'
import { v4 as uuidv4 } from 'uuid';

const PokemonList = () => {

  const { pokemonList } = useContext(pokemonContext);

  const printPokemons = () => pokemonList.map(pokemon => <PokemonCard pokeInfo={pokemon} key={uuidv4()}/>)

  return (
    <section>
      {printPokemons()}
    </section>
  )
};

export default PokemonList;
