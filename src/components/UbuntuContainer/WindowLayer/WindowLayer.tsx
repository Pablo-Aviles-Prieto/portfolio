import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Hamburger, Square, Close, Minimize } from '../../Icons'
import { IOpenFile } from '../../../interfaces'

const WindowContainer = styled.div`
  display: flex;
  width: 0;
  height: 0;
  opacity: 0;
  left: 20px;
  top: 270px;
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
          bottom: -6px;
          left: 0px;
        }
        .button__maximize {
          position: absolute;
          bottom: 2px;
          left: 3px;
        }
        .button__exit {
          position: absolute;
          bottom: 1px;
          left: 1px;
          cursor: pointer;
        }
      }
    }
  }
`

interface IProps {
  openedFile: IOpenFile
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  children: JSX.Element
}

export const WindowLayer: React.FC<IProps> = ({ openedFile, switchOpenFileState, children }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    // If its closed, we want to open it immediately
    if (!isOpen) {
      setIsOpen(true)
      return
    }

    // If its not immediately opened, we close it anyway.
    setIsOpen(false)

    if (openedFile === 'none') {
      return
    }

    // Reopen it after the .5s transition
    const timerId = setTimeout(() => {
      setIsOpen(true)
    }, 600)

    return () => {
      clearTimeout(timerId)
    }
  }, [openedFile])

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
              <Minimize className="button__minimize" width={25} height={25} />
            </button>
            <button type="button">
              <Square className="button__maximize" width={19} height={19} />
            </button>
            <button type="button">
              <Close className="button__exit" onClick={() => switchOpenFileState('none')} width={22} height={22} />
            </button>
          </div>
        </div>
        <div className="right-section-content">{children}</div>
      </div>
    </WindowContainer>
  )
}
