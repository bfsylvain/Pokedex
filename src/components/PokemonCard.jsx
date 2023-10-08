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

function PokemonCard() {

    const Pokemon = PokemonList[0]
    const IsImage = (pokemon) => {
    return pokemon.imgSrc 
    ? <img src={pokemon.imgSrc} alt={pokemon.name}/> 
    : <p>"???"</p>
    }

    return (
        <figure>
            {IsImage(Pokemon)}
            <figcaption>{Pokemon.name}</figcaption>
        </figure>
    );
}


export default PokemonCard;