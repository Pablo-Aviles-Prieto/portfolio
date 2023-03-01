import styled from 'styled-components'

const HeaderContainer = styled.div`
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 45px;
  }
`

const ContentContainer = styled.div`
  color: ${({ theme }) => theme.greyLighter};
  text-align: justify;
  .block {
    display: flex;
    &-left,
    &-right {
      padding-bottom: 35px;
    }
    &-left {
      border-right: 2px solid;
      border-color: ${({ theme }) => theme.experienceBorder};
      width: 210px;
      padding-right: 20px;
      text-align: right;
      &-period {
        color: ${({ theme }) => theme.greyPerma};
      }
    }
    &-right {
      padding-left: 20px;
      max-width: 470px;
      font-size: 15px;
      &-title {
        color: ${({ theme }) => theme.lightEmphasize};
        font-weight: 700;
        font-size: 18px;
      }
    }
    &:first-of-type {
      padding-top: 20px;
      text-align: left;
    }
    &:last-of-type {
      .block {
        &-left,
        &-right {
          padding-bottom: 0;
        }
      }
    }
  }
  .emphasize-white {
    color: ${({ theme }) => theme.mainColor};
  }
  .identation-block {
    display: flex;
    gap: 4px;
    &-symbol {
      color: ${({ theme }) => theme.mainColor};
      padding-left: 16px;
    }
  }
`

export const Experience: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Work experience</h1>
      </HeaderContainer>
      <ContentContainer>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">Flat 101</p>
            <p>
              <span className="block-left-period">Mar 2023 - now</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">Frontend Developer</p>
            <p>Working on different React projects meeting customer requirements.</p>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">OXYGEN</p>
            <p>
              <span className="block-left-period">Sep 2022 - Feb 2023</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">Full Stack Web Developer</p>
            <p>Developing in both the backend and frontend for the Hotel Miranda project:</p>
            <p>- Internal dashboard for employees: </p>
            <p className="emphasize-white identation-block">
              <span className="identation-block-symbol">+</span> SPA: #ReactJS, #TypeScript, #JavaScript,
              #Styled-Componentes, #Jest, #Cypress
            </p>{' '}
            <p className="emphasize-white identation-block">
              <span className="identation-block-symbol">+</span> REST API: #NodeJS, #ExrpressJS, #TypeScript,
              #JavaScript, #MongoDB, #JWT, #Jest, #SuperTest
            </p>
            <p>- Public website for customers:</p>{' '}
            <div className="identation-block">
              <span className="identation-block-symbol">+</span>
              <p>
                <span className="emphasize-white">Full responsive</span> website, built with{' '}
                <span className="emphasize-white">#HTML5, #CSS3, #JavaScript</span> and{' '}
                <span className="emphasize-white">#Sass</span> using <span className="emphasize-white">#BEM </span>
                methodology.
              </p>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">Indra</p>
            <p>
              <span className="block-left-period">Sep 2019 - Sep 2022</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">IT Support Specialist</p>
            <p>
              Remote technical support orientated to networking and systems to companies in two Internet Service
              Providers (mundo-r and Telecable).
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">Esports player</p>
            <p>
              <span className="block-left-period">Mar 2016 - June 2019</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">Professional esports player</p>
            <p>Professional esports player for Saski Baskonia SAD, Gamecore, S.L. and Arctic Gaming, S.L. companies.</p>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">Convergys</p>
            <p>
              <span className="block-left-period">Sep 2015 - June 2016</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">IT Support Technician</p>
            <p>
              Remote technical support to companies and individuals troubleshooting hardware and software incidents for
              Dell computers, laptops and servers.
            </p>
          </div>
        </div>
      </ContentContainer>
    </>
  )
}
