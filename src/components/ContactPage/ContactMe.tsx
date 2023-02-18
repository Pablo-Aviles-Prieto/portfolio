import styled from 'styled-components'
import { ContactForm } from './ContactForm'

const PageContainer = styled.div`
  color: ${({ theme }) => theme.emphasizeColor};
  padding: 40px;
  .title {
    text-align: center;
    margin-bottom: 50px;
    p {
      color: ${({ theme }) => theme.mainColor};
    }
  }
`

export const ContactMe: React.FC = () => {
  return (
    <PageContainer>
      <div className="title">
        <h1>Want to get in touch?</h1>
        <p>You can fill the form and I&apos;ll get back at you as soon as possible!</p>
      </div>
      <ContactForm />
    </PageContainer>
  )
}
