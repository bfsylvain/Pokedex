const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
];

function PokemonCard() {

    const pokemon = pokemonList[0]
    const isImage = (pokemon) => {
    return pokemon.imgSrc 
    ? <img src={pokemon.imgSrc} alt={pokemon.name}/> 
    : <p>"???"</p>
    }

    return (
        <figure>
            {isImage(pokemon)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}


export default PokemonCard;