import styled from 'styled-components'

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  .spinner {
    --size: 150px;
    --thickness: 10px;

    width: var(--size);
    height: var(--size);

    position: relative;
    border-radius: 50%;
    background-color: #291503;
    box-shadow: 0 0 50px #fd920518;

    animation: spinner 2s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  .spinner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;

    background: linear-gradient(to bottom, #904e03, transparent);
    background-size: 100% 80%;
    background-repeat: no-repeat;

    border-top-left-radius: calc(var(--size) / 2);
    border-bottom-left-radius: calc(var(--size) / 2);
  }
  .spinner::after {
    content: '';
    width: calc(var(--size) - (var(--thickness) * 2));
    height: calc(var(--size) - (var(--thickness) * 2));

    position: absolute;
    top: var(--thickness);
    left: var(--thickness);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.mainBground};
    box-shadow: 0 0 50px inset #fd920518;
  }
  .spinner-ball {
    width: var(--thickness);
    height: var(--thickness);

    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    background-color: #ec7f02;
    border-radius: 50%;
    box-shadow: 0 0 10px #ac5c00, 0 0 20px #ac5c00, 0 0 30px #ac5c00, 0 0 40px #ac5c00, 0 0 50px #ac5c00;
  }

  /* .spinner-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #022a31;
  } */
`

export const SpinnerSend: React.FC = () => {
  return (
    <SpinnerContainer>
      <div className="spinner-container">
        <div className="spinner">
          <span className="spinner-ball" />
        </div>
      </div>
    </SpinnerContainer>
  )
}
