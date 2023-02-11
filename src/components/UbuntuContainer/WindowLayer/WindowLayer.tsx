import styled from 'styled-components'
import { Hamburger } from '../../Icons'

const WindowContainer = styled.div`
  display: flex;
  width: 0;
  height: 0;
  opacity: 0;
  left: 20px;
  top: 160px;
  background-color: ${({ theme }) => theme.mainBground};
  margin: 0 auto;
  max-width: 950px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 50%);
  font-family: 'Poppins';
  position: absolute;
  transition: all 0.5s ease-in;
  &.page__open {
    width: 85%;
    height: 97%;
    left: calc(50% - (950px / 2));
    top: 0;
    opacity: 1;
  }
  .left-section,
  .right-section {
    &-header {
      background-color: ${({ theme }) => theme.blackBground};
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
    &-content {
      padding: 15px;
    }
  }
  .left-section {
    width: 25%;
    border-right: 1px solid black;
    background-color: ${({ theme }) => theme.secondBground};
    &-header {
      justify-content: space-between;
      &__menu {
        display: flex;
        cursor: pointer;
      }
    }
  }
  .right-section {
    width: 75%;
    &-header {
      justify-content: space-between;
      &__buttons {
        display: flex;
        button {
          position: relative;
          width: 25px;
          height: 25px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          padding: 0;
          font-size: 15px;
          background-color: ${({ theme }) => theme.greyBground};
          text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
          box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
          border: none;
          margin-right: 6px;
          color: white;
          &:focus {
            outline: none;
          }
        }
        .button__minimize {
          position: absolute;
          font-size: 20px;
          bottom: -3px;
          left: 5px;
        }
        .button__maximize {
          font-size: 21px;
          position: absolute;
          bottom: -2px;
          left: 3px;
        }
        .button__exit {
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
  }
`

interface IProps {
  isOpen: boolean
  switchOpenFileState: React.Dispatch<React.SetStateAction<'none' | 'profileInfo' | 'projects' | 'contacts'>>
  children: JSX.Element
}

export const WindowLayer: React.FC<IProps> = ({ isOpen, switchOpenFileState, children }: IProps) => {
  console.log('isOpen', isOpen)

  return (
    <WindowContainer className={isOpen ? 'page__open' : ''}>
      <div className="left-section">
        <div className="left-section-header">
          <div />
          <p>Menu</p>
          <div className="left-section-header__menu">
            <Hamburger width={25} height={25} />
          </div>
        </div>
        <div className="left-section-content">
          <p>Menu bar options</p>
        </div>
      </div>
      <div className="right-section">
        <div className="right-section-header">
          <div />
          <p>Content title</p>
          <div className="right-section-header__buttons">
            <button type="button">
              <span className="button__minimize">&#9472;</span>
            </button>
            <button type="button">
              <span className="button__maximize">&#9723;</span>
            </button>
            <button type="button">
              <span className="button__exit" onClick={() => switchOpenFileState('none')}>
                &#10005;
              </span>
            </button>
          </div>
        </div>
        <div className="right-section-content">{children}</div>
      </div>
    </WindowContainer>
  )
}
