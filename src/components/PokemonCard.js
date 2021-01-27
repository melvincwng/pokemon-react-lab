import React from "react";
import "../App.css";

function PokemonCard( {pokemon} ) {
    const { id, name, type, base } = pokemon;

    if (type[1]) {
      type[1] = type[1]
    } else {
      type[1] = ""
    }
    
    return (
      <div className = 'box'>
        <img src={process.env.PUBLIC_URL + `pokemonImage/${id}.png`}></img>
        <div><b>{name.english}</b></div>
        <span className = "type-box">{type[0]}</span>
        <span className = "type-box2">{type[1]}</span>
        <div><b>HP: {base.HP}</b></div>
        <div><b>Attack: {base.Attack}</b></div>
        <div><b>Defence: {base.Defence}</b></div>
        <div><b>SpAttack: {base.SpAttack}</b></div>
        <div><b>SpDefence: {base.SpDefence}</b></div>
        <div><b>Speed: {base.Speed}</b></div>
      </div>
    );
  }

export default PokemonCard;
// functional component:
// e.g. certain-function(props) -> in notes and React.js, this props is a 'property OBJECT'
// <PokemonCard pokemon={pokemon_object} key={pokemon_object.id} /> - from PokemonGallery.js
// Based on react.js, line 23 basically tells React to call PokemonCard component
// with the object {pokemon: {pokemon_object}} as props (recall props is an object)
// In this object {pokemon: {pokemon_object}}, as defined by the curly braces {}, we are embedding the pokemon_object in there,
// hence this expression can be further simiplified to {pokemon: {id: ..., name: ..., type: ..., base: ...}}
// the 'pokemon' as defined in line 3 is an object as seen from line 4
// hence {pokemon} means a object within another object -> and this means
// {pokemon: {...}} -> which is similar synthax as line 27 {pokemon: {id: ..., name: ..., type: ..., base: ...}}

// <PokemonCard pokemon={bulbasaur} /> --> This is how I used the PokemonCard functional
// component to get bulbasaur. This is useful in PokemonGallery.js later.