import { getName } from ".";
import { MetaPokemon } from "..";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { baseResolverContext } from "../../../helpers/test";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.name", () => {
  it("should return name as a string", () => {
    const expectedResult = "Squirtle";
    const result = getName(baseParent, null, baseResolverContext);
    expect(result).toBe(expectedResult);
  });

  it("should return null if _meta.pokemonDetails.name is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        pokemonDetails: {
          ...fakePokemon,
          name: undefined as unknown as string,
        },
      },
    };
    const result = getName(updatedParent, null, baseResolverContext);
    expect(result).toBeNull();
  });
});
