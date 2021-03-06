import { getIsMonoType } from ".";
import { MetaPokemon } from "..";
import { fakePokemon, fakeType } from "../../../fixtures/data-sources/pokemon";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.isMonoType", () => {
  it("should return true if _meta.pokemonDetails.types length is equal to 1", () => {
    const result = getIsMonoType(baseParent);
    expect(result).toBe(true);
  });

  it("should return false if _meta.pokemonDetails.types length is greater than 1", () => {
    const updatedPokemonDetails = {
      ...fakePokemon,
      types: [fakeType, fakeType],
    };

    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        pokemonDetails: updatedPokemonDetails,
      },
    };

    const result = getIsMonoType(updatedParent);
    expect(result).toBe(false);
  });

  it("should return null if _meta.pokemonDetails.types is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        pokemonDetails: undefined,
      },
    };

    const result = getIsMonoType(updatedParent);
    expect(result).toBeNull();
  });
});
