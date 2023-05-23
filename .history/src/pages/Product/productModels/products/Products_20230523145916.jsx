import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'
const Products = () => {
  const { filteredProducts, getProducts } = useProducts()
  if 
  if (getProducts.isSuccess) {
    return (
      <>
        <div>
          {filteredProducts?.map((product) => (
            <Card props={product} />
          ))}
        </div>
      </>
    )
  }
}

export default Products
