import styled from 'styled-components'

const PromptContainer = styled.div`
  font-family: 'Ubuntu';
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .Terminal {
      width: 600px;
      height: 360px;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
      &__Toolbar {
        background: linear-gradient(#504b45 0%, #3c3b37 100%);
        width: 100%;
        padding: 0 8px;
        box-sizing: border-box;
        height: 25px;
        display: flex;
        align-items: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        .Toolbar__buttons {
          display: flex;
          align-items: center;
          .Toolbar__button {
            width: 12px;
            height: 12px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            padding: 0;
            font-size: 7px;
            background: linear-gradient(#7d7871 0%, #595953 100%);
            text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
            box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
            border: none;
            margin-right: 4px;
            &:hover {
              cursor: pointer;
            }
            &:focus {
              outline: none;
            }
          }
          .Toolbar__button--exit {
            background: #f25d2b;
            background: linear-gradient(#f37458 0%, #de4c12 100%);
            background-clip: padding-box;
          }
        }
        .Toolbar__user {
          color: #d5d0ce;
          margin-left: 4px;
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 1px;
        }
      }
      &__body {
        background: rgba(56, 4, 40, 0.9);
        height: calc(100% - 25px);
        margin-top: -1px;
        padding-top: 2px;
        font-family: 'Ubuntu mono';
        .Terminal__text {
          color: #ddd;
        }

        .Terminal__Prompt {
          margin-top: 10px;
          display: flex;
          .Prompt__user {
            color: #87d441;
          }
          .Prompt__location {
            color: #6d85a9;
          }
          .Prompt__dollar {
            color: #ddd;
          }
          .Prompt__cursor {
            height: 17px;
            width: 8px;
            background: white;
            display: block;
            margin-left: 8px;
            animation: blink 2s ease-in-out infinite;
          }
        }
      }
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      50.1% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    @media (max-width: 600px) {
      .Terminal {
        max-height: 90%;
        width: 95%;
      }
    }
  }
`

export const Prompt: React.FC = () => {
  return (
    <PromptContainer>
      <div className="container">
        <div className="Terminal">
          <div className="Terminal__Toolbar">
            <div className="Toolbar__buttons">
              <button type="button" className="Toolbar__button Toolbar__button--exit">
                &#10005;
              </button>
              <button type="button" className="Toolbar__button">
                &#9472;
              </button>
              <button type="button" className="Toolbar__button">
                &#9723;
              </button>
            </div>
            <p className="Toolbar__user">PabloAviles@ubuntu:~</p>
          </div>
          <div className="Terminal__body">
            <div className="Terminal__text">Welcome to Ubuntu!</div>
            <div className="Terminal__Prompt">
              <span className="Prompt__user">PabloAviles@ubuntu:</span>
              <span className="Prompt__location">~</span>
              <span className="Prompt__dollar">$</span>
              <span className="Prompt__cursor" />
            </div>
          </div>
        </div>
      </div>
    </PromptContainer>
  )
}
