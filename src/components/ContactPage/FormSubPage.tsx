import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { InputElement } from './InputElement'
import { formInputsErrorChecker } from '../../utils'
import { IErrorInputsState, IInputsData, IHasError } from '../../interfaces'

const { REACT_APP_FORMSPREE_ID } = process.env

const formSpreeID = REACT_APP_FORMSPREE_ID || ''

export const errorInputsState: IErrorInputsState = {
  email: false,
  name: false,
  subject: false,
  message: false
}

export const FormSubPage: React.FC = () => {
  const [errorInputs, setErrorInputs] = useState<IErrorInputsState>(errorInputsState)
  const [state, handleSubmit] = useForm(formSpreeID)
  console.log('errorInputs STATE', errorInputs)

  const checkSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = Array.from(e.currentTarget.elements) as (HTMLInputElement | HTMLTextAreaElement)[]
    const inputsData: IInputsData = []
    const inputsError: IHasError[] = []

    formData.forEach(element => {
      const name = element.name as keyof IErrorInputsState
      const { value } = element

      if (!name.trim()) return

      const hasError = formInputsErrorChecker({ name, value })
      if (hasError) {
        inputsError.push({ name: hasError.name, message: hasError.message })
        return
      }

      inputsData.push({ name, value })
    })

    if (inputsError.length > 0) {
      const newErrorState = { ...errorInputsState }
      inputsError.forEach(input => {
        newErrorState[input.name] = input.message
      })
      setErrorInputs(newErrorState)
      return
    }

    console.log('inputsData', inputsData)
    // submit
    // clear error state
  }

  return (
    <form onSubmit={checkSubmitHandler}>
      <InputElement title="email" label="Email" onChangeHandler={() => null} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <InputElement title="name" label="Name" onChangeHandler={() => null} />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <InputElement title="subject" label="Subject" onChangeHandler={() => null} />
      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      <InputElement title="message" label="Message" onChangeHandler={() => null} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit">Enviar</button>
    </form>
  )
}
