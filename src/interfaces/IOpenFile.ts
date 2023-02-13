const possibleFiles = {
  profileInfo: 'profileInfo',
  projects: 'projects',
  contact: 'contact',
  none: 'none'
}

export type IOpenFile = keyof typeof possibleFiles
