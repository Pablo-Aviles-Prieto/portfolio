import styled from 'styled-components'
import { Hamburger, Square, Close, Minimize } from '../../Icons'
import { IOpenFile, ISubMenuObj, IProfileInfoSubPages, IProjectsSubPages, IContactSubPages } from '../../../interfaces'

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
  transition: all 0.4s ease-in;
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
    &-content {
      &-submenu {
        cursor: pointer;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        &.menu__selected {
          background-color: ${({ theme }) => theme.emphasizeColor};
        }
        &:hover {
          background-color: ${({ theme }) => theme.lightEmphasize};
        }
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
    &-content {
      padding: 2px 15px;
    }
  }
`

type ISubPage = IProfileInfoSubPages | IProjectsSubPages | IContactSubPages

interface IProps {
  isOpen: boolean
  subMenuData: ISubMenuObj[]
  subPage: ISubPage
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  setSubPage: React.Dispatch<React.SetStateAction<ISubPage>>
  children: JSX.Element
}

export const WindowLayer: React.FC<IProps> = ({
  subMenuData,
  isOpen,
  subPage,
  switchOpenFileState,
  setSubPage,
  children
}: IProps) => {
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
          {isOpen &&
            subMenuData.map(menuLine => {
              return (
                <div
                  key={menuLine.title}
                  className={
                    subPage === menuLine.title
                      ? 'left-section-content-submenu menu__selected'
                      : 'left-section-content-submenu'
                  }
                  onClick={() => {
                    setSubPage(menuLine.title)
                  }}
                >
                  <menuLine.SVG width={15} height={15} />
                  <p>{menuLine.content}</p>
                </div>
              )
            })}
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
        {isOpen && <div className="right-section-content">{children}</div>}
      </div>
    </WindowContainer>
  )
}
