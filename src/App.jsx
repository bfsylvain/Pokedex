import PokemonCard from './components/PokemonCard'
import './App.css'
import { useState } from 'react';

const PokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


function App() {

  const[pokemonIndex, setPokemonIndex] = useState(PokemonList[0])
console.log(useState)
//Stopped here

  return (
    <div>
      <PokemonCard pokemon={PokemonList[0]} />
    </div>
  );
}

export default App;
