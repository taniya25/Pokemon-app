import React from "react";

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <h4>{pokemon.name}</h4>
      </div>
      <div className="pokemon__meta">
        <span> {pokemon.maxHP} </span>
        <span> {pokemon.maxCP} </span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {pokemon.attacks.special.slice(0, 3).map((attack) => (
          <span key={`${attack.name} - ${attack.damage}`}>{attack.name}</span>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
