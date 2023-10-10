import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';
import './App.css'
import { useState } from 'react';

const pokemonList = [
  { 
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {

  const[pokemonIndex, setPokemonIndex] = useState(0)

  const NextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const PreviousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  return (
    <div>
      <NavBar setPokemonIndex={[pokemonIndex, setPokemonIndex]}/>
      {/* work in progress */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={PreviousPokemon}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={NextPokemon}>Suivant</button>}
    </div>
  );
}

export default App;
