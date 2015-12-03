import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'
import UserProfile from './userProfile'
import ProfileGames from './userGames'
import cookie from 'js-cookie'

const user = cookie.get('user')

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[],
      game: []
    }
  }

  render() {

    if (!user && window.location.hash == '#/pickups/profile/') {
      window.location.href = '/login.html'
      return
    }

    return (
      <div className="profile">
        <UserProfile data={this.state.user} />
        <ProfileGames data={this.state.game} />
      </div>
    )
  }

  findGames(userId) {
    $.get('http://localhost:3000/api/ownership/by-user/' + userId)
      .then(game => {
        game.forEach(game => {
          $.get('http://localhost:3000/api/game/' + game.gameId)
            .then(game => {
              this.setState({ game: this.state.game.concat(game) })
            })

            .fail((xhr, status, data) => {
              console.error(this.props.url, stats, err.toString())
            })
        })
      })

      .fail((xhr, status, data) => {
        console.error(this.props.url, stats, err.toString())
      })
  }

  loadUserFromServer(userId) {
    $.get('http://localhost:3000/api/user/' + userId)
      .then(user => {
        this.setState({ user })
      })

      .fail((xhr, status, data) => {
        console.error(this.props.url, stats, err.toString())
      })
  }

  componentDidMount() {
    this.loadUserFromServer(this.props.userId)
    this.findGames(this.props.userId)
  }

}

export default Profile