import './Details.css'
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDataLoader } from 'react-use-data-loader'
import { Scrollbars } from 'rc-scrollbars';
import axios from "axios";

const pokemonDetails = async(id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.data
  } catch (error) {
    console.log(error);
  }
}

const Details = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading } = useDataLoader(pokemonDetails, searchParams.get('id'))

  return (
    <article className='detail-body'>
      {loading 
        ? <div>loading...</div>
        : <>
            <h1 className='detail-name'>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
            <img className='detail-image' src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
      
            <section className='detail-section'>
              <h2 className='detail-section-title'>General Data</h2>
              <p>ID: {data.id}</p>  
              {data.types.map((type,i) => <p>Type {i+1}: {type.type.name}</p>)}
              <p>Base experience: {data.base_experience}</p>
              <p>Height: {data.height}</p>
              <p>Weight: {data.weight}</p>
            </section>

            <section  className='detail-section'>
              <h2 className='detail-section-title'>Stats</h2>
              {data.stats.map(stat => <p>{stat.stat.name}: {stat.base_stat}</p>)}
            </section>

            <section className='detail-section'>
              <h2 className='detail-section-title'>Moves</h2>
              <Scrollbars style={{ width: 300, height: 300 }}>
                <table>
                  <tr>
                    <th>Move</th>
                    <th>Level</th>
                    <th>Method</th>
                  </tr>
                  {data.moves.map(move => <tr>
                                            <th>{move.move.name}</th>
                                            <th>{move.version_group_details[0].level_learned_at}</th>
                                            <th>{move.version_group_details[0].move_learn_method.name}</th>
                                          </tr>
                  )}
                </table>
              </Scrollbars>
            </section>
          </>
        }
    </article>
  )  
};

export default Details;
