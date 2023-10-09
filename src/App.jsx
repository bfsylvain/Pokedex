import PokemonCard from './components/PokemonCard'
import './App.css'

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

  return (
    <div>
      <PokemonCard pokemon={PokemonList[0]} />
    </div>
  );
}

export default App;
