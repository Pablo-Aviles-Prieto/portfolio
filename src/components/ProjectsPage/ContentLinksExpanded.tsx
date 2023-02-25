import { FC } from 'react'
import { GithubRounded, Web } from '../Icons'
import { IPreviousProjectObj, IIsExpandedProject } from '../../interfaces'

interface IProps {
  project: IPreviousProjectObj
  switchIsExpanded: ({ title }: { title: keyof IIsExpandedProject }) => void
}

export const ContentLinksExpanded: FC<IProps> = ({ project, switchIsExpanded }) => {
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
        <span>Github repo</span>
      </a>
      {project.webpage && (
        <a
          className="content-links-webpage"
          href={project.webpage}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
        >
          <span>Project demo</span>
          <Web width={18} height={18} />
        </a>
      )}
    </div>
  )
}
