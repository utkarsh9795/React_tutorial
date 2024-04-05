// ------StrictModeInReactJS----------------------
import React, { Component } from 'react'

export default class User extends Component {
  componentDidMount (){
    console.log("User Component Will Mount");
  }
  render() {
    return <h1>Hello GeekyShows</h1>
  }
}


// -----------ContextType-------------------------
// import React, { Component } from 'react'
// import Guest from './Guest';
// export default class User extends Component {
//   render() {
//     return (
//       <div>
//        <h3>User Component</h3> 
//        <Guest />
//       </div>
//     )
//   }
// }

// --------ContextAPI in reactjs------------------
// import React, { Component } from 'react'
// import Guest from './Guest';
// export default class User extends Component {
//   render() {
//     return (
//       <div>
//        <h3>User Component</h3> 
//        <Guest />
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import Guest from './Guest';
// export default class User extends Component {
//   render() {
//     return (
//       <div>
//         <h3>User Component</h3>
//         <Guest nm={this.props.name} />
//       </div>
//     )
//   }
// }


// -----LiftingStateUp----------------------------
// import React, { Component } from 'react';

// export default class User extends Component {
//   render() {
//     return <div>{this.props.num1 + 10}</div>;
//   }
// }

// ------StylingComponentCSSModule------------------
// import React, { Component } from 'react'
// import Styles from "./User.module.css";
// export default class User extends Component {
//   render() {
//     return <h2 className={Styles.txt}>Hello Users</h2>;
//   }
// }

// ------StylingComponentExternalStylesheet--------
// import React, { Component } from 'react'
// export default class User extends Component {
//   render() {
//     return <h2 className={this.props.rang}>Hello User</h2>;
//   }
// }

// import React, { Component } from 'react'
// // import "./user.css";
// export default class User extends Component {
//   render() {
//     return <h2 className="txt1">Hello Users</h2>;
//   }
// }

// --------Key as a props--------------------------
// import React, { Component } from 'react';

// export default class User extends Component {
//   render() {
//     return <li>{this.props.value}</li>
//   }
// }


// ----if else-------------------------------------
// import React, { Component } from 'react'

// export default class User extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Welcome Utkarsh</h1>
//         <button onClick={this.props.clickData}>Logout</button>
//       </React.Fragment>
//     )
//   }
// }


// ---Inline if with logical && Operator------------
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return <h3>Prime Member</h3>;
    
//   }
// }

// -----------Conditional Rendering in Reactjs-----
// import React, { Component } from 'react'

// export default class User extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome Utkarsh</h1>
//         <button>Logout</button>
//       </div>
//     )
//   }
// }
