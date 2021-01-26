import React from "react";

function PokemonCard({ pokemon }) {
    const { id, name, type, base } = pokemon;
    return (
      <div className = 'box'>
        <img src={process.env.PUBLIC_URL + `../pokemonImage/${pokemon.id}.png`}></img>
        <div>{name.english}</div>
        <div>{type}</div>
        <div>HP: {base.HP}</div>
        <div>Attack: {base.Attack}</div>
        <div>Defence: {base.Defence}</div>
        <div>SpAttack: {base.SpAttack}</div>
        <div>SpDefence: {base.SpDefence}</div>
        <div>Speed: {base.Speed}</div>
      </div>
    );
  }

export default PokemonCard;