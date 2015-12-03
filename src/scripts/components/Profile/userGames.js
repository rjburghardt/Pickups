import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

class ProfileGames extends React.Component {
  render() {
    const gameNode = this.props.data.map(game => {
      let time = moment(game.time, 'HH:mm:ss').format('h:mm a')
      let date = moment(game.date).format('MM-D-YYYY')
      return (
          <div className="open-games" key={game.gameId}>
              <div>{game.gameName}</div>
              <div>{game.gameType}</div>
              <div>{game.address} {game.city}, {game.state}</div>
              <div>{date} {time}</div>
              <div className="buttons">
                <a className="button" href={"/#/pickups/search/join/" + game.gameId}>More Info</a>
                <a className="button" href={"/#/pickups/create/" + game.gameId + "/edit"}>Edit</a>
              </div>
          </div>
      )
    })
    return (
      <div className="profile-games">
        <h1>Games</h1>
        {gameNode}
      </div>
    )
  }
}

export default ProfileGames