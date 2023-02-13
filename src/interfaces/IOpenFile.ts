const possibleFiles = {
  profileInfo: 'profileInfo',
  projects: 'projects',
  contacts: 'contact',
  none: 'none'
}

export type IOpenFile = keyof typeof possibleFiles
