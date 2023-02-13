import { MalePerson, CodingPC, Chat } from '../../Icons'
import { IOpenFile } from '../../../interfaces'

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  openFile: IOpenFile
}

export const Dock: React.FC<IProps> = ({ switchOpenFileState, openFile }: IProps) => {
  const openFileSetter = (fileType: IOpenFile) => {
    switchOpenFileState(prevState => (prevState === fileType ? 'none' : fileType))
  }

  // const openFileHandler = (fileType: IOpenFile) => {
  //   switchOpenFileState(prevState => {
  //     if (prevState === fileType) {
  //       return 'none'
  //     } else {
  //       return fileType
  //     }
  //   })
  // }

  return (
    <div className="dock">
      <div className="icon-container">
        <MalePerson
          className={openFile === 'profileInfo' ? 'selected__page' : ''}
          width={50}
          height={50}
          onClick={() => openFileSetter('profileInfo')}
        />
        <div className="tooltip">About me</div>
      </div>
      <div className="icon-container">
        <CodingPC
          className={openFile === 'projects' ? 'selected__page' : ''}
          width={50}
          height={50}
          onClick={() => openFileSetter('projects')}
        />
        <div className="tooltip">Previous works</div>
      </div>
      <div className="icon-container">
        <Chat
          className={openFile === 'contact' ? 'selected__page' : ''}
          width={50}
          height={50}
          onClick={() => openFileSetter('contact')}
        />
        <div className="tooltip">Contact me</div>
      </div>
    </div>
  )
}
