const errorInputsState: IErrorInputsState = {
  email: false,
  name: false,
  subject: false,
  message: false
}

export interface IErrorInputsState {
  email: boolean | string
  name: boolean | string
  subject: boolean | string
  message: boolean | string
}

export type IInputsData = Array<{ name: string; value: string }>

export type IName = keyof typeof errorInputsState

export type IHasError = { name: IName; message: string }
