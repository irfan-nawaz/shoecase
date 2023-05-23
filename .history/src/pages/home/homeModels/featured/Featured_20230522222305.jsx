import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
  /* max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 1%; */
  > div {
    /* flex-basis: 49%; */
    > img {
      height: 100%;
      width: 100%;
    }
  }
  @media (min-width: 550px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    > div {
      flex-basis: 49%;
      > img {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    gap: 1%;
    > div {
      flex-basis: 24%;
      > img {
        height: 100%;
        width: 100%;
      }
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
          <div key={product._id}>
            <img src={product.imgSrc} alt="" />
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Featured