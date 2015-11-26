import React from 'react'
import { render } from 'react-dom'

class Games extends React.Component {
  render() {
    const GameNodes = this.props.data.map(game => {
      return (
          <div key={game.gameId} className="game">
            <span>{game.game_name}</span><span>{game.date}</span>
            <span>{game.address} {game.city}, {game.state}</span><br />
            <a href={"/#/pickups/search/join/" + game.gameId}>Check It Out </a>
          </div>
        )
    })

    return (
      <div className="game-list">
        {GameNodes}
      </div>
    )
  }
}

export default Games