import PropTypes from "prop-types";


function PokemonCard({pokemon}) {
    console.log({pokemon})

    PokemonCard.PropTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired
        })
    }


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