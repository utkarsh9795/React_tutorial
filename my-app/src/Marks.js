// --------Unmounting in Reactjs---------------


// --------Updating in ReactJS-----------------
// import React, { Component } from 'react'

// export default class Marks extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             mroll : this.props.roll
//         }
//     }

//     static getDerivedStateFromProps(props,state){
//       console.log("Get derived state from props"); 
//       console.log(props,state);
//       if(props.roll !== state.mroll){
//         return {mroll:props.roll};
//       };
//       return null; 
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//     if(this.state.mroll < 107){
//         console.log("Mark shouldComponentUpdate");
//         console.log(nextProps, nextState);
//         return true;
//     }
//     console.log(nextProps, nextState);
//     return false;
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log("Marks GetSnapshotBeforeUpdate - It runs before update");
//         console.log(prevProps, prevState);
//         return 45;
//     }

//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log("Marks - ComponentDidUpdate - it runs after update");
//        console.log(prevProps, prevState, snapshot); 
//     }

//   render() {
//     console.log("Marks is renderd here");
//     return (
//       <div>
//         <h1>{this.state.mroll}</h1>
//       </div>
//     )
//   }
// }


// --------Mounting in reactjs-----------------
// import React, { Component } from 'react'
// export default class Marks extends Component {
//   render() {
//     console.log("Marks is rendered here and it is the child of the student");
//     return (
//       <div>
//         <h1>Marks Component</h1>
//       </div>
//     )
//   }
// }
