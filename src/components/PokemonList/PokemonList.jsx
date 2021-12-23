import React, {useContext} from "react";
import Card from "../Card";
import {pokemonContext} from '../../context/pokemonContext'

const PokemonList = () => {

  const { pokemonList } = useContext(pokemonContext);

  const printPokemons = () => pokemonList.map(pokemon => <Card pokeInfo={pokemon}/>)

  return (
    <section>
      {printPokemons()}
    </section>
  )
};

export default PokemonList;
