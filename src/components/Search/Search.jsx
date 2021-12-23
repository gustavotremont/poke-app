import React, { useState, useEffect, useContext } from "react";
import {pokemonContext} from '../../context/pokemonContext' 
import axios from "axios";
import { useDebounce } from "use-debounce";
import Form from "./Form";
import Card from "../Card"

const Search = () => {

  const [pokemon, setPokemon] = useState('')  
  const [debouncedValue] = useDebounce(pokemon, 2000);
  const [pokemonCard, setPokemonCard] = useState({})
  const { addPokeToList } = useContext(pokemonContext)

  useEffect(() => {

    const addPokemon = async () => {
      if(debouncedValue) {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedValue}`)
            const pokemonData = res.data;
          
            const newPokemon = {
              id: pokemonData.id,
              name: pokemonData.name,
              script: pokemonData.sprites.other["official-artwork"].front_default,
              typeOne: pokemonData.types[0].type.name,
              typeTwo: pokemonData.types[1] ? pokemonData.types[1].type.name : ""
            }        
            setPokemonCard(newPokemon);
            addPokeToList(newPokemon);
    
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