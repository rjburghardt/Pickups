import React from 'react'
import { render } from 'react-dom'
import Map from '../Map/Map.js'
import $ from 'jquery'
import Games from './Games.js'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="game-view">
      <Map />
      <aside className="search box">
      <form action="/api/game" method="get">
       Search Sports <input type="search" ref="game_name" />
        Enter Date <input type="date" ref="date" />
        Search Location<input type="search" ref="city" />
        <div className="buttons">
          <button>Search</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <Games data={this.state.data}/>
      <div className="game-nav">
        <button><i className="fa fa-chevron-left"></i></button>
        <span>See More</span>
        <button><i className="fa fa-chevron-right"></i></button>
      </div>
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
        console.error(this.props.url, stats, err.toString());
      })
  }

  componentDidMount() {
    this.loadGamesFromServer()
  }
}

export default Search