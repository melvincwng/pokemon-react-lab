import React from "react";
import PokemonCard from "./PokemonCard";
import pokemonData from "../pokemon/pokemon";

const PokemonGallery = () => {
    return (
      <div className="pokemon-cards">
        {pokemonData.map((pokemon_object) => (
          <PokemonCard pokemon={pokemon_object} key={pokemon_object.id} />
        ))}
      </div>
    );
  };

export default PokemonGallery;





