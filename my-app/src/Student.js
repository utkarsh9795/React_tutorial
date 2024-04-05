// --------Unmounting in Reactjs---------------
import React, { Component } from 'react'

export default class Student extends Component {
    componentDidMount() {
     console.log("Student Mounted");
    }
  render() {
    console.log("Student Rendered");
    return <h1>Hello Student Component</h1> 
  }
}


// --------Updating in ReactJS-----------------
// import React, { Component } from 'react'
// import Marks from './Marks';
// export default class Student extends Component {
//     constructor(){
//         super();
//         this.state = {
//             roll : 105
//         };
//     }
//     ClickHandle = () => {
//     console.log("Button Clicked");
//     // this.setState({roll:69})
//     this.setState({roll: this.state.roll + 2});
//     }
//   render() {
//     console.log("Student is rendered here");
//     return(
//       <div>
//         <Marks roll={this.state.roll} />
//         <button onClick={this.ClickHandle}>Change</button>
//       </div>
//     )
//   }
// }


// --------Mounting in reactjs-----------------
// import React, { Component } from 'react';
// import Marks from './Marks';
// export default class Student extends Component {
//   render() {
//     console.log("Student is rendered here and it is the child of app")
//     return (
//       <div>
//         <h1>Hello {this.props.name}</h1>
//         <Marks />
//       </div>
//     );
//   }
// }


// -----Passing Arguments to EVENTHANDLERS-----
// import React, { Component } from 'react'
// class Student extends Component {
//     // State without constructor or State Property
//     state = {
//         id: 1,
//         name: "Arsh Anand"
//     };
//     // Event handler arrow function
//     handleClick = (id,e) => {
//         console.log(id);
//         console.log(e);
//     };
//     // handleClickArg =(e)=>{
//     //     this.handleClick(this.state.id,e);
//     // }
//     render(){
//         return( // using bind method
//             <div>
//                <h1>Hello {this.state.name}</h1> 
//                <button onClick={this.handleClick.bind(this,this.state.id)}> 
//                 Delete
//                </button>
//             </div>
//         );
//     }
// }
// export default Student;

// ---------Update State------------------
// import React, { Component } from 'react'
// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         name: "Vivek Anand",
//         roll: this.props.roll
//         };
        
//     }
//     // here it is taking as object as a parameter
//     // handleClick = () => {
//     //     this.setState({name:"Arth Ekansh", roll: "112"})
//     // }
//     // here it is taking function as a parameter
//     handleClick = () => {
//         this.setState(function(state,props){
//             // console.log(state.name);
//            //  console.log(state);
//           //   console.log(props);
//         });
//     };
//     render(){
//         return(
//             <div>
//                 <h1>Hello World</h1>
//            <h1>Hello {this.state.name} My Roll Number is {this.state.roll}</h1>
//             <button onClick={this.handleClick}>Click Me</button>
//             </div>
            
//         )
//     }
// }
// export default Student;

// -------Event Handling in ReactJS-----------

// Function Component
// import React, { Component } from 'react'
// function Student(props){
//    function handleClick(e){
//     e.preventDefault();
//     console.log("Button Clicked");
//    }
//    return(
//     <div>
//         <h1>Hello {props.name}</h1>
//         <a href="http://www.geekyshows.com" onClick={handleClick}>Click Me</a>
//     </div>
//    )
// }  

// export default Student;

// Class component
// import React, { Component } from 'react'
// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         name: "Vivek Anand",
//         roll: this.props.roll
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//         console.log("Button Clicked", this);
//     }
//     render(){
//         return(
//             <div>
//            <h1>Hello {this.state.name} My Roll Number is {this.state.roll}</h1>
//             <button onClick={this.handleClick}>Click Me</button>
//             </div>
            
//         )
//     }
// }
// export default Student;

// ---State with constructor-----
// import React, { Component } from 'react';
//  class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Utkarsh Anand",
//             roll: this.props.roll
//         };
//     }
    
//     render(){
//         return(
//             <h1>Hello {this.state.name} My Roll Number is {this.state.roll}</h1>      
//         );
//     }
// }
 
//  export default Student;

// ---State without constuctor------
// import React, { Component } from 'react';
//  class Student extends Component{
//     state = { // state is accessible within this class only
//         name: "Utkarsh",
//        // roll: "105"
//        roll: this.props.roll
//     }
//     render(){
//         return(
//         // <h1>Hello {this.state.name} My Roll Number is {this.state.roll}</h1>  
//         <h1>Hello {this.state.name} My Roll Number is {this.state.roll}</h1> 
//         )
//     }
//  }
//  export default Student;

// -------Children in JSX-----------------
// import React, {Component} from "react";

// Functional Component
// const Student = props => {
//     return <h1>Hello Ark {props.children}</h1>;
// };

// Class component
// class Student extends Component {
//     render(){
//         return <h1>Hello Vivek {this.props.children}</h1>
//     }
// }
// export default Student;

// ---- Typechecking with Prop Types---------
// import React, {Component} from "react";
// import Pt from "prop-types";

// const Student = props => {
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h2>Your Roll: {props.roll}</h2>
//         </div>
//     );
// };
// Student.propTypes = {
//     name: Pt.string.isRequired,
//     roll: Pt.number
// }
// Student.defaultProps = {
//     name: "GeekyShows"
// }
// export default Student;

// ----------Props in react js-------------
// import React, {Component} from "react";

// const Student = props => {
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h2>Your Roll: {props.roll}</h2>
//         </div>
//     );
// };

// class Student extends Component{
//   render(){
//     return (
//         <div>
//         <h1>Hello {this.props.name}</h1>
//         <h2>Your Roll: {this.props.roll}</h2> 
//         </div>
//     )
//   }
// }
// export default Student;


// Learning 

// e is event object of react

// Component is a name based class here so it is written in the curly brackets

// Composing Components
// import React from "react";
// const Student = (props) => {
//     return <h1>Hello {props.name}</h1>
// };
// export default Student

 // class component
//  class Student extends Component {
//     render(){
//       return <h1>Hello {this.props.name}</h1>
//     }
//    }

// Functional Component
// const Student = props => {
//     return <h1> Hello {props.name}</h1>;
// }