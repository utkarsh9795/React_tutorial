// ------StrictModeInReactJS----------------------
import React, { Component, StrictMode } from 'react';
import User from './User';
export default class App extends Component {
  render() {
    return (
      <StrictMode>
      <User />
      </StrictMode>
    )
    
  }
}



// -------ErrorBoundariesInReactJS----------------
// import React, { Component } from 'react';
// import pic1 from './pic1.jpg';
// import pic2 from './pic2.jpg';
// import Image from './Image';
// import Error from './Error';
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Error>
//         <Image hitman={pic1} /> <br />
//         </Error>

//         <Error>
//         <Image hitman={pic2} /> <br />
//         </Error>

//         <Error>
//         <Image hitman="NoImage" /> <br />
//         </Error>
//       </div>
//     )
//   }
// }


// ------HigherOrderComponent---------------------
// import React, { Component } from 'react'
// import Utkarsh from './Utkarsh'
// import Vivek from './Vivek'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Utkarsh camp="120" />
//         <Vivek camp="140" />
//       </div>
//     )
//   }
// }


// -----------ContextType-------------------------
// import React, { Component } from 'react'
// import User from './User';
// // export const MyContext = React.createContext();
// import { Provider } from './context';
// export default class App extends Component {
//   state = {
//     name: "Utkarsh",
//     value: 10
//   }
// handleClickContext = () => {
//     this.setState({value: this.state.value+1})
//   }
//   render() {
//     const contextValue = {
//       data: this.state,
//       handleClick: this.handleClickContext
//     }
//     return (
//       <Provider value={contextValue}>
//         <User />
//       </Provider>
//     )
//   }
// }



// --------ContextAPI in reactjs------------------
// import React, { Component } from 'react'
// import User from './User';
// // export const MyContext = React.createContext();
// import { Provider } from './context';
// export default class App extends Component {
//   state = {
//     name: "Utkarsh",
//     value: 10
//   }
// handleClickContext = () => {
//     this.setState({value: this.state.value+1})
//   }
//   render() {
//     const contextValue = {
//       data: this.state,
//       handleClick: this.handleClickContext
//     }
//     return (
//       <Provider value={contextValue}>
//         <User />
//       </Provider>
//     )
//   }
// }

// import React, { Component } from 'react'
// import User from './User';
// export default class App extends Component {
//   state = {
//     name: "Utkarsh"
//   }
//   render() {
//     return <User name={this.state.name} />
//   }
// }


// -----LiftingStateUp----------------------------
// import React, { Component } from 'react';
// import User from './User';
// import Guest from './Guest';
// export default class App extends Component {
//   state = {
//   //   name: "Utkarsh",
//     value: 10
//   };
//   render() {
//     return <div>
//       <User num1={this.state.value} />
//      <Guest num2={this.state.value}/>
//     </div>
     
//   }
// }

// --------Callback refs-------------------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//   super();
//   this.backRef = null;
//   this.setBackRef = (element) => {
//     this.backRef  = element;
//   }
//   }
//   componentDidMount = () => {
//     if(this.backRef){
//       this.backRef.focus();
//     }
//   }
  
//   render() {
//     return <form>
//       Name: <input type="text" />
//       <br />
//       <br />
//       Password: <input type="text" ref={this.setBackRef} />
//       <br />
//       <br />
//       Address: <input type="text" />
//     </form>
    
//   }
// }

// ------Uncontrolled Component in reactjs-------
// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor(props){
//     super(props);
//    this.state = {
//     value : ""
//    }
//     // Creating ref
//     this.textInput = React.createRef();
//   }
//  handleSubmit = (e) => {
//   e.preventDefault();
//   // console.log(this.textInput.current.value);
//   this.setState({value: this.textInput.current.value});
//  };
  
//   render() {
//     return (
//       <React.Fragment>
//         <h2>
//           You typed: {this.state.value}
//         </h2>
//         <form onSubmit={this.handleSubmit}>
//           Input: <input type="text" ref={this.textInput} />
//           <input type="submit" value="Submit" />
//         </form>
//       </React.Fragment>
//     )
//   }
// }

// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor(props){
//     super(props);
   
//     // Creating ref
//     this.textInput = React.createRef();
//   }
//   componentDidMount = () => {
//     // console.log(this.textInput.current);
//     this.textInput.current.focus();
//   }
  
//   render() {
//     return (
//       <form>
//        Name: <input type="text" />
//        <br/>
//        <br/>
//        Password: <input type="text" ref={this.textInput} />
//        <br />
//        <br />
//        Address: <input type="text" />
//       </form>
//     );
//   }
// }


// -----Handling Form IN reactjs ----------------

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     name : "",
//     password: ""
//   };
//   handleChange= (e) => {
//     this.setState({ [e.target.name] : e.target.value });
//   };

//   handleSubmit = (e) => {
//     // console.log(e.target);
//     // console.log(e.target[1]);
//     // console.log(e.target[2]);
//     // console.log(e.target[0].value);
//     e.preventDefault();
//   }
  
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name: <input 
//             type="text" 
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}/>
//           </label>
//           <br/><br/>
//           <label>
//             Password: <input 
//             type="text" 
//             name="password"
//             value={this.state.password} 
//             onChange={this.handleChange} />
//           </label> <br /> <br />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }

// ------ControlMultipleInputElementINReactJS-------

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     name : "Utkarsh Anand",
//     password: "helloworld"
//   }
//   handleChange= (e) => {
//     // this.setState({name : e.target.value});
//     // console.log(e.target.name);
//     // this.setState({ [e.target.name ]: e.target.value });
//     const value = e.target.name === "password" ? e.target.value.toUpperCase().substr(0,10) : e.target.value;
//     this.setState({ [e.target.name ]: value });
//     // console.log([e.target.name ])
//   };
//   // handlePassword = (e) => {
//   //   this.setState({password : e.target.value});
//   // };
//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             Name: <input 
//             type="text" 
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}/>
//           </label>
//           <br/><br/>
//           <label>
//             Password: <input 
//             type="text" 
//             name="password"
//             value={this.state.password} 
//             onChange={this.handleChange} />
//           </label>
//         </form>
//       </div>
//     )
//   }
// }


// ------ControlledComponentInTextArea--------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     value : "Hello this my textarea here"
//   }
//   handleChange = (e) => {
//     this.setState({value : e.target.value.substr(0,50) })
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <textarea value ={this.state.value} onChange={this.handleChange}/>
//         </form>
//       </div>
//     )
//   }
// }


// --------ControlledComponentInReactJS-------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     value: ""
//   };
//   handleChange = (e) => {
//     // console.log(e.target.value);
//     this.setState({value: e.target.value.toUpperCase().substr(0,10) })
//   };
//   render() {
//     return (
//       <div>
//         <form>
//           <h2>Controlled by ReactJS</h2>
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </form>
//       </div>
//     )
//   }
// }


// -----How to use bootstrap in ReactJS-------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <button className='btn btn-danger'>Normal Button</button>
//       </div>
//     )
//   }
// }


// -------how to use image or other set in reactjs--

// Src folder
// import React, { Component } from 'react'
// import picture from "./pic.jpg";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src={picture} alt="mypic" width="300px"/>
//       </div>
//     )
//   }
// }

// Public folder
// import React, { Component } from 'react'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src={process.env.PUBLIC_URL + "/image/pic.jpg"} alt="MyPic" width="300px"/>
//       </div>
//     )
//   }
// }

// ------StylingComponentCSSModule------------------
// import React, { Component } from 'react';
// import User from "./User";
// import Styles from "./App.module.css";
// export default class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1 className={Styles.txt}>Hello App</h1>
//         <User />
//       </React.Fragment>
//     );
//   }
// }

// ------StylingComponentExternalStylesheet--------
// import React, { Component } from 'react'
// import "./App.css"
// export default class App extends Component {
//   render() {
//     return (
//      <React.Fragment>
//       <h1 className="txtb txts">Hello App</h1>
//      </React.Fragment>
//     )
//   }
// }

// import React, { Component } from 'react';
// import "./App.css";
// import User from './User';
// export default class App extends Component {
//   render() {
//     let style = false;
//     return (
//       <React.Fragment>
//         <h1 className="txtb">Hello App</h1>
//         <User rang={style ? "txtb" : "txtg"} />
//       </React.Fragment>
//     )
//   }
// }

// import React, { Component } from 'react';
// import "./App.css";
// import User from './User';
// export default class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1 className="txt">Hello App</h1>
//         <User />
//       </React.Fragment>
//     );
//   }
// }

// ------StylingComponentInlineStyle---------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     change: false
//   };
//   clickHandle = () => {
//     this.setState({change: true})
//   };
//   render() {
// const btnStyle = {
//   color: "blue",
//   backgroundColor: "pink"
// };
// if(this.state.change){
//   btnStyle.backgroundColor = "Red";
// }
    // const btnStyle = {
    //   color: "white",
    //   backgroundColor : "black"
    // };

    // const txtc = {
    //   color: "purple",
    // }
    // const txts = {
    //   fontSize: "150px"
    // }
    
      // <div>
      //   <button style={btnStyle}>Button</button>
      // </div>

      // return <h1 style={{...txtc, ...txts}}>Hello App</h1>
    
//       return (
//       <button onClick={this.clickHandle} style={btnStyle}>Button</button>
//       );
//   }
// }

// --------Key as a props--------------------------
// import React, { Component } from 'react'
// import User from './User';
// export default class App extends Component {
//   render() {
//     const arr = this.props.numbers;
//     const newArr = arr.map((num) => {
//       return <User key={num} value={num}/>
//     });
//     return (
//       <div>
//         <ul>{newArr}</ul>
//       </div>
//     );
//   }
// }

// key is a attribute but it not pass as a prop to the component


// -----------KeyInReactJS-------------------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     users: [
//       {id:101, name:"Utkarsh", password: "9795utk"},
//       {id:102, name:"Anand", password: "9895anan"},
//       {id:103, name:"Vivek", password: "9995viv"},
//     ],
//     isLoggedIn : false
//   }
//   render() {
//     const newUsers = this.state.users.map((user)=>{
//       console.log(user);
//       return (
//         <h1 key={user.id}>
//           ID: {user.id} Name: {user.name} Password: {user.password}</h1>
//     );
//     })
//     return <div>
//       {newUsers}
//     </div>
//   }
// }

// -----------state in map ------------------------

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     users: [
//       {id:101, name:"Utkarsh", password: "9795utk"},
//       {id:102, name:"Anand", password: "9895anan"},
//       {id:103, name:"Vivek", password: "9995viv"},
//     ],
//     isLoggedIn : false
//   }
//   render() {
//     const newUsers = this.state.users.map((user)=>{
//       console.log(user);
//       return <h1>ID: {user.id} Name: {user.name} Password: {user.password}</h1>
//     })
//     return <div>
//       {newUsers}
//     </div>
//   }
// }


// -----List in ReactJS----------------------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     const arr = this.props.numbers;
//     // const newArr = arr.map((num) => {
//     //   console.log(num)
//     //   return <li>{num*2}</li>
//     // });
//     // console.log(arr);
//     // console.log(newArr);
//     // return (
//     //   <ul>
//     //  {newArr}
//     //   </ul>
//     // )

// // embedding map in JSX
//    return (
//     <ul>
//       {
//         arr.map((num)=>{return <li>{num}</li>})
//       }
//     </ul>
//    )


//   }
// }



// ------IIFE--------------------------------------
// import React, { Component } from 'react'
// import User from './User'
// import Guest from './Guest'
// export default class App extends Component {
//   state = {
//     isLoggedIn: false
//   }

//   clickLogin = () => {
//     this.setState({isLoggedIn:true})
//   }

//   clickLogout = () => {
//     this.setState({isLoggedIn:false})
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         {( () => {
//          if(isLoggedIn){
//           return <User clickData={this.clickLogout}/> 
//          }else{
//           return <Guest clickData={this.clickLogin}/>
//          }
//        })()}
//       </div>
//     );
//   }
// }

// -----if else with conditional Operator-----------
// import React, { Component } from 'react'
// import User from './User'
// import Guest from './Guest'
// export default class App extends Component {
//   state = {
//     isLoggedIn: false
//   }

//   clickLogin = () => {
//     this.setState({isLoggedIn:true})
//   }

//   clickLogout = () => {
//     this.setState({isLoggedIn:false})
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         {isLoggedIn ? (<User clickData={this.clickLogout}/>) :( <Guest clickData={this.clickLogin}/>)}
//       </div>
//     )
//   }
// }



// ----if else-------------------------------------
// import React, { Component } from 'react'
// import User from './User'
// import Guest from './Guest'
// export default class App extends Component {
//   state = {
//     isLoggedIn: false
//   }

//   clickLogin = () => {
//     this.setState({isLoggedIn:true})
//   }

//   clickLogout = () => {
//     this.setState({isLoggedIn:false})
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     if(isLoggedIn){
//       return <User  clickData={this.clickLogout} />
//     }else{
//       return <Guest clickData={this.clickLogin}/>
//     }
//   }
// }




//---Inline if with logical && Operator------------
// import React, { Component } from 'react';
// import User from './User';
// export default class App extends Component {
//   render() {
//     const primeMember = this.props.primeMember
//     return (
//       <React.Fragment>
//         <h1>Welcome User</h1>
//         {primeMember && <User />}
//       </React.Fragment>
//     );
//   }
// }


// -----------Conditional Rendering in Reactjs-----
// import React, { Component } from 'react'
// import User from './User'
// import Guest from './Guest'
// export default class App extends Component {
//   render() {
//     const isRegistered = this.props.consumer;
//     if(isRegistered){
//     return <User />
//     }
//     return <Guest />
//   }
// }


//  ---------Custom Hook in Reactjs------------
// import React from 'react';
// import useCustomCounter from './custom';
// function App ()  {
//    const data =  useCustomCounter();
//    const data1 =  useCustomCounter();
//    return (
//     <React.Fragment>
//         <h1>Count Up: {data.count}</h1>
//         <button type="button" onClick={data.handleIncrement}>Increment</button>

//         <h1>Count Up: {data1.count}</h1>
//         <button type="button" onClick={data1.handleIncrement}>Increment</button>
//     </React.Fragment>
//    );
// }
// export default App;

// ----------useEffect hook in reactjs---------
// import React, {useState, useEffect} from 'react';
// function App (){
//    const [count,setCount] = useState(0);
//    const [count1,setCount1] = useState(50);
//    const handleIncrement = () => {
//     setCount(count+1);
//    }
//    const handleDecrement = () => {
//     setCount1(count1-1);
//    }
//    useEffect(()=>{
//     console.log("Use effect is called");
//    },[count]);
//    return (
//     <React.Fragment>
//         <h1>Count Up: {count}</h1>
//         <button type="button" onClick={handleIncrement}>Increment</button>

//         <h1>Count Down: {count1}</h1>
//         <button type="button" onClick={handleDecrement}>Decrement</button>
//     </React.Fragment>
//    );
// }
// export default App;


// ---------useState hook in ReactJS-------------
// import React, {useState} from 'react';
// function App () {
// //    const nameStateVariable =  useState("Utkarsh");
// const [name, setName] = useState("Utkarsh");
// const [roll, setRoll] = useState(102);
// //    const name = nameStateVariable[0];
// //    const setName = nameStateVariable[1];
//    const handleClick = () => {
//     setName("GeekyShows");
//     setRoll(105);
//    };

//     return ( 
//     <React.Fragment>
//  <h1>Name: {name}</h1>
//  <h2>Roll: {roll}</h2>
//  <button type="button" onClick={handleClick}>Change</button>
//     </React.Fragment>
//     );
// }
// export default App;

// --------Unmounting in ReactJS-----------------
// import React, { Component } from 'react'

// export default class App extends Component {
//     componentDidMount(){
//         console.log("App Mounted");
//     }
//     componentWillUnmount(){
//         console.log("App unmounted");
//     }
//   render() {
//     console.log("App Rendered");
//     return <h1> Hello App Component</h1>
//   }
// }


// --------Mounting in reactjs-----------------
// import React, { Component } from 'react';
// import Student from './Student';
// export default class App extends Component {
// constructor(props) {
//     super(props);
//     console.log("App constructor is called");
//     console.log(props);
//     this.state = {
//         roll : "105"
//     };
// }
// static getDerivedStateFromProps(props,state){
//     console.log("App - Get Derived State From Props");
//     console.log(props,state);
//     return null; 
// }
// componentDidMount(){
//     // Get Data from server and set the data to state
//     console.log("App componentdidmount is here")
// }

//   render() {
//     console.log("App is rendered here")
//     return (
//     <div>
//         <Student name="Vivek" />
//     </div>
//     );
//   }
// }

// import React from "react";
// import "./App.css";
// const el = <h1 className="bg">Hello</h1>;

// Simple String
// const el = <h1>Hello Vivek</h1>

// Math expression
// const el = <h1>{10+20}</h1>

// Variable
// const name = "Utkarsh";
// const el = <h1>Hello {name}</h1>

// Function
// function show(name){
//     return name;
// }
// const el = <h1>Hello {show("Shyam")}</h1>

// Property
// let user = {
//     firstname: "Utkarsh"
// };
// const el = <h1>Hello {user.firstname}</h1>

// export default el;


// --------------Compoisng Components-------
// import React from "react";
// import Student from "./Student";
// const App = () => {
//     return(
//         <div>
//             <Student name="Utkarsh" /> 
//             <Student name="Vivek"/> 
//             <Student name="Arth"/> 
            
//         </div>
//     );
// };
// here student is child component and app is parent component
// export default App;

// -------------React Fragment --------------
// import React, { Component, Fragment } from "react";


// class App extends Component{
//     render(){
//         return (
//     //    <Fragment>
//     //     <h1>Hello Geeky Shows</h1>
//     //     <h2>Hello World</h2>
//     //    </Fragment>
//     <>
//     <h1>Hello Geeky Shows</h1>
//     <h2>Hello World</h2>
//     </>
//         );
//     }
// }
// export default App;


// -----------YourFirstReactApp------------

// import React, {Component} from "react";

// class App extends Component {
//     render(){
//         return React.createElement("h1",null,"Hello Utkarsh Anand");
//     }
// }

// export default App;

// // Learning

// // let el = React.createElement("h1",null,"Hello Utkarsh Anand"); // written  in JSX babble will convert into react code i.e <h1>Hello Utkarsh Anand</h1> so both the code means to the same and above code will be onverted into the latter one

// React fragment is used for return of multiple things
