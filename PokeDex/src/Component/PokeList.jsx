import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeList = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState('pikachu'); // Default Pokémon

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pokemonName]);

  return (
    <div>
      <h1>Welcome to PokeDex</h1>
      <label htmlFor="pokemonName">Enter Pokemon Name:</label>
      <input
        type="text"
        id="pokemonName"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
      />
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name}`} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokeList;