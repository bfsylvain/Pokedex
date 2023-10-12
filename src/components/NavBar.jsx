
function NavBar({
    pokemonList,
    setPokemonIndex
}) {

const handleClick = (index) => {
setPokemonIndex(index)
const clickedIndex = index
pokemonList[clickedIndex].name === "pikachu" && alert("pika pikachu !!!")
}


    return(
        <nav>
            {pokemonList.map((pokemon, index) => 
                <button key={pokemon.name} onClick={() => handleClick(index)}>{pokemon.name}</button>
            )}
        </nav>
    )
}

export default NavBar;