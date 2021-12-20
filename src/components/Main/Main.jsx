import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Form from "../Form";
import PokemonList from "../PokemonList";

const Main = () => {
  const [pokemon, setPokemon] = useState('')  
  const [debouncedValue] = useDebounce(pokemon, 2000);
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    const addPokemon = async () => {
      if(debouncedValue) {
        if(pokemonList.length === 0 || pokemonList.every(pokemon => pokemon.name !== debouncedValue)){
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedValue}`)
            const pokemonData = res.data;
          
            const newPokemon = {
              name: pokemonData.name,
              script: pokemonData.sprites.front_default
            }        
            setPokemonList([...pokemonList, newPokemon])
    
          } catch (error) {
            console.log(error);
          }     
        }
      }
    }
    addPokemon();
  }, [debouncedValue])

  const getPokemon = (pokemonName) => setPokemon(pokemonName.toLowerCase()); 

  return (
    <main>
        <Form getPokemon={getPokemon}/>
        <PokemonList pokemonData={pokemonList}/>
    </main>
  )
};

export default Main;
