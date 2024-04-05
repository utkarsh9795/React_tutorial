import React, { Component } from 'react'
import Army from './withArm';
 class Utkarsh extends Component {

  render() {
   //  console.log(this.props.camp); // undefined
    return (
      <div>
        <h2>Camp : {this.props.camp} </h2>
        <h3 
        onMouseOver={this.props.hochandleGunshots}
        >Utkarsh {this.props.hocgunname} 
        Gunshots: {this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Utkarsh, 10);
