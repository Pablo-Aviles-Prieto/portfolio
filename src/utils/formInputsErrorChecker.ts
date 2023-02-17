import { IName, IHasError } from '../interfaces'

export const formInputsErrorChecker = ({ name, value }: { name: IName; value: string }): IHasError | null => {
  if (name === 'email' && !/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
    return { name, message: 'Invalid email address' }
  }

  if (name === 'name' && !value.trim()) {
    return { name, message: `Name can't be empty` }
  }

  if (name === 'subject' && !value.trim()) {
    return { name, message: `Subject can't be empty` }
  }

  if (name === 'message' && !value.trim()) {
    return { name, message: `Message can't be empty` }
  }

  return null
}
