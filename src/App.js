import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";
import PokemonCard from "./components/PokemonCard.js";
import PokemonGallery from "./components/PokemonGallery.js"

// functional component means -> to create a new js file that we can reuse
// hence in this case, we need to create a functional component called PokemonCard
// so create a new file called PokemonCard.js and write our functional component there

// const bulbasaur = pokemonData[0];
// const ivysaur = pokemonData[1];
// const venusaur = pokemonData[2];

function App() {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + "../pokemonImage/p.png"} className="pokemon-image"></img>
      <PokemonGallery />
    </div>
  );
}

export default App;
// <PokemonCard pokemon={bulbasaur} /> --> This is how I used the PokemonCard functional
// component to get bulbasaur. This is useful in PokemonGallery.js later.
// <MyComponent /> means to instruct React to create and render a user-defined component