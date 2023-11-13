import { useState } from 'react'
import React from 'react'
import './App.css'
import SearchComponent from './Component/SearchComponent';
import PokeList from './Component/PokeList';

function App() {

  const [pokeData, setPokeData] = useState();
  return (
    <>
      <div>
     {/* <SearchComponent/>    */}
        <PokeList/>
      </div>
    </>
  )
}

export default App
