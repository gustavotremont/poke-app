import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce/lib";
import Form from "../Form";
import PokemonList from "../PokemonList";

const Main = () => {
  const [pokemon, setPokemon] = useState('')
  // useDebounce
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    const addPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const pokemonData = res.data;
    
      const newPokemon = {
        name: pokemonData.name,
        script: pokemonData.sprites.front_default
      }

      setPokemonList([...pokemonList, newPokemon])
    }

    addPokemon();
  }, [pokemon])

  const getPokemon = (pokemonName) => setPokemon(pokemonName); 

  return (
    <main>
        <Form getPokemon={getPokemon}/>
        <PokemonList pokemonData={pokemonList}/>
    </main>
  )
};

export default Main;
