export const TerminalToolbar: React.FC = () => {
  return (
    <div className="Terminal__Toolbar">
      <div className="Toolbar__buttons">
        <button type="button" className="Toolbar__button Toolbar__button--exit">
          &#10005;
        </button>
        <button type="button" className="Toolbar__button">
          &#9472;
        </button>
        <button type="button" className="Toolbar__button">
          &#9723;
        </button>
      </div>
      <p className="Toolbar__user">aviles@ubuntu:~</p>
    </div>
  )
}
