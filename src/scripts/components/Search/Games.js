import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

class Games extends React.Component {

  render() {
    const GameNodes = this.props.data.map(game => {
      let time = moment(game.time, 'HH:mm:ss').format('h:mm a')
      let date = moment(game.date).format('MM-D-YYYY')
      return (
          <div key={game.gameId} className="game">
            <h4>{game.gameName}</h4>
            <span>{game.gameType}</span>
            <span>{date} {time}</span>
            <span>{game.address} {game.city}, {game.state}</span><br />
            <a className="button" href={"/#/pickups/search/join/" + game.gameId}>Check It Out</a>
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