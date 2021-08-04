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

export const PokesLegends: Array<IPokemon> = [
  {
    id: 150,
    base_experience: 306,
    height: 20,
    order: 230,
    weight: 1220,
    species: {
      name: "mewtwo",
      url: "https://pokeapi.co/api/v2/pokemon-species/150/",
    },
    name: "Mewtwo",
    image: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif",
    abilities: [
      {
        ability: {
          name: "pressure",
          url: "https://pokeapi.co/api/v2/ability/46/",
        },
        is_hidden: false,
        slot: 1,
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
        base_stat: 106,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 110,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 154,
        effort: 3,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 130,
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
    id: 244,
    base_experience: 261,
    height: 21,
    order: 322,
    weight: 1980,
    species: {
      name: "entei",
      url: "https://pokeapi.co/api/v2/pokemon-species/244/",
    },
    name: "Entei",
    image: "https://projectpokemon.org/images/normal-sprite/entei.gif",
    abilities: [
      {
        ability: {
          name: "pressure",
          url: "https://pokeapi.co/api/v2/ability/46/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "inner-focus",
          url: "https://pokeapi.co/api/v2/ability/39/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 115,
        effort: 1,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 115,
        effort: 2,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 75,
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
    ],
  },
  {
    id: 249,
    base_experience: 306,
    height: 52,
    weight: 2160,
    species: {
      name: "lugia",
      url: "https://pokeapi.co/api/v2/pokemon-species/249/",
    },
    order: 328,
    name: "Lugia",
    image: "https://projectpokemon.org/images/normal-sprite/lugia.gif",
    abilities: [
      {
        ability: {
          name: "pressure",
          url: "https://pokeapi.co/api/v2/ability/46/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "multiscale",
          url: "https://pokeapi.co/api/v2/ability/136/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 106,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 130,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 154,
        effort: 3,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 110,
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
    id: 245,
    name: "Suicune",
    base_experience: 261,
    weight: 1870,
    species: {
      name: "suicune",
      url: "https://pokeapi.co/api/v2/pokemon-species/245/",
    },
    order: 323,
    height: 20,
    image: "https://projectpokemon.org/images/normal-sprite/suicune.gif",
    abilities: [
      {
        ability: {
          name: "pressure",
          url: "https://pokeapi.co/api/v2/ability/46/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "inner-focus",
          url: "https://pokeapi.co/api/v2/ability/39/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 115,
        effort: 1,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 115,
        effort: 2,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 85,
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
    id: 716,
    base_experience: 306,
    height: 30,
    order: 833,
    weight: 2150,
    species: {
      name: "xerneas",
      url: "https://pokeapi.co/api/v2/pokemon-species/716/",
    },
    name: "Xerneas",
    image: "https://projectpokemon.org/images/normal-sprite/xerneas.gif",
    abilities: [
      {
        ability: {
          name: "fairy-aura",
          url: "https://pokeapi.co/api/v2/ability/187/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    stats: [
      {
        base_stat: 126,
        effort: 3,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 131,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 95,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 131,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 98,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 99,
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
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
  },
  {
    id: 251,
    base_experience: 270,
    height: 6,
    weight: 50,
    species: {
      name: "celebi",
      url: "https://pokeapi.co/api/v2/pokemon-species/251/",
    },
    order: 330,
    name: "Celebi",
    image: "https://projectpokemon.org/images/normal-sprite/celebi.gif",
    abilities: [
      {
        ability: {
          name: "natural-cure",
          url: "https://pokeapi.co/api/v2/ability/30/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    stats: [
      {
        base_stat: 100,
        effort: 3,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 100,
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
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
      {
        slot: 2,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
    ],
  },
  {
    id: 151,
    weight: 40,
    base_experience: 270,
    order: 233,
    species: {
      name: "mew",
      url: "https://pokeapi.co/api/v2/pokemon-species/151/",
    },
    height: 4,
    name: "Mew",
    image: "https://projectpokemon.org/images/normal-sprite/mew.gif",
    abilities: [
      {
        ability: {
          name: "synchronize",
          url: "https://pokeapi.co/api/v2/ability/28/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    stats: [
      {
        base_stat: 100,
        effort: 3,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 100,
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
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
  },
  {
    id: 100,
    name: "Uxie",
    base_experience: 66,
    height: 5,
    order: 149,
    species: {
      name: "voltorb",
      url: "https://pokeapi.co/api/v2/pokemon-species/100/",
    },
    weight: 104,
    image: "https://projectpokemon.org/images/normal-sprite/uxie.gif",
    abilities: [
      {
        ability: {
          name: "soundproof",
          url: "https://pokeapi.co/api/v2/ability/43/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "static",
          url: "https://pokeapi.co/api/v2/ability/9/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "aftermath",
          url: "https://pokeapi.co/api/v2/ability/106/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 40,
        effort: 0,
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
        base_stat: 50,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 55,
        effort: 0,
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
        base_stat: 100,
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
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
  },
];
