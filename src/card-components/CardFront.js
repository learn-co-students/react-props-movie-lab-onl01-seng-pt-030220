import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
  // let prop=this.props.poster
  console.log(`this.props.poster`,this.props.poster)
    return (
     
       <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
