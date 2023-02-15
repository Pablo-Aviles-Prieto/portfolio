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
  text-align: justify;
  .block {
    margin: 40px 0;
    &-header {
      .datetime {
        margin-left: 20px;
      }
    }
    &-content {
      margin-top: 20px;
    }
    &__separator {
      height: 20px;
      width: 70%;
      border-bottom: 1px solid #ca7100;
      margin-left: calc(50% - (70% / 2));
    }
    &:first-of-type {
      margin-top: 10px;
    }
    &:last-of-type {
      margin-bottom: 0%;
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
            <h3 className="emphasize-content">React Full Course (49H)</h3>
            <p className="emphasize-grey">
              Udemy<span className="emphasize-dark-grey datetime">Sep 2022</span>
            </p>
          </div>
          <div className="block-content">
            <p>Random react course info</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block-header">
            <h3 className="emphasize-content">JavaScript Algorithms and Data Structures (300H)</h3>
            <p className="emphasize-grey">
              freeCodeCamp <span className="emphasize-dark-grey datetime">Aug 2022</span>
            </p>
          </div>
          <div className="block-content">
            <p>Random freeCodeCamp info</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block-header">
            <h3 className="emphasize-content">Full Stack Course (80H)</h3>
            <p className="emphasize-grey">
              Udemy<span className="emphasize-dark-grey datetime">July 2022</span>
            </p>
          </div>
          <div className="block-content">
            <p>Random full stack course info</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block-header">
            <h3 className="emphasize-content">Higher Technician in Computer Network Systems Management</h3>
            <p className="emphasize-grey">
              IES Fernando Wirtz <span className="emphasize-dark-grey datetime">2012-2014</span>
            </p>
          </div>
          <div className="block-content">
            <p>Random FPII info</p>
          </div>
          <div className="block__separator" />
        </div>
      </ContentContainer>
    </>
  )
}
