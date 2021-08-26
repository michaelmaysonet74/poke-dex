import { SchemaPokemon } from "../../schema-types";
import { Pokemon } from "../../data-sources/poke-api/models/pokemon";
import { getName } from "./name";
import { getMoves } from "./moves";
import { getTypes } from "./types";
import { getAbilities } from "./abilities";
import { getDimensions } from "./dimensions";

export interface MetaPokemon extends SchemaPokemon {
  _meta?: {
    pokemonDetails?: Pokemon;
  };
}

const PokemonResolver = {
  name: getName,
  moves: getMoves,
  types: getTypes,
  abilities: getAbilities,
  dimensions: getDimensions,
};

export default PokemonResolver;
