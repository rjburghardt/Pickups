import React from 'react'
import { render } from 'react-dom'
import Map from '../../Map/Map'
import $ from 'jquery'
import Game from './Game'
import Owner from './Owner'

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      owner:[]
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
            <button>Join In!</button>
            <button><a href="/Pickups/Search">Go Back</a></button>
          </div>
        </aside>
      </div>
    )
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
    let url = '/api/ownership/' + gameId
    console.log(url);

    $.get(url)
      .then((owner) => {
        let url = '/api/user/' + owner[0].userId

        $.get(url)
          .then((owner) => {
            console.log(owner)
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

  componentDidMount() {

    let url = document.URL
    let gameId = url.substring(url.lastIndexOf('/') + 1)

    this.loadGameFromServer(gameId)
    this.findOwner(gameId)
  }
}

export default Join