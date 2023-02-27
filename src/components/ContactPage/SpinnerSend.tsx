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
    background-color: ${({ theme }) => theme.bgroundSpinner};
    box-shadow: ${({ theme }) => theme.boxShadowSpinner};

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

    background: ${({ theme }) => theme.gradientSpinner};
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
    box-shadow: ${({ theme }) => theme.innerBoxShadowSpinner};
  }
  .spinner-ball {
    width: var(--thickness);
    height: var(--thickness);

    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    background-color: ${({ theme }) => theme.spinnerBall};
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.spinnerBallShadow};
  }
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
