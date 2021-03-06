import { MetaMeasurement } from "..";
import { ResolverContext } from "../../../context/types";

export const getWeight = (
  parent: MetaMeasurement,
  _: null,
  ctx: ResolverContext
): string | null => {
  const { weight } = parent?._meta ?? {};

  const {
    helpers: { weightInPounds },
  } = ctx;

  return weight
    ? `${weightInPounds({ weightInHectograms: weight })} lbs.`
    : null;
};
