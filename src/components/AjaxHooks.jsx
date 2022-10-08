import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

function AjaxHooks() {
  const [pokemon, setPokemon] = useState([]);

  //   useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon/")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         json.results.map((poke) => {
  //           fetch(poke.url)
  //             .then((resUrl) => resUrl.json())
  //             .then((jsonP) => {
  //                 let pokemonElement={
  //                     id:jsonP.id,
  //                     name:jsonP.name,
  //                     avatar:jsonP.sprites.front_default
  //                 }
  //               setPokemon((pokemon)=>[...pokemon,pokemonElement])
  //             });
  //         });
  //       });

  //       console.log(pokemon);
  //   }, []);
  useEffect(() => {
    const getPokeApi = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      data.results.map(async (el) => {
        const res = await fetch(el.url);
        const data = await res.json();
        let getPokemon = {
          id: data.id,
          name: data.name,
          avatar: data.sprites.front_default,
        };
        setPokemon((pokemon) => [...pokemon, getPokemon]);
      });
    };
    getPokeApi("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemon.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemon.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}

export default AjaxHooks;
