import React from 'react'
import { render } from 'react-dom'

class Game extends React.Component {
  render() {
    const joinNode = this.props.data.map(join => {
      return (
        <div key={join.gameId}>
          <h1>{join.gameName}</h1>         
          <h2>Game Info:</h2>
          <div className="details" >
            <div>{join.address}</div>
            <span>{join.city}, </span><span>{join.state}</span>
            <div>{join.time} {join.date}</div>
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