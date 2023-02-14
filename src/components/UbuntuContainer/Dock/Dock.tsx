import { useState } from 'react'
import { MalePerson, CodingPC, Chat } from '../../Icons'
import { IOpenFile } from '../../../interfaces'

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
    <div className="dock">
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
    </div>
  )
}
