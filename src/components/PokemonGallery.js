import React from "react";
import PokemonCard from "./PokemonCard";
import pokemonData from "../pokemon/pokemon";
import "../App.css";

// the {} at line 9 and 11 are used for embedding - 
// see ReactJS chapter 2 on embedding valid JS expression
// hence from line 10 - 13, we are embedding an array of pokemon cards into the div tag or browser
const PokemonGallery = () => {
    return (
      <div>
        {pokemonData.map((pokemon_object) => (
          <PokemonCard pokemon={pokemon_object} key={pokemon_object.id} />
        ))}
      </div>
    );
  };

export default PokemonGallery;

// pokemon={pokemon_object} this part -> is essentially converted to a props object
// pokemon={pokemon_object} => becomes {pokemon : {pokemon_object}} =>
// => which due to the embedding by the {} brackets
// => further simplifies to {pokemon} (an object within an object) =>
// => Hence in PokemonCard component, we use {pokemon} as the parameter (an object within an obj)




