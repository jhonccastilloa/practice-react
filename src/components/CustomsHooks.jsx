import React from 'react'
import {useFetch} from '../Hooks/useFetch'

function CustomsHooks() {
  let url='https://pokeapi.co/api/v2/pokemon/'
    console.log(useFetch());
    let {data,isPending,error}=useFetch(url)
  return (
    <>
    
    <div>Este es un Hooks Personalizado</div>
    <h3>{JSON.stringify(isPending)}</h3>
    <h3>{JSON.stringify(error)}</h3>
    <h3>
      <pre style={{whiteSpace:'pre-wrap'}}>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </h3>
    </>
  )
}

export default CustomsHooks