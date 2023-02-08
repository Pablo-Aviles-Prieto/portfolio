import React from 'react'
import { InstallationBlock } from '../components/Prompt/Components/InstallationBlock'
import { TypeInstallationInfo } from '../components/Prompt/TypeAnimations'
import { TypeInstallationInfoFast } from '../components/Prompt/FastTypeAnimations'

interface IPropsElements {
  cbFunction: (element: HTMLElement | null) => void | Promise<void>
  installingData: string
}

export interface ITypeInstallation {
  installation: React.FC<IPropsElements>
  installationInfo: React.FC<IPropsElements>
  installationInfoFast: React.FC<IPropsElements>
}

const typeInstallation: ITypeInstallation = {
  installation: InstallationBlock,
  installationInfo: TypeInstallationInfo,
  installationInfoFast: TypeInstallationInfoFast
}

type keys = keyof typeof typeInstallation
export interface IRenderLines {
  type: keys
  name: string
  cb: () => void
}

export const renderLinePropHelper = (renderData: IRenderLines) => {
  const { type, name, cb } = renderData
  const ElementToRender: React.FC<IPropsElements> = typeInstallation[type]
  return <ElementToRender key={name} installingData={name} cbFunction={cb} />
}
