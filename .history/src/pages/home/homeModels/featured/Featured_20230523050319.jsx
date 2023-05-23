import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'
import { Link } from 'react-router-dom'

const StyledCategoryCardWrapper = styled.div`
  a > div {
    > img {
      height: 100%;
      width: 100%;
    }
  }
  @media (min-width: 550px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    a > div {
      flex-basis: 49%;
    }
  }
  @media (min-width: 868px) {
    > a > div {
      flex-basis: 24%;
    }
  }
`

const Featured = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <Link>
            <div key={product._id}>
              <img src={product.imgSrc} alt="" />
            </div>
          </Link>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Featured
