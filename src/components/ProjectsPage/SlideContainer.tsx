import { FC } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { IImages } from '../../interfaces'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Container = styled.div`
  .slider {
    width: 100%;
    margin: 0 auto;
    .slick-slide img {
      object-fit: cover;
      width: 100%;
      height: 500px;
      animation: changeOpacity 0.8s forwards;
    }
    .slick-next,
    .slick-prev {
      top: calc(50% - (30px / 2));
      &::before {
        font-size: 30px;
      }
    }
    .slick-next {
      right: 25px;
    }
    .slick-prev {
      z-index: 1;
      left: 12px;
    }
    .slick-dots {
      bottom: 15px;
      li {
        button {
          &::before {
            font-size: 12px;
          }
        }
      }
    }

    @keyframes changeOpacity {
      0% {
        opacity: 0;
      }
      49.9% {
        opacity: 0;
      }
      70% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`

const settings = {
  // autoplay: true,
  // autoplaySpeed: 2000,
  dots: true,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

interface IProps {
  projectImages: Array<IImages>
}

export const SlideContainer: FC<IProps> = ({ projectImages }) => {
  return (
    <Container>
      <Slider className="slider" {...settings}>
        {projectImages.map(image => (
          <img key={image.description} src={image.path} alt={image.description} />
        ))}
      </Slider>
    </Container>
  )
}
