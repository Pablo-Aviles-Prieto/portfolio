import styled from 'styled-components'
import { ContactForm } from './ContactForm'

const PageContainer = styled.div`
  color: ${({ theme }) => theme.emphasizeColor};
  padding: 40px;
  .title {
    text-align: center;
    margin-bottom: 50px;
  }
`

export const ContactMe: React.FC = () => {
  return (
    <PageContainer>
      <h1 className="title">Want to get in touch?</h1>
      <ContactForm />
    </PageContainer>
  )
}
