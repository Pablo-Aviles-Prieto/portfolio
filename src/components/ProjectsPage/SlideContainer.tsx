import { FC } from 'react'
import styled from 'styled-components'
import { IImages } from '../../interfaces'

const Container = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;

  img {
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    transition: 0.5s ease;
    filter: grayscale(0.5);
    box-shadow: -14px 5px 19px rgb(0 0 0 / 53%);
    &:hover {
      cursor: crosshair;
      width: 700px;
      border-radius: 8px;
      filter: contrast(120%) grayscale(0);
      box-shadow: 2px 4px 10px rgb(0 0 0 / 50%);
    }
    &:last-child {
      border-right: none;
    }
  }
  &:hover {
    img {
      filter: blur(2px) grayscale(0.5);
      &:hover {
        filter: blur(0);
      }
    }
  }
`

interface IProps {
  projectImages: Array<IImages>
}

export const SlideContainer: FC<IProps> = ({ projectImages }) => {
  return (
    <Container width="100%" height="500px">
      {projectImages.map(image => (
        <img key={image.description} src={image.path} alt={image.description} />
      ))}
    </Container>
  )
}
