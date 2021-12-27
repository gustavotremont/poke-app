import './Form.css'
import React from "react";
import {DebounceInput} from 'react-debounce-input';

const Form = ({getPokemon}) => {

  return (
    <section>
      <form className='form-body'>
        <label className='form-label' htmlFor="pokemonName">Find a Pokemon</label>
        <DebounceInput className='form-Input' minLength={3} debounceTimeout={2000} onChange={e => getPokemon(e.target.value)} />
      </form>
    </section>
  )
};

export default Form;
