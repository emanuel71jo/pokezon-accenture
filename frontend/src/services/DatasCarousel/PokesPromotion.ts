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
  id: number;
  name: string;
  stats: Array<Stat>;
  types: Array<TypePokemon>;
  image: string;
}

export const PokesPromotion: Array<IPokemon> = [
  {
    id: 130,
    name: "Gyarados",
    image: "https://projectpokemon.org/images/normal-sprite/gyarados.gif",
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
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
          name: "moxie",
          url: "https://pokeapi.co/api/v2/ability/153/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 95,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 125,
        effort: 2,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 79,
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
        base_stat: 100,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 81,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
  },
  {
    id: 193,
    name: "Yanma",
    image: "https://projectpokemon.org/images/normal-sprite/yanma.gif",
    abilities: [
      {
        ability: {
          name: "speed-boost",
          url: "https://pokeapi.co/api/v2/ability/3/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "compound-eyes",
          url: "https://pokeapi.co/api/v2/ability/14/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "frisk",
          url: "https://pokeapi.co/api/v2/ability/119/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 95,
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
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
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
    id: 9,
    name: "Exeggutor",
    image: "https://projectpokemon.org/images/normal-sprite/exeggutor.gif",
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
        base_stat: 79,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 83,
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
        base_stat: 85,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 105,
        effort: 3,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 78,
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
    id: 173,
    name: "Butterfree",
    image: "https://projectpokemon.org/images/normal-sprite/butterfree.gif",
    abilities: [
      {
        ability: {
          name: "cute-charm",
          url: "https://pokeapi.co/api/v2/ability/56/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "magic-guard",
          url: "https://pokeapi.co/api/v2/ability/98/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "friend-guard",
          url: "https://pokeapi.co/api/v2/ability/132/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 28,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 55,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 15,
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
    id: 59,
    name: "Arcanine",
    image: "https://projectpokemon.org/images/normal-sprite/arcanine.gif",
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
          name: "flash-fire",
          url: "https://pokeapi.co/api/v2/ability/18/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "justified",
          url: "https://pokeapi.co/api/v2/ability/154/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 110,
        effort: 2,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 80,
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
        base_stat: 80,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 95,
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
    id: 137,
    name: "Porygon",
    image: "https://projectpokemon.org/images/normal-sprite/porygon.gif",
    abilities: [
      {
        ability: {
          name: "trace",
          url: "https://pokeapi.co/api/v2/ability/36/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "download",
          url: "https://pokeapi.co/api/v2/ability/88/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "analytic",
          url: "https://pokeapi.co/api/v2/ability/148/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 85,
        effort: 1,
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
        base_stat: 40,
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
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
  },
  {
    id: 108,
    name: "Lickitung",
    image: "https://projectpokemon.org/images/normal-sprite/lickitung.gif",
    abilities: [
      {
        ability: {
          name: "own-tempo",
          url: "https://pokeapi.co/api/v2/ability/20/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "oblivious",
          url: "https://pokeapi.co/api/v2/ability/12/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "cloud-nine",
          url: "https://pokeapi.co/api/v2/ability/13/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 90,
        effort: 2,
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
        base_stat: 75,
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
        base_stat: 75,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 30,
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
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
  },
  {
    id: 100,
    name: "Voltorb",
    image: "https://projectpokemon.org/images/normal-sprite/voltorb.gif",
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

// https://pokeapi.co/ pesquisa o pokemon pra achar os seu id e características
// caso a id do pokemon seja so um numero vc coloca dois zeros antes da url da imagem ex: 005.png, for dois numeros coloca 1, e se for tres nenhum
