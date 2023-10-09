
function PokemonCard({pokemon}) {
    console.log({pokemon})

    // const Pokemon = PokemonList[0]
    const IsImage = (element) => {
    return element.imgSrc 
    ? <img src={element.imgSrc} alt={element.name}/> 
    : <p>"???"</p>
    }

    return (
        <figure>
            {IsImage(pokemon)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}


export default PokemonCard;