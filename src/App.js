import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";
import PokemonCard from "./PokemonCard.js";

// functional component means -> to create a new js file that we can reuse
// hence in this case, we need to create a functional component called PokemonCard
// so create a new file called PokemonCard.js and write our functional component there

const bulbasaur = pokemonData[0];
const ivysaur = pokemonData[1];
const venusaur = pokemonData[2];

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={bulbasaur} />
      <PokemonCard pokemon={ivysaur} />
      <PokemonCard pokemon = {venusaur} />
    </div>
  );
}

export default App;

