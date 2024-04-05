import React, { Component } from 'react'
import Army from './withArm';
 class Vivek extends Component {
    state = {
        gunshots : 0
    };
    handleGunshots = () => {
        this.setState({gunshots: this.state.gunshots + 1});
    };
  render() {
    return (
      <div>
        <h2>Camp : {this.props.camp} </h2>
        <h3 onMouseOver={this.props.hochandleGunshots}>Vivek {this.props.hocgunname} Gunshots: {this.props.hocgunshots}</h3>
      </div>
    );
  }
}
export default Army(Vivek, 20);
