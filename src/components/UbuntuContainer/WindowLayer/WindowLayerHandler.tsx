import { useState, useEffect, useCallback } from 'react'
import { WindowLayer } from './WindowLayer'
import { ProfileHeader } from '../../ProfileHeader/ProfileHeader'
import { IOpenFile, IProfileInfoSubPages } from '../../../interfaces'
import { profileSubMenu, projectsSubMenu, contactSubMenu } from '../../../utils'

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  openedFile: IOpenFile
  introState: boolean
}

export const WindowLayerHandler: React.FC<IProps> = ({ introState, openedFile, switchOpenFileState }: IProps) => {
  const [subPage, setSubPage] = useState<IProfileInfoSubPages>('introduction')

  useEffect(() => {
    setSubPage('introduction')
  }, [openedFile])

  console.log('subPage', subPage)

  const subMenu = useCallback(() => {
    if (openedFile === 'none') return []
    if (openedFile === 'profileInfo') return profileSubMenu
    return openedFile === 'projects' ? projectsSubMenu : contactSubMenu
  }, [openedFile])

  return (
    <WindowLayer
      introState={introState}
      openedFile={openedFile}
      subMenuData={subMenu()}
      subPage={subPage}
      setSubPage={setSubPage}
      switchOpenFileState={switchOpenFileState}
    >
      {subPage === 'introduction' ? (
        <ProfileHeader />
      ) : subPage === 'education' ? (
        <h1>Education</h1>
      ) : (
        <h1>Experience</h1>
      )}
    </WindowLayer>
  )
}
