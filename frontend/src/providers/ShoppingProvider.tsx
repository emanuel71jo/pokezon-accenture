import { ReactNode, useEffect, useState } from "react";
import { ShoppingContext } from "../contexts/ShoppingContext";
import { useToasts } from "react-toast-notifications";
import { MessageToast } from "../components/MessageToast";
import {
  getPricePokemon,
  getPricePokemonValue,
} from "../utils/getPricePokemon";

type ShoppingProviderProps = {
  children: ReactNode;
};
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
  subTotal: string;
  subTotalValue: number;
}

export const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const { addToast } = useToasts();

  const [shopping, setShopping] = useState<Array<IItemsShopping>>([]);
  const [total, setTotal] = useState("R$ 0,00");

  useEffect(() => {
    if (shopping.length > 0) {
      setTotal(
        shopping
          .reduce((total, order) => (total += order.subTotalValue), 0)
          .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      );
    } else {
      setTotal("R$ 0,00");
    }
  }, [shopping]);

  function addItemToShopping(item: IPokemon, isShopping = false) {
    const itemFinded = shopping.find((value) => value.item.name === item.name);

    if (itemFinded) {
      setShopping((oldValue) =>
        oldValue.map((value) =>
          value.item.name === itemFinded.item.name
            ? {
                ...value,
                count: value.count + 1,
                subTotal: getPricePokemon(
                  value.item.abilities.length,
                  value.item.stats,
                  value.item.types,
                  value.count + 1
                ),
                subTotalValue: getPricePokemonValue(
                  value.item.abilities.length,
                  value.item.stats,
                  value.item.types,
                  value.count + 1
                ),
              }
            : value
        )
      );
    } else {
      setShopping((oldValue) => [
        ...oldValue,
        {
          item,
          count: 1,
          subTotal: getPricePokemon(
            item.abilities.length,
            item.stats,
            item.types
          ),
          subTotalValue: getPricePokemonValue(
            item.abilities.length,
            item.stats,
            item.types
          ),
        },
      ]);
    }

    if (!isShopping)
      addToast(<MessageToast pokeName={item.name} />, {
        appearance: "success",
        autoDismiss: true,
      });
  }

  function removeItemFromShopping(item: IPokemon) {
    const itemFinded = shopping.find((value) => value.item.name === item.name);

    if (itemFinded?.count === 1) {
      setShopping((oldValue) =>
        oldValue.filter((value) => value.item.name !== item.name)
      );
    } else {
      setShopping((oldValue) =>
        oldValue.map((value) =>
          value.item.name === item.name
            ? {
                ...value,
                count: value.count - 1,
                subTotal: getPricePokemon(
                  value.item.abilities.length,
                  value.item.stats,
                  value.item.types,
                  value.count - 1
                ),
                subTotalValue: getPricePokemonValue(
                  value.item.abilities.length,
                  value.item.stats,
                  value.item.types,
                  value.count - 1
                ),
              }
            : value
        )
      );
    }
  }

  function removeAllItemFromShopping(item: IPokemon) {
    setShopping((oldValue) =>
      oldValue.filter((value) => value.item.name !== item.name)
    );
  }

  function getTotalItems(): number {
    return shopping.length;
  }

  return (
    <ShoppingContext.Provider
      value={{
        shopping,
        addItemToShopping,
        removeItemFromShopping,
        removeAllItemFromShopping,
        getTotalItems,
        total,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
