import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {pokemonContext} from '../../context/pokemonContext'
import Input from "./Input";
import Select from "./Select";
import Card from "../Card";

const CreatePokemon = () => {
  const [pokemon, setPokemon] = useState({})  
  const { register, handleSubmit } = useForm();
  const { addPokeToList } = useContext(pokemonContext);

  const onSubmit = (data) => {
    console.log(data)
    if(data.typeOne !== data.typeTwo){
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
          
          <input type="submit" />
        </form>
      </section>
      <Card pokeInfo={pokemon} />
    </>
  )
};

export default CreatePokemon;
