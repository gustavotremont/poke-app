import './CreatePokemon.css'
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {pokemonContext} from '../../context/pokemonContext'
import Input from "./Input";
import Select from "./Select";
import Card from "../Card";

const CreatePokemon = () => {
  const [pokemon, setPokemon] = useState('')  
  const { register, handleSubmit } = useForm();
  const { addPokeToList } = useContext(pokemonContext);

  const onSubmit = (data) => {
    if(data.typeOne !== data.typeTwo){
      data.origin = 'created'
      setPokemon(data)
      addPokeToList(data)
    }else{
      alert('ambos tipos no pueden ser iguales')
    }
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <Input label="ID:" register={register} type='number' name="id" required />
          <Input label="NAME:" register={register} type='text' name="name" required />
          <Input label="IMAGE:" register={register} type='url' name="script" required />
          <Select name="typeOne" label="TYPE 1:" register={register}/>
          <Select name="typeTwo" label="TYPE 2:" register={register}/>
          
          <input className="submit-button" type="submit" />
        </form>
      </section>
      {pokemon ? <Card pokeInfo={pokemon}/> : null}
    </>
  )
};

export default CreatePokemon;
