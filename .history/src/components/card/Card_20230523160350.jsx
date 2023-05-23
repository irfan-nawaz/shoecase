import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import { styled } from 'styled-components'

const StyledProduct = styled.figure`
  > a > div > img {
    width: 100%;
    height: auto;
  }
  > a > div {
  }
  @media (min-width: 550px) {
    flex-basis: 24%;
    > a {
      display: flex;
      flex-flow: column;
      flex: 1 1 300px;
      gap: 1%;
      > div {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
      }
      > figcaption {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
      }
    }
  }
`

const Card = ({ props }) => {
  return (
    <>
      <StyledProduct>
        <Link>
          <div>
            <img src={props.imgSrc} alt="" />
          </div>
          <figcaption>
            <h3>{props.title}</h3>
            <p>{props.categoryName}</p>
            <p>₹ {props.price}</p>
            <Rating initialValue={props.rating} transition size={20} />
            <button varient="outline">View Details</button>
          </figcaption>
        </Link>
      </StyledProduct>
    </>
  )
}

export default Card
