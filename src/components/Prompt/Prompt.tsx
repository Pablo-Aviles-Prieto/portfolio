import { useState } from 'react'
import styled from 'styled-components'
import { TerminalToolbar } from './Components/TerminalToolbar'
import { InstallationBlock } from './Components/InstallationBlock'
import { TypeLineAnimation, TypeInstallationInfo } from './TypeAnimations'
import { TypeInstallationInfoFast } from './FastTypeAnimations'

interface IProps {
  introStateHandler: (value: React.SetStateAction<boolean>) => void
}

const PromptContainer = styled.div`
  font-family: 'Ubuntu';
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    #main-prompt-text {
      margin-bottom: 10px;
    }
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
        .Terminal__text--flag {
          color: #9c9a9a;
        }
        .Terminal__text--separator {
          margin-left: 7px;
        }

        .Terminal__Prompt {
          display: flex;
          margin-top: 1px;
          &--spacer {
            width: 30px;
          }
        }
        .Prompt__user {
          color: #87d441;
        }
        .Prompt__location {
          color: #6d85a9;
        }
        .Prompt__dollar {
          color: #ddd;
          margin-right: 8px;
        }
        .Prompt__cursor {
          height: 17px;
          width: 8px;
          margin-left: 1px;
          background: white;
          display: block;
          animation: blink 2s ease-in-out infinite;
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

const maxLinesOnPrompt = 18

export const Prompt: React.FC<IProps> = ({ introStateHandler }: IProps) => {
  const [typingLine, setTypingLine] = useState<number>(0)

  const nextLineHandler = () => {
    setTypingLine(prevState => prevState + 1)
  }

  return (
    <PromptContainer>
      <div className="container">
        <div className="Terminal">
          <TerminalToolbar />
          <div className="Terminal__body">
            {typingLine <= maxLinesOnPrompt && (
              <div className="Terminal__text" id="main-prompt-text">
                Welcome to Ubuntu v22.Pablo
              </div>
            )}
            {typingLine <= maxLinesOnPrompt + 1 && (
              <>
                <div className="Terminal__Prompt">
                  <span className="Prompt__user">aviles@ubuntu:</span>
                  <span className="Prompt__location">~</span>
                  <span className="Prompt__dollar">$</span>
                  <TypeLineAnimation
                    styleClass="Terminal__text"
                    sequence={[1000, `sudo apt-get install full-stack developer`, nextLineHandler]}
                  />
                  {typingLine === 0 && <span className="Prompt__cursor" />}
                  {typingLine >= 1 && (
                    <>
                      <TypeLineAnimation
                        styleClass="Terminal__text--flag Terminal__text--separator"
                        sequence={[`--stack-MERN`, nextLineHandler]}
                      />
                      {typingLine === 1 && <span className="Prompt__cursor" />}
                    </>
                  )}
                </div>
                {typingLine >= 2 && (
                  <div className="Terminal__Prompt">
                    <TypeLineAnimation
                      styleClass="Terminal__text--flag"
                      sequence={[`--teamworker --resolutive`, 200, nextLineHandler]}
                    />
                    {typingLine === 2 && <span className="Prompt__cursor" />}
                  </div>
                )}
              </>
            )}
            {typingLine >= 3 && (
              <div className="Terminal__Prompt">
                <span className="Terminal__text" style={{ marginRight: '2px' }}>
                  [sudo] password for aviles:
                </span>
                <TypeLineAnimation sequence={[400, `*****`, 500, nextLineHandler]} />
                {typingLine === 3 && <span className="Prompt__cursor" />}
              </div>
            )}
            {typingLine >= 4 && (
              <InstallationBlock installingData="Installing frontend knowledge:" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 5 && <TypeInstallationInfo packageName="ReactJS v.18.2.0" cbFunction={nextLineHandler} />}
            {typingLine >= 6 && (
              <TypeInstallationInfo packageName="JavaScript ECMAScript 2022" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 7 && <TypeInstallationInfoFast packageName="HTML5 & CSS3" cbFunction={nextLineHandler} />}
            {typingLine >= 8 && (
              <InstallationBlock installingData="Installing backend knowledge:" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 9 && <TypeInstallationInfo packageName="NodeJS v.18.14.0" cbFunction={nextLineHandler} />}
            {typingLine >= 10 && (
              <TypeInstallationInfoFast packageName="ExpressJS v.4.18.2" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 11 && (
              <TypeInstallationInfoFast packageName="MongoDB v.6.0 & Mongoose v.6.9.0" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 12 && <TypeInstallationInfoFast packageName="MySQL v.8.0.32" cbFunction={nextLineHandler} />}
            {typingLine >= 13 && (
              <InstallationBlock installingData="Installing dependencies:" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 14 && <TypeInstallationInfo packageName="TypeScript v.4.9.5" cbFunction={nextLineHandler} />}
            {typingLine >= 15 && <TypeInstallationInfoFast packageName="Git v.2.39.1" cbFunction={nextLineHandler} />}
            {typingLine >= 16 && <TypeInstallationInfoFast packageName="Jest v.29.4.1" cbFunction={nextLineHandler} />}
            {typingLine >= 17 && (
              <TypeInstallationInfoFast packageName="Cypress v.12.5.1" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 18 && (
              <TypeInstallationInfoFast packageName="Playwright v.1.30" cbFunction={nextLineHandler} />
            )}
            {typingLine >= 19 && (
              <InstallationBlock
                installingData="All packages has been installed successfully"
                cbFunction={nextLineHandler}
              />
            )}
            {typingLine >= 20 && (
              <div className="Terminal__Prompt">
                <span className="Terminal__text">
                  Loading developer <span className="Prompt__user">Pablo Avilés</span>
                </span>
                <TypeLineAnimation sequence={[` `, 500, nextLineHandler]} />
              </div>
            )}
            {typingLine === 21 && (
              <div className="Terminal__Prompt">
                <span className="Prompt__user">aviles@ubuntu:</span>
                <span className="Prompt__location">~</span>
                <span className="Prompt__dollar">$</span>
                <span className="Prompt__cursor" />
                <TypeLineAnimation sequence={[` `, 500, () => introStateHandler(false)]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </PromptContainer>
  )
}
