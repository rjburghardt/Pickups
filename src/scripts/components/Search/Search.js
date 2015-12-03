import React from 'react'
import { render } from 'react-dom'
import Map from '../Map/Map.js'
import $ from 'jquery'
import Games from './Games.js'
import GMaps from 'GMaps'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      location: []
    }
  }

  render() {
    return (
      <div className="game-view">
        <Map />
        <aside className="search box">
        <form action="/api/game" method="get">
         Search Sports <input type="search" ref="game_name" />
          <div className="buttons">
            <button>Search</button>
            <button type="reset">Reset</button>
          </div>
        </form>
        <Games data={this.state.data}/>
      </aside>
    </div>
    )
  }

  loadGamesFromServer() {
    $.get('/api/game')
      .then((data) => {
        this.setState({ data })
      })
      .fail((xhr, status, data) => {
        console.error(this.props.url, status, err.toString())
      })
  }

  componentDidMount() {
    this.loadGamesFromServer()
  }
}

export default Search