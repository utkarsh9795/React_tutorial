// -------ErrorBoundariesInReactJS----------------
import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    if(this.props.hitman === "NoImage"){
        throw new Error("Image Not Found");
    }
    return <img src={this.props.hitman} alt="My Pic" width="300px" />
  }
}
