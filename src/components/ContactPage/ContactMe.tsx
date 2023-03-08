import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('contactMe')

  return (
    <PageContainer>
      <div className="title">
        <h1>{t('getInTouch')}</h1>
        <p>{t('formDesc')}</p>
      </div>
      <ContactForm />
    </PageContainer>
  )
}
