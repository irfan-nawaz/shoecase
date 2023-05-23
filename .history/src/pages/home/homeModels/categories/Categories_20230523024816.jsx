import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  > div {
    height: 20rem;
    max-height: 100%;
  }
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    justify-content: space-between;
    gap: 1%;
    > div {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      flex-basis: 49%;
    }
  }
  @media (min-width: 1100px) {
    > div {
      flex-basis: 49%;
      margin: 1% 0;
    }
  }
`

// const StyledSquare = styled.div`
//   margin: 100px 0;
//   height: 300px;
//   overflow: hidden;
//   transform: rotate(-45deg) scale(0.7);
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
// `

const Categories = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <div
            key={product._id}
            style={{ backgroundImage: `url(${product.imgSrc})` }}
          ></div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
