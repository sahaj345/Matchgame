import './index.css'

const Navbar = props => {
  const {score, timeElapsedInSeconds} = props

  return (
    <li>
      <nav className="nav-bar-container">
        <div className="title-score-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="scores-container">
            <p className="score">Score:{score}</p>
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-image"
              />
            </div>
            <p className="score">{timeElapsedInSeconds} sec</p>
          </div>
        </div>
      </nav>
    </li>
  )
}

export default Navbar
