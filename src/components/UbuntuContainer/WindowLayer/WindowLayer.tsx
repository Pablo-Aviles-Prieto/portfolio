import styled from 'styled-components'

const WindowContainer = styled.div`
  display: flex;
  width: 85%;
  height: 97%;
  background-color: ${({ theme }) => theme.mainBground};
  margin: 0 auto;
  max-width: 950px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 50%);
  font-family: 'Poppins';
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
          &:hover {
            cursor: pointer;
          }
          &:focus {
            outline: none;
          }
        }
        .button__minimize {
          position: absolute;
          font-size: 20px;
          bottom: -3px;
          left: 6px;
        }
        .button__maximize {
          font-size: 21px;
          position: absolute;
          bottom: -2px;
          left: 4px;
        }
        .button__exit {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }
`

export const WindowLayer = () => {
  return (
    <WindowContainer>
      <div className="left-section">
        <div className="left-section-header">
          <div />
          <p>Menu</p>
          <div className="left-section-header__menu">T</div>
        </div>
        <div className="left-section-content">
          <h1>Test left</h1>
        </div>
      </div>
      <div className="right-section">
        <div className="right-section-header">
          <div />
          <p>Header1</p>
          <div className="right-section-header__buttons">
            <button type="button">
              <span className="button__minimize">&#9472;</span>
            </button>
            <button type="button">
              <span className="button__maximize">&#9723;</span>
            </button>
            <button type="button">
              <span className="button__exit">&#10005;</span>
            </button>
          </div>
        </div>
        <div className="right-section-content">
          <h1>Test right</h1>
        </div>
      </div>
    </WindowContainer>
  )
}
