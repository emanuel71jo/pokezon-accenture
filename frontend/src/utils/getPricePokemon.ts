const valueType: { [key: string]: number } = {
  bug: 50,
  dark: 100,
  dragon: 95,
  electric: 130,
  fairy: 80,
  fighting: 98,
  fire: 102,
  flying: 75,
  ghost: 60,
  grass: 89,
  ground: 78,
  ice: 96,
  normal: 68,
  poison: 56,
  psychic: 97,
  rock: 77,
  steel: 74,
  water: 92,
};

type Stat = {
  base_stat: number;
  effort: number;
};

type TypePokemon = {
  type: {
    name: string;
    url: string;
  };
};

export function getPricePokemon(
  ability: number,
  stats: Array<Stat>,
  types: Array<TypePokemon>,
  multiplier = 1
): string {
  const WEIGHT_ABILITY = 70;
  const STAT_BASE = 80;
  const EFFORT = 60;

  const statsTotalValue = stats.reduce(
    (total, item) => (total += item.base_stat),
    0
  );
  const effortTotalValue = stats.reduce(
    (total, item) => (total += item.effort),
    0
  );
  const typeTotalValue = types.reduce(
    (total, item) => (total += valueType[item.type.name]),
    0
  );

  return (
    (3 * WEIGHT_ABILITY * ability +
      3 * STAT_BASE * statsTotalValue +
      2 * EFFORT * effortTotalValue +
      2 * typeTotalValue) *
    multiplier
  ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

export function getPricePokemonValue(
  ability: number,
  stats: Array<Stat>,
  types: Array<TypePokemon>,
  multiplier = 1
): number {
  const WEIGHT_ABILITY = 70;
  const STAT_BASE = 80;
  const EFFORT = 60;

  const statsTotalValue = stats.reduce(
    (total, item) => (total += item.base_stat),
    0
  );
  const effortTotalValue = stats.reduce(
    (total, item) => (total += item.effort),
    0
  );
  const typeTotalValue = types.reduce(
    (total, item) => (total += valueType[item.type.name]),
    0
  );

  return (
    (3 * WEIGHT_ABILITY * ability +
      3 * STAT_BASE * statsTotalValue +
      2 * EFFORT * effortTotalValue +
      2 * typeTotalValue) *
    multiplier
  );
}
