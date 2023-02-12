/* eslint-disable max-len */
import styled from 'styled-components'
import { getDayAndHourHelper } from '../../utils'
import { Dock } from './Dock/Dock'
import { IOpenFile } from '../../interfaces'

const UbuntuContainerDiv = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Cantarell:700);
  @import url(http://weloveiconfonts.com/api/?family=entypo|fontawesome);

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
    position: absolute;
    top: 36px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    overflow: hidden;
  }

  /*************************
****** DESKTOP LAYER *****
*************************/

  .desktop {
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0);

    .background-image {
      background-image: url('https://www.omgubuntu.co.uk/wp-content/uploads/2015/03/suru-desktop-wallpaper-ubuntu-vivid.jpg');
      background-size: cover;
      width: 100%;
      height: 100vh;

      .overlay {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }

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
          z-index: 20;
          font-size: 110%;
          -webkit-text-stroke: 0.5px black;
        }
      }
    }

    /****************************
  ****** APPLICATION DOCK *****
  ****************************/

    .dock {
      position: absolute;
      top: calc(50% - (202px / 2));
      width: 90px;
      background-color: rgba(0, 0, 0, 0.7);
      border-top-right-radius: 1em;
      border-bottom-right-radius: 1em;
      border: 1px solid #4c4c4c;
      border-left: 0px;
      padding: 20px;
      z-index: 3;

      .icon-container {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;

        .tooltip {
          position: absolute;
          top: 14px;
          color: white;
          font-weight: 100 !important;
          left: 80px;
          background-color: rgba(0, 0, 0, 0.4);
          padding-left: 5px;
          padding-right: 5px;
          border-radius: 0.3em;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 4;
        }

        &:hover {
          color: ${({ theme }) => theme.emphasizeColor};
        }

        &:hover .tooltip {
          opacity: 1;
          transition-delay: 0.2s;
        }

        &:not(:first-child) {
          margin-top: 20px;
        }
      }
    }
  }
`

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  children: JSX.Element
}

export const UbuntuContainer: React.FC<IProps> = ({ switchOpenFileState, children }: IProps) => {
  return (
    <UbuntuContainerDiv>
      <div className="windows-layer">{children}</div>
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
        <Dock switchOpenFileState={switchOpenFileState} />
        <div className="background-image">
          <div className="overlay" style={{ opacity: 0 }} />
        </div>
      </div>
    </UbuntuContainerDiv>
  )
}
