import React, { useState, Component } from 'react'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeTree from './pages/Home/Home.jsx'
import SignUpTree from './pages/SignUp/SignUp.jsx'
import LoginTree from './pages/Login/Login.jsx'

import Navbar from './components/Navbar'
// import Home from './components/Home'
import NavbarTree from './components/navbartree/navbar'

import ProjectsList from './components/ProjectsList'
import Projectform from './components/Project_form';
import Update from './components/Update';
import ProjectDetails from './components/ProjectDetailPage';

const App = () => {

  const [user, setUser] = useState(true)

  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken');
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserName');

    setUser(false)

    // this.props.history.push(`/login`)
  }

  return (

    <Router>

      {/* <Route exact path="/" component={HomeTree} /> */}

      {/* <StyledHeader links={navLinks} /> */}

      <div className="container">
      <NavbarTree logOut={logOut}/>
        {/* <Navbar /> */}

        <Route exact path="/signup" component={SignUpTree} />
        <Route exact path="/login" component={LoginTree} />
        {/* <Route exact path="/login" component={Login} /> */}

        <Route path="/dashboard" component={ProjectsList} />
        <Route path="/project" component={ProjectDetails} />
        <Route path="/update" component={Update} />
        <Route exact path="/form" component={Projectform} />

      </div>

    </Router>

  );
};

// class App extends Component {
//   render() {

//     return (

//       <Router>

//         <div className="App">
//           <Navbar />

//           <Route exact path="/" component={Home} />

//           <div className="container">
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/login" component={Login} />
//             <Route path="/dashboard" component={ProjectsList} />
//             <Route path="/project" component={ProjectDetails} />
//             <Route path="/update" component={Update} />
//             <Route exact path="/form" component={Projectform} />
//           </div>

//         </div>

//       </Router>

//     )

//   }
// }

export default App

