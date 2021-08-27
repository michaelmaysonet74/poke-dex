import { getWeight } from ".";
import { MetaDimensions } from "..";

const baseParent: MetaDimensions = {
  _meta: {
    weight: 3,
  },
};

describe("Dimension.weight", () => {
  it("should return weight as a string", () => {
    const expectedResult = baseParent?._meta?.weight?.toString();
    const result = getWeight(baseParent);
    expect(result).toBe(expectedResult);
  });

  it("should return null if _meta.weight is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        weight: undefined,
      },
    };
    const result = getWeight(updatedParent);
    expect(result).toBeNull();
  });
});
