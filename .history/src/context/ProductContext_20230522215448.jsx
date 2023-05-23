import { useContext, createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { products, products } from '../api/products'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const products = useQuery(['products'], products)
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
