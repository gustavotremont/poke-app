import './Form.css'
import React from "react";

const Form = (props) => {

  const handleChange = e => props.getPokemon(e.target.value)

  return (
    <section>
      <form className='form-body'>
        <label className='form-label' htmlFor="pokemonName">Find a Pokemon</label>
        <input className='form-Input' type="text" name="pokemonName" id="pokemonName" onChange={handleChange}/>
      </form>
    </section>
  )
};

export default Form;
