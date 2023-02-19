/* eslint-disable max-len */
import styled from 'styled-components'
import { getDayAndHourHelper } from '../../utils'
import { Dock } from './Dock/Dock'
import { IOpenFile } from '../../interfaces'

const UbuntuContainerDiv = styled.div<{ PUBLIC_URI: string }>`
  /* entypo */
  [class*='entypo-']:before {
    font-family: 'entypo', sans-serif;
  }

  /* fontawesome */
  [class*='fontawesome-']:before {
    font-family: 'FontAwesome', sans-serif;
  }

  /*****************************
****** Z-INDEX BREAKDOWN *****
*****************************/

  /* Layer 0: Desktop lvl */
  /* Layer 1: Windows lvl */
  /* Layer 2: grid lvl */
  /* Layer 3: tooltips lvl */

  .app {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  /************************
****** WINDOW LAYER *****
************************/

  .windows-layer {
    background-image: ${({ PUBLIC_URI }) => `url(${PUBLIC_URI}/images/jammy-jellyfish-wallpaper.jpg)`};
    background-size: cover;
    width: 100%;
    height: calc(100vh - 30px);
    overflow: hidden;
  }

  /*************************
****** DESKTOP LAYER *****
*************************/

  .desktop {
    /**********************
  ****** ACTION BAR *****
  **********************/

    .action-bar {
      background: black;
      color: #cfcfcf;
      padding: 6px;
      overflow: hidden;
      -webkit-user-select: none;
      user-select: none;
      cursor: default;

      .float-right {
        float: right;
      }

      .float-center {
        position: absolute;
        top: 6px;
        right: calc(50% - 30px);
      }

      .time:hover {
        color: white;
      }

      .activities {
        padding-right: 40px;

        .hot-spot {
          position: absolute;
        }
      }

      .open-application {
        position: relative;

        .open-application-icon {
          position: absolute;
          top: -15px;
          left: -22px;
          background-size: contain;
          background-image: url('http://icons.iconarchive.com/icons/google/chrome/128/Google-Chrome-icon.png');
          width: 51px;
          height: 100px;
          z-index: 0;
        }

        .app-name {
          position: absolute;
          top: 0;
          left: 0px;
          width: 300px;
          font-size: 110%;
          -webkit-text-stroke: 0.5px black;
        }
      }
    }
  }
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  openFile: IOpenFile
  children: JSX.Element
}

export const UbuntuContainer: React.FC<IProps> = ({ switchOpenFileState, openFile, children }: IProps) => {
  return (
    <UbuntuContainerDiv PUBLIC_URI={PUBLIC_URI}>
      <div className="desktop">
        <div className="action-bar">
          <span className="activities">Activities</span>
          <span className="open-application">
            <div className="app-name">
              Google Chrome
              <span className="entypo-down-dir font-icon" />
            </div>
            <div className="open-application-icon" />
          </span>
          <span className="time float-center">{getDayAndHourHelper()}</span>
          <span className="float-right" />
        </div>
      </div>
      <div className="windows-layer">
        <Dock openFile={openFile} switchOpenFileState={switchOpenFileState} />
        {children}
      </div>
    </UbuntuContainerDiv>
  )
}
