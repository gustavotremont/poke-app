import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import Form from "./Form";
import Card from "./Card"

const Search = () => {

  const [pokemon, setPokemon] = useState('')  
  const [debouncedValue] = useDebounce(pokemon, 2000);
  const [pokemonCard, setPokemonCard] = useState({})

  useEffect(() => {

    const addPokemon = async () => {
      if(debouncedValue) {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedValue}`)
            const pokemonData = res.data;
          
            const newPokemon = {
              name: pokemonData.name,
              script: pokemonData.sprites.front_default
            }        
            setPokemonCard(newPokemon)
    
          } catch (error) {
            console.log(error);
          }     
      }
    }
    addPokemon();
  }, [debouncedValue])

  const getPokemon = (pokemonName) => setPokemon(pokemonName.toLowerCase());

  return (
    <section>
      <Form getPokemon={getPokemon}/>
      <Card pokeInfo={pokemonCard}/>
    </section>
  )
};

export default Search;
