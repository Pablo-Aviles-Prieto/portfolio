const profileInfoSubPages = {
  introduction: 'introduction',
  experience: 'experience',
  education: 'education'
}

const projectsSubPages = {
  introduction: 'introduction',
  technologies: 'technologies'
}

const contactSubPages = {
  introduction: 'introduction'
}

export type IProfileInfoSubPages = keyof typeof profileInfoSubPages
export type IProjectsSubPages = keyof typeof projectsSubPages
export type IContactSubPages = keyof typeof contactSubPages
