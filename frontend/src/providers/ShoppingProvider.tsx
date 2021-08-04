import { ReactNode, useState } from "react";
import { ShoppingContext } from "../contexts/ShoppingContext";
import { useToasts } from "react-toast-notifications";
import { MessageToast } from "../components/MessageToast";

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
}

export const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const { addToast } = useToasts();

  const [shopping, setShopping] = useState<Array<IItemsShopping>>([]);

  function addItemToShopping(item: IPokemon, isShopping = false) {
    const itemFinded = shopping.find((value) => value.item.name === item.name);

    if (itemFinded) {
      setShopping((oldValue) =>
        oldValue.map((value) =>
          value.item.name === itemFinded.item.name
            ? { ...value, count: value.count + 1 }
            : value
        )
      );
    } else {
      setShopping((oldValue) => [...oldValue, { item, count: 1 }]);
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
            ? { ...value, count: value.count - 1 }
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
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
