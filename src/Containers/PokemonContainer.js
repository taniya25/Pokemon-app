import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "../Components/Pokemon";
import { GET_POKEMONS } from "../graph-ql/get-pokemons";

function PokemonContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonContainer;
