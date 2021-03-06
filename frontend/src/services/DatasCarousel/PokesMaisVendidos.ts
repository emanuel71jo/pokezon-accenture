type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type TypePokemon = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

interface IPokemon {
  abilities: Array<Ability>;
  base_experience: number; //
  height: number; //
  id: number;
  name: string;
  order: number; //
  stats: Array<Stat>;
  types: Array<TypePokemon>;
  weight: number; //
  species: {
    //
    name: string;
    url: string;
  };
  image: string;
}

export const PokesMaisVendidos: Array<IPokemon> = [
  {
    id: 25,
    name: "Pikachu",
    base_experience: 112,
    height: 4,
    order: 35,
    species: {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon-species/25/",
    },
    weight: 60,
    image: "https://projectpokemon.org/images/normal-sprite/pikachu.gif",
    abilities: [
      {
        ability: {
          name: "static",
          url: "https://pokeapi.co/api/v2/ability/9/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "lightning-rod",
          url: "https://pokeapi.co/api/v2/ability/31/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
  },
  {
    id: 63,
    base_experience: 62,
    height: 9,
    order: 100,
    species: {
      name: "abra",
      url: "https://pokeapi.co/api/v2/pokemon-species/63/",
    },
    weight: 195,
    name: "Abra",
    image: "https://projectpokemon.org/images/normal-sprite/abra.gif",
    abilities: [
      {
        ability: {
          name: "synchronize",
          url: "https://pokeapi.co/api/v2/ability/28/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "inner-focus",
          url: "https://pokeapi.co/api/v2/ability/39/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "magic-guard",
          url: "https://pokeapi.co/api/v2/ability/98/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 15,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 105,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
  },
  {
    id: 1,
    name: "Bulbasaur",
    base_experience: 64,
    height: 7,
    order: 1,
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    weight: 69,
    image: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
  },
  {
    id: 23,
    base_experience: 58,
    height: 20,
    order: 32,
    species: {
      name: "ekans",
      url: "https://pokeapi.co/api/v2/pokemon-species/23/",
    },
    weight: 69,
    name: "Ekans",
    image: "https://projectpokemon.org/images/normal-sprite/ekans.gif",
    abilities: [
      {
        ability: {
          name: "intimidate",
          url: "https://pokeapi.co/api/v2/ability/22/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "shed-skin",
          url: "https://pokeapi.co/api/v2/ability/61/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "unnerve",
          url: "https://pokeapi.co/api/v2/ability/127/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 60,
        effort: 1,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 44,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 54,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
  },
  {
    id: 6,
    base_experience: 240,
    height: 17,
    order: 7,
    species: {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon-species/6/",
    },
    weight: 905,
    name: "Charizard",
    image: "https://projectpokemon.org/images/normal-sprite/charizard.gif",
    abilities: [
      {
        ability: {
          name: "blaze",
          url: "https://pokeapi.co/api/v2/ability/66/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "solar-power",
          url: "https://pokeapi.co/api/v2/ability/94/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 84,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 109,
        effort: 3,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
  },
  {
    id: 7,
    name: "Squirtle",
    base_experience: 63,
    height: 5,
    order: 10,
    species: {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon-species/7/",
    },
    weight: 90,
    image: "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
    abilities: [
      {
        ability: {
          name: "torrent",
          url: "https://pokeapi.co/api/v2/ability/67/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "rain-dish",
          url: "https://pokeapi.co/api/v2/ability/44/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 44,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Charmander",
    base_experience: 62,
    height: 6,
    order: 5,
    species: {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon-species/4/",
    },
    weight: 85,
    image: "https://projectpokemon.org/images/normal-sprite/charmander.gif",
    abilities: [
      {
        ability: {
          name: "blaze",
          url: "https://pokeapi.co/api/v2/ability/66/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "solar-power",
          url: "https://pokeapi.co/api/v2/ability/94/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 39,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 52,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
  },
  {
    id: 10,
    name: "Caterpie",
    base_experience: 39,
    height: 3,
    order: 14,
    species: {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon-species/10/",
    },
    weight: 29,
    image: "https://projectpokemon.org/images/normal-sprite/caterpie.gif",
    abilities: [
      {
        ability: {
          name: "shield-dust",
          url: "https://pokeapi.co/api/v2/ability/19/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "run-away",
          url: "https://pokeapi.co/api/v2/ability/50/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 45,
        effort: 1,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
  },
];
