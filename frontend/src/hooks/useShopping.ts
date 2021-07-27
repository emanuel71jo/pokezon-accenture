import { useContext } from 'react'
import { ShoppingContext } from '../contexts/ShoppingContext'

export function useShopping() {
  const context = useContext(ShoppingContext)

  return context
}
