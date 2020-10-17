import React, { Component } from 'react';

export default class CardFront extends Component {
//CardFront will only be used to display the movie poster. 
  render() {
    console.log(this.props, "this is the card front props")
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
