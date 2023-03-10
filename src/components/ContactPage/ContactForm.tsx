import { useState } from 'react'
import { useForm } from '@formspree/react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { InputElement } from '../Form/InputElement'
import { TextArea } from '../Form/TextArea'
import { SpinnerSend } from './SpinnerSend'
import { formInputsErrorChecker } from '../../utils'
import { FlexContainer, GenericButton } from '../Styles'
import { MessageSent } from '../Icons'
import { IErrorInputsState, IInputsData, IHasError } from '../../interfaces'

const ErrorSentMailContainer = styled.div`
  text-align: center;
  h2 {
    text-decoration: underline;
  }
  p {
    color: ${({ theme }) => theme.lightEmphasize};
  }
`

const MailSentContainer = styled.div`
  position: relative;
  text-align: center;
  padding-top: 305px;
  h1,
  p {
    z-index: 1;
    position: inherit;
  }
  h1 {
    text-decoration: underline;
  }
  p {
    color: ${({ theme }) => theme.lightEmphasize};
  }
  .mail-sent {
    z-index: 0;
    position: absolute;
    width: 500px;
    top: -92px;
    left: calc(50% - (500px / 2));
  }
`

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
  color: ${({ theme }) => theme.mainBground};
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
  const { t } = useTranslation('contactMe')
  const { t: tDictionary } = useTranslation('dictionary')

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

  if (submitState.submitting) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <SpinnerSend />
        <h3>{t('sendingMsg')}</h3>
      </div>
    )
  }

  if (submitState.succeeded) {
    return (
      <MailSentContainer>
        <h1>{t('msgSent')}</h1>
        <p>{t('msgSent2')}</p>
        <MessageSent className="mail-sent" />
      </MailSentContainer>
    )
  }

  if (submitState.errors.length > 0) {
    return (
      <ErrorSentMailContainer>
        <h2>{t('errorMsg')}</h2>
        <p>{t('errorMsg2')}</p>
      </ErrorSentMailContainer>
    )
  }

  return (
    <FormContainer onSubmit={checkSubmitHandler}>
      <FlexContainer>
        <InputElement title="name" label={t('inputName')} width="100%">
          {errorInputs.name ? <p className="error-input">{errorInputs.name}</p> : <div className="error-input" />}
        </InputElement>
        <InputElement title="email" label="Email" width="100%">
          {errorInputs.email ? <p className="error-input">{errorInputs.email}</p> : <div className="error-input" />}
        </InputElement>
      </FlexContainer>
      <InputElement title="subject" label={t('inputSubject')}>
        {errorInputs.subject ? <p className="error-input">{errorInputs.subject}</p> : <div className="error-input" />}
      </InputElement>
      <TextArea title="message" label={t('inputMsg')}>
        {errorInputs.message ? (
          <p className="error-input tarea">{errorInputs.message}</p>
        ) : (
          <div className="error-input" />
        )}
      </TextArea>
      <div style={{ textAlign: 'center' }}>
        <SendButton type="submit">{tDictionary('send')}</SendButton>
      </div>
    </FormContainer>
  )
}
