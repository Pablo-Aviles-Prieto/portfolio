import styled from 'styled-components'

const HeaderContainer = styled.div`
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 45px;
  }
`

const ContentContainer = styled.div`
  margin-top: 20px;
  .block {
    margin: 30px 0;
    &-header {
      display: flex;
      align-items: center;
      gap: 10px;
      .subtitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        .organization {
          display: inline-block;
          width: 150px;
        }
      }
    }
    &-content {
      margin-top: 10px;
      font-size: 15px;
    }
    &__separator {
      height: 30px;
      width: 70%;
      border-bottom: 1px solid #ca7100;
      margin-left: calc(50% - (70% / 2));
    }
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 10px;
      .block__separator {
        display: none;
      }
    }
  }
  .emphasize-content {
    color: #ca7100;
  }
  .emphasize-grey {
    color: ${({ theme }) => theme.greyLighter};
  }
  .emphasize-dark-grey {
    color: ${({ theme }) => theme.greyPerma};
  }
`

export const Education: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Education</h1>
      </HeaderContainer>
      <ContentContainer>
        <div className="block">
          <div className="block-header">
            <div className="block-header-title">
              <h3 className="emphasize-content">OXYGEN training</h3>
              <p className="emphasize-grey subtitle">
                <span>OXYGEN</span>
                <span className="emphasize-dark-grey">Sep 2022</span>
              </p>
            </div>
            <div className="block-header-arrow">A</div>
          </div>
          <div className="block-content">
            <p>· Advanced concepts on HTML5, CSS3 and how to structure it</p>
            <p>· Advanced concepts on ReactJS (with Redux), JavaScript and NodeJS (with ExpressJS)</p>
            <p>· Core concepts on Unit and E2E testing using Jest, Cypress, SuperTest and Playwright</p>
            <p>· Working under Scrum methodology implemented on sprints</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block-header">
            <h3 className="emphasize-content">React Full Course (49H)</h3>
            <p className="emphasize-grey subtitle">
              <span className="organization">Udemy</span>
              <span className="emphasize-dark-grey datetime">Sep 2022</span>
            </p>
          </div>
          <div className="block-content">
            <p>
              · Core and advanced concepts about ReactJS (components, props, hooks and custom hooks, life cycle,
              routing...)
            </p>
            <p>
              · Usage of multiple styling libraries like Styled Compontents, MaterialUI, NextUI, React Transition Group
              and CSS Modules
            </p>
            <p>· How to work with stores such as React context and Redux</p>
            <p>
              · In depth use of Redux along toolkit and rematch libraries. Working with thunks (API requests and side
              effects)
            </p>
            <p>· Core concepts about TypeScript</p>
            <p>· Core concepts of NextJS framework</p>
            <p>· Introduction to Unit and E2E testing with Jest and React testing library</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block-header">
            <h3 className="emphasize-content">JavaScript Algorithms and Data Structures (300H)</h3>
            <p className="emphasize-grey subtitle">
              <span className="organization">freeCodeCamp</span>
              <span className="emphasize-dark-grey datetime">Aug 2022</span>
            </p>
          </div>
          <div className="block-content">
            <p>
              · Fundamentals of JavaScript along two important programming styles or paradigms: Object Oriented
              Programming (OOP) and Functional Programming (FP)
            </p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block-header">
            <h3 className="emphasize-content">Web Development Bootcamp (80H)</h3>
            <p className="emphasize-grey subtitle">
              <span className="organization">Udemy</span>
              <span className="emphasize-dark-grey datetime">July 2022</span>
            </p>
          </div>
          <div className="block-content">
            <p>· Core concepts on HTML5, CSS3, JavaScript ES6+ and how to structure and manage it</p>
            <p>· Backend development using template engines and building REST APIs with NodeJS & ExpressJS</p>
            <p>· Working with MySQL,MongoDB (Mongoose) and Firabase databases</p>
            <p>
              · Dived into more advanced concepts like authentication, website security, coding patterns, file uploads
              and management, user input validation, etc
            </p>
            <p>· Usage of multiple third-party packages and services like Stripe, Google, etc</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block-header">
            <h3 className="emphasize-content">Computer Network Systems Management (FPII)</h3>
            <p className="emphasize-grey subtitle">
              <span className="organization">IES Fernando Wirtz</span>
              <span className="emphasize-dark-grey datetime">2012-2014</span>
            </p>
          </div>
          <div className="block-content">
            <p>· Operating systems implementation and management</p>
            <p>· Network services and Internet of Things (IoT)</p>
            <p>· Web applications implementation</p>
            <p>· Database management systems administration</p>
            <p>· In depth knowledge about MySQL</p>
          </div>
          <div className="block__separator" />
        </div>
      </ContentContainer>
    </>
  )
}
