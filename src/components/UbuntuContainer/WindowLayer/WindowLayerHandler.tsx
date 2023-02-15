import { useState, useEffect, useMemo } from 'react'
import { WindowLayer } from './WindowLayer'
import { ProfileInfoPage } from '../../ProfileInfoPage/ProfileInfoPage'
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
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (introState) return

    setSubPage('introduction')

    if (openedFile === 'none') {
      setIsOpen(false)
      return
    }

    setIsOpen(true)
  }, [openedFile])

  const subMenu = useMemo(() => {
    if (openedFile === 'none') return []
    if (openedFile === 'profileInfo') return profileSubMenu
    return openedFile === 'projects' ? projectsSubMenu : contactSubMenu
  }, [openedFile])

  const titleToRender = useMemo(() => {
    if (openedFile === 'none') return ''
    if (openedFile === 'profileInfo') return 'Get to know me'
    return openedFile === 'projects' ? 'Take a look to some previous works' : 'Want to exchange some words?'
  }, [openedFile])

  return (
    <WindowLayer
      isOpen={isOpen}
      subMenuData={subMenu}
      titlePage={titleToRender}
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
