import React from 'react'
import { render } from 'react-dom'
import Map from '../../Map/Map'
import $ from 'jquery'
import Game from './Game'
import Owner from './Owner'
import cookie from 'js-cookie'

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      owner:[],
      user: []
    }
  }

  render() {
    return (
      <div className="game-view">
        <Map />
        <aside className="join-game">
          <h1>Join Game</h1>
          <Owner data={this.state.owner} />
          <Game data={this.state.data} />
          <div className="join">
              <input className="userId" type="hidden" name="userId" value={this.state.user.user_id} />
              <input className="gameId" type="hidden" name="gameId" value={this.props.gameId} />
              <button id="join-in">Join In!</button>
            <a className="button" href="/#/pickups/search">Go Back</a>
          </div>
        </aside>
      </div>
    )
  }

  userSession() {
    let userCookie = cookie.get('user')

    if (userCookie) {
      const user = JSON.parse(userCookie.slice(2))
      this.setState({ user })
    } else {
      window.location.href = 'http://localhost:3000/login.html'
    }
  }

  loadGameFromServer(id) {
    let url = '/api/game/' + id

    $.get(url)
      .then((data) => {
        this.setState({ data })
      })

      .fail((xhr, status, data) => {
        console.error(this.props.url, stats, err.toString())
      })
  }

  findOwner(gameId) {
    let url = '/api/ownership/by-game/' + gameId

    $.get(url)
      .then((owner) => {
        let url = '/api/user/' + owner[0].userId

        $.get(url)
          .then((owner) => {
            this.setState({ owner })
          })

          .fail((xhr, status, user) => {
            console.error(this.props.url, stats, err.toString())
          }) 

      })

      .fail((xhr, status, user) => {
        console.error(this.props.url, stats, err.toString())
      })
  }

  componentDidMount(gameId) {
    this.userSession()
    this.loadGameFromServer(this.props.gameId)
    this.findOwner(this.props.gameId)
  }
}

export default Join