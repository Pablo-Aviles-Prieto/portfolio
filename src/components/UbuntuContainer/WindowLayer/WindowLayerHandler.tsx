import { useState, useEffect, useCallback } from 'react'
import { WindowLayer } from './WindowLayer'
import { ProfileInfoPage } from '../../ProfileInfo/ProfileInfoPage'
import { ProjectsPage } from '../../ProjectsPage/ProjectsPage'
import { IOpenFile, IProfileInfoSubPages, IProjectsSubPages, IContactSubPages } from '../../../interfaces'
import { profileSubMenu, projectsSubMenu, contactSubMenu } from '../../../utils'
import { ContactPage } from '../../ContactPage/ContactPage'

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  openedFile: IOpenFile
  introState: boolean
}

type ISubPage = IProfileInfoSubPages | IProjectsSubPages | IContactSubPages

export const WindowLayerHandler: React.FC<IProps> = ({ introState, openedFile, switchOpenFileState }: IProps) => {
  const [subPage, setSubPage] = useState<ISubPage>('introduction')

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
      <>
        {openedFile === 'profileInfo' && <ProfileInfoPage subPage={subPage} />}
        {openedFile === 'projects' && <ProjectsPage subPage={subPage} />}
        {openedFile === 'contact' && <ContactPage subPage={subPage} />}
        {openedFile === 'none' && <div />}
      </>
    </WindowLayer>
  )
}
