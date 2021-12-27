import './PokemonList.css'
import React, {useContext} from "react";
import Card from "../Card";
import {pokemonContext} from '../../context/pokemonContext'
import { Link } from "react-router-dom";

const PokemonList = () => {

  const { pokemonList } = useContext(pokemonContext);

  const printPokemons = () => pokemonList.map(pokemon => pokemon.origin === 'api' 
                                                            ? <Link className='pokemon-details' to={`/pokemon/?id=${pokemon.id}`}> <Card pokeInfo={pokemon}/> </Link> 
                                                            : <Card pokeInfo={pokemon}/>
                                              )

  return (
    <section>
      {printPokemons()}
    </section>
  )
};

export default PokemonList;
