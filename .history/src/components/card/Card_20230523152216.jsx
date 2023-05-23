import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import { styled } from 'styled-components'

const StyledProduct = styled.figure`
  @media (min-width: 550px) {
    display: block;
    flex-basis: 24%;
    color: red;
  }
`

const Card = ({ props }) => {
  return (
    <>
      <figure>
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
        </figure>
      </Link>
    </>
  )
}

export default Card
