import React from 'react'
import { render } from 'react-dom'


class UserProfile extends React.Component {
  render() {
    const userNode = this.props.data.map(user => {
      let url = user.picture
      let img = {backgroundImage: 'url(' + url + ')'}
      return (
        <div key={user.userId}>
          <h1>Player Profile</h1>
          <div className="user-img" style={img}></div>
          <h3>{user.firstName} {user.lastName}</h3>
          <h3>{user.city}, {user.state}</h3>
          <h3>{user.email}</h3>
          <div className="profile-bio">
            <h2>Bio</h2>
            <p>{user.bio}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="profile-information">
        {userNode}
      </div>
    )
  }
}

export default UserProfile