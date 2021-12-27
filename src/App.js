import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

import {pokemonContext} from './context/pokemonContext'
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([])

  const addPokeToList = (newPoke) => {
    if(newPoke){
      if(pokemonList.length === 0 || pokemonList.every(pokemon => pokemon.name !== newPoke.name)){
        setPokemonList([...pokemonList, newPoke])
      }     
    }
  }

  useEffect(() => {
    const listPreload = async () => {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9`);
          const pokemonData = res.data;

          const newList = pokemonData.results.map( async (pokemon) => {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const pokemonData = res.data;
          
                return {
                  id: pokemonData.id,
                  name: pokemonData.name,
                  script: pokemonData.sprites.other["official-artwork"].front_default,
                  typeOne: pokemonData.types[0].type.name,
                  typeTwo: pokemonData.types[1] ? pokemonData.types[1].type.name : "",
                  origin: 'api'
                }  
          })
          
          Promise.all(newList).then( value => {
            setPokemonList([...value])
          })
  
        } catch (error) {
          console.log(error);
        }     
    }

    listPreload();
  }, [])

  const pokeObj = {pokemonList, addPokeToList}

  return (
    <div className="App">
      <BrowserRouter>
        <pokemonContext.Provider value={pokeObj}>
          <Header/>
          <Main/>      
        </pokemonContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;