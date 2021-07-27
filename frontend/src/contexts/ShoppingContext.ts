import { createContext } from 'react'

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

interface ShoppingContextData {
  shopping: Array<IItemsShopping>
  addItemToShopping: (item: IItem) => void
  removeItemFromShopping: (item: IItem) => void
  removeAllItemFromShopping: (item: IItem) => void
  getTotalItems: () => number
}

export const ShoppingContext = createContext({} as ShoppingContextData)
