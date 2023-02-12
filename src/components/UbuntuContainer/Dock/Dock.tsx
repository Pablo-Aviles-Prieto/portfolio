import { MalePerson, CodingPC, Chat } from '../../Icons'

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<'none' | 'profileInfo' | 'projects' | 'contacts'>>
}

export const Dock: React.FC<IProps> = ({ switchOpenFileState }: IProps) => {
  return (
    <div className="dock">
      <div className="icon-container">
        <MalePerson
          width={50}
          height={50}
          onClick={() => switchOpenFileState(prevState => (prevState === 'profileInfo' ? 'none' : 'profileInfo'))}
        />
        <div className="tooltip">About me</div>
      </div>
      <div className="icon-container">
        <CodingPC width={50} height={50} />
        <div className="tooltip">Previous works</div>
      </div>
      <div className="icon-container">
        <Chat width={50} height={50} />
        <div className="tooltip">Contact me</div>
      </div>
    </div>
  )
}