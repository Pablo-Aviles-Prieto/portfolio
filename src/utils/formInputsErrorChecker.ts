import { IName, IHasError } from '../interfaces'

export const formInputsErrorChecker = ({ name, value }: { name: IName; value: string }): IHasError | null => {
  if (name === 'email' && !/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
    return { name, message: 'Invalid email address' }
  }

  if (name === 'name' && !value.trim()) {
    return { name, message: 'Name cant be empty' }
  }

  if (name === 'subject' && !value.trim()) {
    return { name, message: 'Subject cant be empty' }
  }

  if (name === 'message' && !value.trim()) {
    return { name, message: 'Message cant be empty' }
  }

  return null
}
