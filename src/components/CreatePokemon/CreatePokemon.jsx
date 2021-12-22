import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {pokemonContext} from '../../context/pokemonContext'

const CreatePokemon = () => {
  const { register, handleSubmit } = useForm();
  const { addPokeToList } = useContext(pokemonContext);

  const onSubmit = (data) => {
    console.log(data)
    if(data.typeOne !== data.typeTwo){
      addPokeToList(data)
    }else{
      alert('ambos tipos no pueden ser iguales')
    }
  }

  const Input = ({ label, type, register, name, required }) => (
    <>
      <label>{label}</label>
      <input type={type} {...register(name, { required })} />
    </>
  );

  const Select = (({ name, label, register }) => (
    <>
      <label>{label}</label>
      <select {...register(name)}>
        <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="ghost">Ghost</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="water">Water</option>
      </select>
    </>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <Input label="ID:" register={register} type='number' name="id" required />
        <Input label="NAME:" register={register} type='text' name="name" required />
        <Input label="IMAGE:" register={register} type='url' name="script" required />
        <Select name="typeOne" label="TYPE 1:" register={register}/>
        <Select name="typeTwo" label="TYPE 2:" register={register}/>
        
        <input type="submit" />
      </form>
    </div>
  )
};

export default CreatePokemon;
