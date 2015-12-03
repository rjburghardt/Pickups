import React from 'react'
import { render } from 'react-dom'
import Map from '../../Map/Map.js'
import cookie from 'js-cookie'
import $ from 'jquery'
import _ from 'underscore'
import moment from 'moment'

const userCookie = cookie.get('user')

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: [],
      owner: [],
      disabled: 'disabled'
    }
  }

  render() {
    let time = moment(this.state.game.time, 'HH:mm:ss').format('HH:mm')
    let date = moment(this.state.game.date).format('YYYY-MM-DD')

    return (
      <div className="game-view">
        <Map />
        <aside className="create box">
          <h1>Edit Game</h1>
          <form action={"/api/game/" + this.state.game.gameId} method="PUT" onSubmit={this.handleSubmit}>
            <h2>Game Name</h2>
            <input type="text" name="gameName" value={this.state.game.gameName} disabled={this.state.disabled} onChange={this.onChangeName.bind(this)} />
            Sport <input type="text" name="gameType" value={this.state.game.gameType} disabled={this.state.disabled} onChange={this.onChangeSport.bind(this)} />
            Address <input type="text" name="address" id="address" value={this.state.game.address} disabled={this.state.disabled} onChange={this.onChangeAddress.bind(this)} />
            City <input type="text" name="city" id="city" value={this.state.game.city} disabled={this.state.disabled} onChange={this.onChangeCity.bind(this)}/>
            State <select name="state" id="state" value={this.state.game.state} disabled={this.state.disabled} onChange={this.onChangeState.bind(this)}>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="DC">DC</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WV</option>
              <option value="WY">WY</option>
            </select> <br />
            <button id="map-button">Map Address</button>
            Date<input type="date" name="date" value={date} disabled={this.state.disabled} onChange={this.onChangeDate.bind(this)} />
            Time<input type="time" name="time" value={time} onChange={this.onChangeTime.bind(this)} />
            <h2>Game Comments</h2>
            <textarea name="comments" id="comments" cols="30" rows="10" value={this.state.game.comments} disabled={this.state.disabled} onChange={this.onChangeComments.bind(this)}></textarea>
            <h2>Total Number of Players needed:</h2>
            <input type="number" min="1" name="players" value={this.state.game.players} disabled={this.state.disabled} onChange={this.onChangePlayers.bind(this)} />
            <div className="buttons">
              <button disabled={this.state.disabled} onClick={this.handleSubmit}>Edit</button>
              <a className="button" href="/pickups/search">Go Back</a>
            </div>
          </form>
        </aside>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    const putURL = "http://localhost:3000/api/game/" + this.state.game.gameId
    $.ajax({
      url: putURL,
      method: "PUT",
      data: {
        gameName: this.state.game.gameName,
        gameType: "{this.state.game.gameType}",
        address: "{this.state.game.address}",
        city: "{this.state.game.city}",
        state: "{this.state.game.state}",
        date: "{this.state.game.date}",
        time: "{this.state.game.time}",
        comments: "{this.state.game.comments}",
        players: "{this.state.game.players}"
      }
    })
  }

  stateChange(gameObject) {
   return _.assign({}, this.state, { game: _.assign({}, this.state.game, gameObject) })

  }

  onChangeName(e) {
    this.setState(this.stateChange({gameName: e.target.value}))
  }

  onChangeSport(e) {
    this.setState(this.stateChange({gameType: e.target.value}))
  }

  onChangeAddress(e) {
    this.setState(this.stateChange({address: e.target.value}))
  }

  onChangeCity(e) {
    this.setState(this.stateChange({city: e.target.value}))
  }

  onChangeState(e) {
    this.setState(this.stateChange({state: e.target.value}))
  }

  onChangeDate(e) {
    this.setState(this.stateChange({date: e.target.value}))
  }

  onChangeTime(e) {
    this.setState(this.stateChange({time: e.target.value}))
  }

  onChangeComments(e) {
    this.setState(this.stateChange({comments: e.target.value}))
  }

  onChangePlayers(e) {
    this.setState(this.stateChange({players: e.target.value}))
  }

  getGameInfo() {
    const url = 'http://localhost:3000/api/game/' + this.props.gameId
    $.get(url)
      .then(game => {
        game = game[0]
        this.setState({ game })
      })
      .fail((xhr, status) => {
        console.error(xhr, status)
      })
  }

  getOwnerInfo() {
    let url = 'http://localhost:3000/api/ownership/by-game/' + this.props.gameId
    $.get(url)
      .then(owner => {
        owner = owner[0].userId
        $.get('http://localhost:3000/api/user/' + owner)
          .then(userOwner => {
            if (userCookie) {
              const user = JSON.parse(userCookie.slice(2))
            
            this.setState({ owner: userOwner[0] })
            const gameOwner = this.state.owner.userId
            if(user.user_id === gameOwner) {
              this.setState({disabled: null})
            }
          }
          })
      })
      .fail((xhr, status) => {
        console.error(xhr, status)
      })
  }

  componentDidMount() {
    this.getGameInfo()
    this.getOwnerInfo()
  }
}
export default Edit