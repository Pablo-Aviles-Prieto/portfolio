import { FC } from 'react'
import { GithubRounded, Web, Plus } from '../Icons'
import { IPreviousProjectObj, IIsExpandedProject } from '../../interfaces'

interface IProps {
  project: IPreviousProjectObj
  projectTitle: keyof IIsExpandedProject
  switchIsExpanded: ({ title }: { title: keyof IIsExpandedProject }) => void
}

export const ContentLinks: FC<IProps> = ({ project, projectTitle, switchIsExpanded }) => {
  return (
    <div className="content-links">
      <p className="content-links-more-info" onClick={() => switchIsExpanded({ title: projectTitle })}>
        <Plus width={20} height={20} />
        <span>More info about the project</span>
      </p>
      <div className="links__block">
        <a
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
          className="content-links-github"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Github repo</span>
          <GithubRounded width={18} height={18} />
        </a>
        {project.webpage && (
          <a
            className="content-links-webpage"
            href={project.webpage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
          >
            <span>Take a look to the project</span>
            <Web width={18} height={18} />
          </a>
        )}
      </div>
    </div>
  )
}
