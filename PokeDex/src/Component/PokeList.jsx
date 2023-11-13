import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeList = () => {
  const [pokedexData, setPokedexData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataOne = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
      setPokedexData([response.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  
  const fetchDataAll = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`);
      setPokedexData([response.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchQuery? fetchDataAll : fetchDataOne;
  }, [searchQuery]);

  return (
    <div>
      <h1>Pokédex</h1>
      <label htmlFor="searchInput">Search Pokemon:</label>
      <input
        type="text"
        id="searchInput"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={fetchDataOne} disabled={isLoading}>
        Search
      </button>
      {isLoading && <p>Loading...</p>}
      {pokedexData.map((pokemon) => (
  <div key={pokemon.id}>
    <h2>{pokemon.name}</h2>
    {pokemon.sprites && (
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    )}
    <p>Height: {pokemon.height}</p>
    <p>Weight: {pokemon.weight}</p>
  </div>
))}
    </div>
  );
};

export default PokeList;