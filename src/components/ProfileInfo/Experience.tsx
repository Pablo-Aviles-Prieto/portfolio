import styled from 'styled-components'

const HeaderContainer = styled.div`
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 53px;
  }
`

const ContentContainer = styled.div`
  .block {
    display: flex;
    align-items: center;
    &-left {
      padding-bottom: 40px;
      border-right: 2px solid red;
      width: 150px;
      padding-right: 20px;
      text-align: right;
      &-period {
        color: ${({ theme }) => theme.greyPerma};
      }
    }
    &-right {
      padding-left: 40px;
      padding-bottom: 40px;
    }
  }
`

export const Experience: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Experience</h1>
      </HeaderContainer>
      <ContentContainer>
        <div className="block">
          <div className="block-left">
            <p>
              <span className="emphasize-content">OXYGEN</span>
            </p>
            <p>
              <span className="block-left-period">Sep 2022 - now</span>
            </p>
          </div>
          <div className="block-right">Side2</div>
        </div>
        <div className="block">
          <div className="block-left emphasize-content">Indra</div>
          <div className="block-right">Side2</div>
        </div>
        <div className="block">
          <div className="block-left emphasize-content">Esports player</div>
          <div className="block-right">Side2</div>
        </div>
        <div className="block">
          <div className="block-left emphasize-content">Convergys</div>
          <div className="block-right">Side2</div>
        </div>
      </ContentContainer>
    </>
  )
}
