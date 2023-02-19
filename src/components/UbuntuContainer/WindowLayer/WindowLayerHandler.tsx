import { useState, useEffect, useMemo } from 'react'
import { WindowLayer } from './WindowLayer'
import { ProfileInfoPage } from '../../ProfileInfoPage/ProfileInfoPage'
import { ProjectsPage } from '../../ProjectsPage/ProjectsPage'
import {
  IOpenFile,
  IProfileInfoSubPages,
  IProjectsSubPages,
  IContactSubPages,
  IIsExpandedProject
} from '../../../interfaces'
import { profileSubMenu, projectsSubMenu, contactSubMenu, isExpandedProject } from '../../../utils'
import { ContactPage } from '../../ContactPage/ContactPage'

interface IProps {
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  openedFile: IOpenFile
  introState: boolean
}

type ISubPage = IProfileInfoSubPages | IProjectsSubPages | IContactSubPages

type IIsExpanded = keyof typeof isExpandedProject

export const WindowLayerHandler: React.FC<IProps> = ({ introState, openedFile, switchOpenFileState }: IProps) => {
  const [subPage, setSubPage] = useState<ISubPage>('introduction')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState<IIsExpandedProject>(isExpandedProject)

  useEffect(() => {
    setIsExpanded(isExpandedProject)
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
    if (openedFile === 'profileInfo') return 'Personal information'
    return openedFile === 'projects' ? 'Some previous works' : 'Contact with me'
  }, [openedFile])

  return (
    <WindowLayer
      isOpen={isOpen}
      subMenuData={subMenu}
      titlePage={titleToRender}
      subPage={subPage}
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      setSubPage={setSubPage}
      switchOpenFileState={switchOpenFileState}
    >
      <>
        {openedFile === 'profileInfo' && <ProfileInfoPage subPage={subPage} />}
        {openedFile === 'projects' && (
          <ProjectsPage isExpanded={isExpanded} setIsExpanded={setIsExpanded} subPage={subPage} />
        )}
        {openedFile === 'contact' && <ContactPage subPage={subPage} />}
        {openedFile === 'none' && <div />}
      </>
    </WindowLayer>
  )
}
