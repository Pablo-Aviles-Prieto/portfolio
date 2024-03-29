import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { GithubRounded, Web, Info } from '../Icons'
import { IPreviousProjectObj, IIsExpandedProject } from '../../interfaces'

interface IProps {
  project: IPreviousProjectObj
  projectTitle: keyof IIsExpandedProject
  switchIsExpanded: ({ title }: { title: keyof IIsExpandedProject }) => void
}

export const ContentLinks: FC<IProps> = ({ project, projectTitle, switchIsExpanded }) => {
  const { t } = useTranslation('common')

  return (
    <div className="content-links">
      <a
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
        className="content-links-github"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubRounded width={18} height={18} />
        <span>{t('githubRepo')}</span>
      </a>
      {project.webpage ? (
        <a
          className="content-links-webpage"
          href={project.webpage}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
        >
          <Web width={18} height={18} />
          <span>{t('projectDemo')}</span>
        </a>
      ) : (
        <div />
      )}
      <p className="content-links-more-info" onClick={() => switchIsExpanded({ title: projectTitle })}>
        <span>{t('checkFeatures')}</span>
        <Info width={20} height={20} />
      </p>
    </div>
  )
}
