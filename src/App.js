import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

import {pokemonContext} from './context/pokemonContext'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  const addPokeToList = (newPoke) => {
    if(newPoke){
      if(pokemonList.length === 0 || pokemonList.every(pokemon => pokemon.name !== newPoke.name)){
        setPokemonList([...pokemonList, newPoke])
      }     
    }
  }

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