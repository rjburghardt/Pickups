import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

class Game extends React.Component {
  render() {
    const joinNode = this.props.data.map(join => {
      let time = moment(join.time, 'HH:mm:ss').format('h:mm a')
      let date = moment(join.date).format('MM-D-YYYY')
      return (
        <div key={join.gameId}>
          <h1>{join.gameName}</h1>         
          <h2>Game Info:</h2>
          <div className="details" >
            <div>{join.gameType}</div>
            <div>{join.address}</div>
            <span>{join.city}, </span><span>{join.state}</span>
            <div>{time} {date}</div>
            <div>Number of Players Needed: {join.players}</div>
          </div>
          <h2>Host Notes:</h2>
          <div className="comments">
            <p>{join.comments}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="game-info">
        {joinNode}
      </div>
    )
  }
}

export default Game