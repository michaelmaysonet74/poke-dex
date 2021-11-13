import { RESTDataSource } from "apollo-datasource-rest";
import { Pokemon } from "./models/pokemon";
import { PokemonSpecies } from "./models/pokemon-species";

export class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2";
  }

  async getPokemonById(id: string): Promise<Pokemon> {
    return this.get(`/pokemon/${id}`);
  }

  async getPokemonSpeciesById(id: string): Promise<PokemonSpecies> {
    return this.get(`/pokemon-species/${id}`);
  }

  async getEvolutionChain(url: string): Promise<unknown | null> {
    return url.match("evolution-chain") ? this.get(url) : null;
  }
}
