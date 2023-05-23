import { Link } from 'react-router-dom'
import Attention from '../../../../components/animations/HeroAnimations/HeroCta'
// import { Button } from '../buttons/Primary'

import { StyledHeroImg } from '../../../../styles/index'

const Hero = () => (
  <StyledHeroImg>
    <div>
      <h1>Sprint Store</h1>
      <h2>The best shoes for the best people</h2>
      <div>
        <Attention />
        <Link to="/product">
          <button>Shop Now</Button>
        </Link>
      </div>
    </div>
  </StyledHeroImg>
)

export default Hero