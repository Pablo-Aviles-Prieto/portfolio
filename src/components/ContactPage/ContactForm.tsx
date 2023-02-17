import { useState } from 'react'
import { useForm } from '@formspree/react'
import styled from 'styled-components'
import { InputElement } from '../Form/InputElement'
import { TextArea } from '../Form/TextArea'
import { formInputsErrorChecker } from '../../utils'
import { FlexContainer, GenericButton } from '../Styles'
import { IErrorInputsState, IInputsData, IHasError } from '../../interfaces'

const FormContainer = styled.form`
  input,
  textarea {
    width: 100%;
    font-family: inherit;
  }
`

const SendButton = styled(GenericButton)`
  box-shadow: 2px 4px 10px rgb(0 0 0 / 20%);
  width: 30%;
`

const { REACT_APP_FORMSPREE_ID } = process.env

const formSpreeID = REACT_APP_FORMSPREE_ID || ''

export const errorInputsState: IErrorInputsState = {
  email: false,
  name: false,
  subject: false,
  message: false
}

export const ContactForm: React.FC = () => {
  const [errorInputs, setErrorInputs] = useState<IErrorInputsState>(errorInputsState)
  const [submitState, handleSubmitPromise] = useForm(formSpreeID)

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

    handleSubmitPromise(e)
      .then(response => {
        setErrorInputs(errorInputsState)
      })
      .catch(err => console.error(err))
  }

  return (
    <FormContainer onSubmit={checkSubmitHandler}>
      <FlexContainer>
        <InputElement title="name" label="Name" width="100%">
          {errorInputs.name ? <p className="error-input">{errorInputs.name}</p> : <div className="error-input" />}
        </InputElement>
        <InputElement title="email" label="Email" width="100%">
          {errorInputs.email ? <p className="error-input">{errorInputs.email}</p> : <div className="error-input" />}
        </InputElement>
      </FlexContainer>
      <InputElement title="subject" label="Subject">
        {errorInputs.subject ? <p className="error-input">{errorInputs.subject}</p> : <div className="error-input" />}
      </InputElement>
      <TextArea title="message" label="Message">
        {errorInputs.message ? (
          <p className="error-input tarea">{errorInputs.message}</p>
        ) : (
          <div className="error-input" />
        )}
      </TextArea>
      <div style={{ textAlign: 'center' }}>
        <SendButton type="submit">Send</SendButton>
      </div>
      {submitState.submitting && <p>Submitting (mail img loading?)</p>}
      {submitState.succeeded && <p>Message sent, I&apos;ll be back at you as soon as possible. Thank you so much!!</p>}
    </FormContainer>
  )
}
