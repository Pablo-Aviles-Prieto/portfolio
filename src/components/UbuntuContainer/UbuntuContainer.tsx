/* eslint-disable max-len */
import styled from 'styled-components'
import { getDayAndHourHelper } from '../../utils'

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

  /**************************
****** SWITCHER LAYER *****
**************************/

  .grid-layer {
    display: -webkit-box;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    position: absolute;
    top: 36px;
    bottom: 0;
    right: 0;
    left: 80px;
    z-index: 3;
    > div {
      -webkit-box-flex: auto;
      flex: auto;
      width: 20%;
      height: auto;
      margin: 20px;
      background-size: contain;
      position: relative;
      background-repeat: no-repeat;
      background-position: right top;
    }

    .close {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: white;
      width: 17px;
      height: 18px;
      margin: 0;
      padding-left: 2px;
      line-height: 18px;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  .gedit-app {
    background-image: url('http://img01.deviantart.net/57f0/i/2010/203/7/6/dcrdarkclassic___gedit_theme_by_drankinatty.jpg');
  }

  .nautilus-app {
    background-image: url('https://lh3.googleusercontent.com/AwObblGoJgCi0XvEG6c8HRTYFO4krwvV9WYgIK76v8aa=w960-h878-no');
  }

  .chrome-app {
    background-image: url('http://makegooglemyhomepage.org/wp-content/uploads/2014/06/How-To-Make-Google-Your-Homepage-With-Google-Chrome.png');
  }

  .software-center-app {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/7a/Ubuntu_Software_Center_en_Ubuntu_12.04.png');
  }

  .calculator-app {
    background-image: url('http://screenshots.ubuntu.com/screenshots/g/gcalctool/9099_large.png');
  }

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

    /* > div {
      position: absolute;
      top: 0px;
      right: 0px;
      display: inline-block;
      margin: 0;
      padding: 0;
      width: 960px;
      height: 878px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right top;
      &calculator-app {
        zoom: 50%;
      }
    } */
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

      .language-select,
      .sound-settings {
        padding-right: 10px;
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
      top: 20%;
      width: 60px;
      height: 450px;
      background-color: rgba(0, 0, 0, 0.7);
      border-top-right-radius: 1em;
      border-bottom-right-radius: 1em;
      border: 1px solid #4c4c4c;
      border-left: 0px;
      padding-left: 10px;
      padding-top: 10px;
      z-index: 3;

      .icon {
        height: 48px;
        width: 80%;
        background-size: contain;
        margin-bottom: 10px;
        position: relative;

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
          -moz-transition: opacity 0.25s ease-in-out;
          -webkit-transition: opacity 0.25s ease-in-out;
          z-index: 4;
        }
        &:hover .tooltip {
          opacity: 1;
          transition-delay: 0.5s;
        }

        &.nautilus {
          background-image: url('https://1.bp.blogspot.com/-Y4Vlex9DiRk/ULTb8KXaBQI/AAAAAAAABTE/rdgxKtAio5Q/s400/nautilus.png');
        }
        &.chrome {
          background-image: url('http://icons.iconarchive.com/icons/google/chrome/128/Google-Chrome-icon.png');
        }
        &.software-center {
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ubuntu_Software_Center_icon_v3.svg/100px-Ubuntu_Software_Center_icon_v3.svg.png');
        }
        &.terminal {
          background-image: url('http://www.linuxbrigade.com/wp-content/uploads/2013/06/terminal.png');
        }
        &.gedit {
          background-image: url('https://linuxtidbits.files.wordpress.com/2012/02/accessories-text-editor-150.png');
        }
        &.calculator {
          background-image: url('http://www.iconattitude.com/icons/open_icon_library/apps/png/256/accessories-calculator-3.png');
        }
      }
    }
  }

  /****************************
****** EXPERIMENT LAYER *****
****************************/

  .hot-spot {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
  }
`

interface IProps {
  children: JSX.Element
}

export const UbuntuContainer: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <UbuntuContainerDiv>
      <div className="grid-layer" style={{ opacity: 0, display: 'none' }}>
        <div className="gedit-app" />
        <div className="nautilus-app" />
        <div className="chrome-app" />
        <div className="calculator-app" />
        <div className="software-center-app" />
      </div>
      <div className="windows-layer">
        {children}
        <h1>test</h1>
      </div>
      <div className="desktop">
        <div className="action-bar">
          <span className="activities">
            <div className="hot-spot" />
            Activities
          </span>
          <span className="open-application">
            <div className="app-name">
              Google Chrome
              <span className="entypo-down-dir font-icon" />
            </div>
            <div className="open-application-icon" />
          </span>
          <span className="time float-center">{getDayAndHourHelper()}</span>
          <span className="float-right" />
          <span className="language-select">
            en
            <span className="entypo-down-dir font-icon" />
          </span>
          <span className="sound-settings fontawesome-volume-up" />
          <span className="power-button fontawesome-off font-icon">
            <span className="entypo-down-dir font-icon" />
          </span>
        </div>
        <div className="dock">
          <div className="nautilus icon">
            <div className="tooltip">Files</div>
          </div>
          <div className="chrome icon">
            <div className="tooltip">Google Chrome</div>
          </div>
          <div className="software-center icon">
            <div className="tooltip">Ubuntu Software Center</div>
          </div>
          <div className="terminal icon">
            <div className="tooltip">Terminal</div>
          </div>
          <div className="gedit icon">
            <div className="tooltip">gedit</div>
          </div>
          <div className="calculator icon">
            <div className="tooltip">calc</div>
          </div>
        </div>
        <div className="background-image">
          <div className="overlay" style={{ opacity: 0 }} />
        </div>
      </div>
    </UbuntuContainerDiv>
  )
}
