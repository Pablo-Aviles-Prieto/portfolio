export interface IPropsElements {
  cbFunction: (element: HTMLElement | null) => void | Promise<void>
  installingData: string
  typingLine?: number
}
