import React from 'react'
import { render } from 'react-dom'

class Owner extends React.Component {
  render() {
    const ownerNode = this.props.data.map(owner => {
      return (
        <div key={owner.userId}>
            <a href={"/#/pickups/profile/" + owner.userId}><img src={owner.picture} width="200" height="200" alt="Profile Pic"  /></a>
            <div className="contact">
              <h4>{owner.firstName}</h4>
              <h4>{owner.lastName}</h4>
              <div>{owner.email}</div>
            </div>
          </div>
      )
    })
    
    return (
      <div className="profile-info">
        {ownerNode}
      </div>
    )
  }
}

export default Owner