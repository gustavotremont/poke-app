import './Card.css'
import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Card = ({pokeInfo}) => {
  return (
    <section key={uuidv4()} className="card-body">
          <img className="card-image" src={pokeInfo.script} alt={pokeInfo.name} />
          {pokeInfo.id ? <p className="card-type">ID: {pokeInfo.id}</p> : null} 
          <p className="card-name" >{pokeInfo.name}</p>
          { pokeInfo.typeOne
            ?   <div className="card-types">
                  <p className="card-type" >Type 1: {pokeInfo.typeOne}</p>
                  {pokeInfo.typeTwo ? <p className="card-type" >Type 2: {pokeInfo.typeTwo}</p> : null}
                </div>
            : null
          }
    </section>
  )
};

export default Card;
