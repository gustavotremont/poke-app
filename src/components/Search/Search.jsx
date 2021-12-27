import React, { useState, useEffect, useContext } from "react";
import {pokemonContext} from '../../context/pokemonContext' 
import axios from "axios";
import Form from "./Form";
import Card from "../Card"

const Search = () => {

  const [pokemon, setPokemon] = useState('')
  const [pokemonCard, setPokemonCard] = useState('')
  const { addPokeToList } = useContext(pokemonContext)

  useEffect(() => {

    const addPokemon = async () => {
      if(pokemon) {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const pokemonData = res.data;
          
            const newPokemon = {
              id: pokemonData.id,
              name: pokemonData.name,
              script: pokemonData.sprites.other["official-artwork"].front_default,
              typeOne: pokemonData.types[0].type.name,
              typeTwo: pokemonData.types[1] ? pokemonData.types[1].type.name : "",
              origin: 'api'
            }        
            setPokemonCard(newPokemon);
            addPokeToList(newPokemon);
    
          } catch (error) {
            console.log(error);
          }     
      }
    }
    addPokemon();
  }, [pokemon])

  const getPokemon = (pokemonName) => setPokemon(pokemonName.toLowerCase());

  return (
    <section>
      <Form getPokemon={getPokemon}/>
      {pokemonCard ? <Card pokeInfo={pokemonCard}/> : null}
    </section>
  )
};

export default Search;