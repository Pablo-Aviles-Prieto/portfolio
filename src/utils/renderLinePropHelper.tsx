import React from 'react'
import { InstallationBlock } from '../components/Prompt/Components/InstallationBlock'
import { TypeInstallationInfo } from '../components/Prompt/TypeAnimations'
import { TypeInstallationInfoFast } from '../components/Prompt/FastTypeAnimations'
import { IPropsElements } from '../interfaces/IPropsElements'
import { PasswordBlock } from '../components/Prompt/Components/PasswordBlock'
import { LoadingDevBlock } from '../components/Prompt/Components/LoadingDevBlock'
import { PromptLineBlock } from '../components/Prompt/Components/PromptLineBlock'

export interface ITypeInstallation {
  installation: React.FC<IPropsElements>
  installationInfo: React.FC<IPropsElements>
  installationInfoFast: React.FC<IPropsElements>
  passwordBlock: React.FC<IPropsElements>
  loadingDevBlock: React.FC<IPropsElements>
  promptLine: React.FC<IPropsElements>
}

const typeInstallation: ITypeInstallation = {
  installation: InstallationBlock,
  installationInfo: TypeInstallationInfo,
  installationInfoFast: TypeInstallationInfoFast,
  passwordBlock: PasswordBlock,
  loadingDevBlock: LoadingDevBlock,
  promptLine: PromptLineBlock
}

type keys = keyof typeof typeInstallation
export interface IRenderLines {
  type: keys
  name: string
  typingLine?: number
  cb: () => void
}

export const renderLinePropHelper = (renderData: IRenderLines) => {
  const { type, name, typingLine, cb } = renderData
  const ElementToRender: React.FC<IPropsElements> = typeInstallation[type]
  return <ElementToRender key={name} installingData={name} typingLine={typingLine} cbFunction={cb} />
}
