import React from 'react'
import { render } from 'react-dom'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-information">
          <h1>Player Profile</h1>
          <img src="http://placehold.it/240x220" alt="prof pic" />
          <h3>FirstLast</h3>
          <h3>City, St</h3>
          <h3>email</h3>
          <div className="profile-bio">
            <h2>Bio</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima quisquam consequuntur dicta labore eos, ipsa consectetur cumque dolorum odit nobis, voluptatibus quam molestiae blanditiis? Doloribus ad, blanditiis impedit. Pariatur!</p>
          </div>
        </div>
        <div className="profile-games">
          <h1>Open Games</h1>
          <div className="open-games">
            <div className="open-game">
              <span>Name of Game</span><span>Location</span><span>Date & Time</span>
              <button>More info</button>
              <button>Edit</button>
            </div>
            <div className="open-game">
              <span>Name of Game</span><span>Location</span><span>Date & Time</span>
              <button>More info</button>
              <button>Edit</button>
            </div>
            <div className="open-game">
              <span>Name of Game</span><span>Location</span><span>Date & Time</span>
              <button>More info</button>
              <button>Edit</button>
            </div>
          </div>
          <div className="past-games">
            <h1>Past Games</h1>
            <div className="past-game">
              <span>Name of Game</span><span>Location</span><span>Date & Time</span><button>More info</button>
            </div>
            <div className="past-game">
              <span>Name of Game</span><span>Location</span><span>Date & Time</span><button>More info</button>
            </div>
            <div className="past-game">
              <span>Name of Game</span><span>Location</span><span>Date & Time</span><button>More info</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile