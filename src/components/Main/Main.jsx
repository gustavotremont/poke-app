import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Details from "../Details";
import CreatePokemon from '../CreatePokemon'
import Search from '../Search'
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
      <Routes>
        <Route path='/' element={<PokemonList/>}/>
        <Route path='/new' element={<CreatePokemon/>}/>
        <Route path='/pokemon' element={<Details/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </main>
  )
};

export default Main;
