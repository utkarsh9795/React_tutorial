// -----------ContextType-------------------------
import React, { Component } from 'react'
import { MyContext } from './context'
export default class Guest extends Component {
  static contextType = MyContext;
  componentDidMount = () => {
    console.log(this.context)
;  }
  
  render() {
  //  console.log(this.context)
  const {name,value} = this.context.data;
    return (
      <div>
        <h3>Guest Component</h3>
            <h4>
            Name: {name} Value: {value}
            </h4>
           <button onClick={this.context.handleClick}>Change Value</button>
            </div>
           );
  }
}



// --------ContextAPI in reactjs------------------
// import React, { Component } from 'react'
// // import { MyContext } from './App';
// import { Consumer } from './context';
// export default class Guest extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <Consumer>
//            {({data,handleClick}) =>(
//             <div>
//             <h4>
//             Name: {data.name} Value:{data.value}
//             </h4>
//            <button onClick={handleClick}>Change Value</button>
//             </div>
//            )} 
//         </Consumer>
//       </div>
//     );
//   }
// }



// import React, { Component } from 'react'

// export default class Guest extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <h4>{this.props.nm}</h4>
//       </div>
//     )
//   }
// }


// -----LiftingStateUp----------------------------
// import React, { Component } from 'react'

// export default class Guest extends Component {
//   render() {
//     return(
// <div>
//     <h1>{this.props.num2 * 10}</h1>
//     </div>
//     ); 
//   }
// }


// ----if else-------------------------------------
// import React, { Component } from 'react'

// export default class Guest extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Welcome Guest</h1>
//         <button onClick={this.props.clickData}>Login</button>
//         <button>SignUp</button>
//       </React.Fragment>
//     )
//   }
// }


// -----------Conditional Rendering in Reactjs-----
// import React, { Component } from 'react'

// export default class Guest extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome Guest</h1>
//         <button>Login</button>
//         <button>SignUp</button>
//       </div>
//     )
//   }
// }
