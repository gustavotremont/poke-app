import React from "react";

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPokemon(e.target.pokemonName.value)
    e.target.pokemonName.value = ''
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName">Find a Pokemon</label>
        <input type="text" name="pokemonName" id="pokemonName"/>

        <input type="submit" value="Search" />
      </form>
    </section>
  )
};

export default Form;
