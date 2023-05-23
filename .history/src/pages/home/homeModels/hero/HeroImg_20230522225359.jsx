import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'
import Attention from '../../../../components/animations/HeroAnimations/HeroCta'
// import { Button } from '../buttons/Primary'

import { StyledHeroImg } from '../../../../styles/index'
import Mission from '../mission/Mission'

const Hero = () => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <StyledHeroImg style={{ maxWidth: '1200px' }}>
          <div>
            <h1>Shoe Case</h1>
            <h2>The best shoes for the best people</h2>
            <div>
              <Attention />
              <Link to="/product">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </StyledHeroImg>
        <StyledHeroImg style={{ maxWidth: '1200px' }}>
          <div>
            <h1>Shoe Case</h1>
            <h2>The best shoes for the best people</h2>
            <div>
              <Attention />
              <Link to="/product">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </StyledHeroImg>
      </div>
    </div>
  )
}

export default Hero
