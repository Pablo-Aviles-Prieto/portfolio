import { useState } from 'react'
import styled from 'styled-components'
import { MalePerson, CodingPC, Chat } from '../../Icons'
import { IOpenFile } from '../../../interfaces'

const DockContainer = styled.div`
  &.dock {
    position: absolute;
    top: calc(50% - (202px / 2));
    width: 90px;
    background-color: rgba(0, 0, 0, 0.7);
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    border: 1px solid #4c4c4c;
    border-left: 0px;
    padding: 20px;

    .icon-container {
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      color: white;

      svg {
        color: #fff;
      }

      .tooltip {
        position: absolute;
        top: 14px;
        width: 0;
        color: white;
        font-weight: 100 !important;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        padding: 0;
        border-radius: 0.3em;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.3s ease-in-out, left 0.15s ease-in;
        z-index: 1;
      }

      .selected__page {
        color: ${({ theme }) => theme.emphasizeColor};
        &:hover {
          color: ${({ theme }) => theme.lightEmphasize};
        }
      }

      &:hover {
        svg {
          color: ${({ theme }) => theme.lightEmphasize};
        }
      }

      &:hover .tooltip {
        opacity: 1;
        padding: 0 5px;
        left: 80px;
        width: auto;
      }

      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
`

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  openFile: IOpenFile
}

export const Dock: React.FC<IProps> = ({ switchOpenFileState, openFile }: IProps) => {
  const [timeoutEntryPage, setTimeoutEntryPage] = useState<NodeJS.Timeout | undefined>(undefined)

  const openFileHandler = (fileType: IOpenFile) => {
    if (timeoutEntryPage) clearTimeout(timeoutEntryPage)

    if (openFile === fileType) {
      switchOpenFileState('none')
      return
    }

    if (openFile === 'none') {
      switchOpenFileState(fileType)
      return
    }

    const idTimeout = setTimeout(() => {
      switchOpenFileState(fileType)
    }, 500)

    setTimeoutEntryPage(idTimeout)
    switchOpenFileState('none')
  }

  return (
    <DockContainer className="dock">
      <div className="icon-container">
        <MalePerson
          className={openFile === 'profileInfo' ? 'selected__page' : ''}
          width={50}
          height={50}
          onClick={() => openFileHandler('profileInfo')}
        />
        <div className="tooltip">About me</div>
      </div>
      <div className="icon-container">
        <CodingPC
          className={openFile === 'projects' ? 'selected__page' : ''}
          width={50}
          height={50}
          onClick={() => openFileHandler('projects')}
        />
        <div className="tooltip">Previous works</div>
      </div>
      <div className="icon-container">
        <Chat
          className={openFile === 'contact' ? 'selected__page' : ''}
          width={50}
          height={50}
          onClick={() => openFileHandler('contact')}
        />
        <div className="tooltip">Contact me</div>
      </div>
    </DockContainer>
  )
}
