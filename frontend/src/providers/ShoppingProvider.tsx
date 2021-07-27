import { ReactNode, useState } from 'react'
import { ShoppingContext } from '../contexts/ShoppingContext'

type ShoppingProviderProps = {
  children: ReactNode
}

interface IItem {
  id: number
  name: string
  image: string
  types: string
  types2: string
  abilities: string
  abilities2: string
}

interface IItemsShopping {
  item: IItem
  count: number
}

export const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const [shopping, setShopping] = useState<Array<IItemsShopping>>([])

  function addItemToShopping(item: IItem) {
    const itemFinded = shopping.find((value) => value.item.name === item.name)

    if (itemFinded) {
      setShopping((oldValue) =>
        oldValue.map((value) =>
          value.item.name === itemFinded.item.name
            ? { ...value, count: value.count + 1 }
            : value
        )
      )
    } else {
      setShopping((oldValue) => [...oldValue, { item, count: 1 }])
    }
  }

  function removeItemFromShopping(item: IItem) {
    const itemFinded = shopping.find((value) => value.item.name === item.name)

    if (itemFinded?.count === 1) {
      setShopping((oldValue) =>
        oldValue.filter((value) => value.item.name !== item.name)
      )
    } else {
      setShopping((oldValue) =>
        oldValue.map((value) =>
          value.item.name === item.name
            ? { ...value, count: value.count - 1 }
            : value
        )
      )
    }
  }

  function removeAllItemFromShopping(item: IItem) {
    setShopping((oldValue) =>
      oldValue.filter((value) => value.item.name !== item.name)
    )
  }

  function getTotalItems(): number {
    return shopping.length
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
  )
}
