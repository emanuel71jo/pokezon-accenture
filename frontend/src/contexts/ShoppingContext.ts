import { createContext } from "react";

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

interface IItemsShopping {
  item: IPokemon;
  count: number;
}

interface ShoppingContextData {
  shopping: Array<IItemsShopping>;
  addItemToShopping: (item: IPokemon, isShopping?: boolean) => void;
  removeItemFromShopping: (item: IPokemon) => void;
  removeAllItemFromShopping: (item: IPokemon) => void;
  getTotalItems: () => number;
}

export const ShoppingContext = createContext({} as ShoppingContextData);
