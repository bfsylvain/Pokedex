
function NavBar({
    NextPokemon,
    PreviousPokemon, 
    pokemonIndex, 
    pokemonList}) {

    return(
        <nav>
            {pokemonIndex > 0 && <button onClick={PreviousPokemon}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={NextPokemon}>Suivant</button>}
        </nav>
    )
}

export default NavBar;