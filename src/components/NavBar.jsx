
function NavBar({
    NextPokemon,
    PreviousPokemon, 
    pokemonIndex, 
    pokemonList}) {

    return(
        <nav>
            {pokemonList.map(pokemon => 
                <button key={pokemon.name}>{pokemon.name}</button>
            )}
        </nav>
    )
}

export default NavBar;