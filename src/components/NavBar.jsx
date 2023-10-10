
function NavBar({
    handleClick,
    pokemonList}) {

    return(
        <nav>
            {pokemonList.map((pokemon, index) => 
                <button key={pokemon.name} onClick={() => handleClick(index)}>{pokemon.name}</button>
            )}
        </nav>
    )
}

export default NavBar;