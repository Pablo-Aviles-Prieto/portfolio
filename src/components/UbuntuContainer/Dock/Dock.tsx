import { MalePerson, CodingPC, Chat } from '../../Icons'
import { IOpenFile } from '../../../interfaces'

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
}

export const Dock: React.FC<IProps> = ({ switchOpenFileState }: IProps) => {
  const openFileSetter = (fileType: IOpenFile) => {
    switchOpenFileState(prevState => (prevState === fileType ? 'none' : fileType))
  }

  return (
    <div className="dock">
      <div className="icon-container">
        <MalePerson width={50} height={50} onClick={() => openFileSetter('profileInfo')} />
        <div className="tooltip">About me</div>
      </div>
      <div className="icon-container">
        <CodingPC width={50} height={50} onClick={() => openFileSetter('projects')} />
        <div className="tooltip">Previous works</div>
      </div>
      <div className="icon-container">
        <Chat width={50} height={50} onClick={() => openFileSetter('contacts')} />
        <div className="tooltip">Contact me</div>
      </div>
    </div>
  )
}
