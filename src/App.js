import React, { useState } from 'react'
// import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Container} from './App-Styles.jsx'

// import Home from './components/Home'
import NavbarTree from './components/navbartree/navbar'
import HomeTree from './pages/Home/Home.jsx'
import SignUpTree from './pages/SignUp/SignUp.jsx'
import LoginTree from './pages/Login/Login.jsx'
import ProjectFormTree from './components/project-components/ProjectForm/ProjectForm'
import ProjectsList from './components/project-components/ProjectsList/ProjectsList'
import ProjectStation from './pages/ProjectStation/ProjectStation'



// Old
// import Navbar from './components/Navbar'
// import ProjectsList from './components/ProjectsList'
// import Projectform from './components/Project_form';
// import ProjectDetails from './components/ProjectDetailPage';
// import Update from './components/Update';

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

  const login = (thing) => {
    console.log(thing)
    setUser(true)
  }


  return (

    <Router>

      {/* <Container><Route exact path="/" component={HomeTree} /> */}
      <Route exact path="/" component={() => <HomeTree login={login} logOut={logOut} />} />

      {/* <StyledHeader links={navLinks} /> */}

      <div className="container">

    
        {/* ***************************** */}

        <NavbarTree logOut={logOut} />

        <Route exact path="/signup" component={SignUpTree} />
        <Route exact path="/login" component={() => <LoginTree login={login} />} />
        <Route exact path="/form" component={ProjectFormTree} />
        <Route path="/dashboard" component={ProjectsList} />
        <Route path="/project/:projectId" component={ProjectStation} />

        {/* <Route exact path="/login" component={Login} /> */}

        {/* ***************************** */}


        {/* <Route path="/dashboard" component={ProjectsList} /> */}
        {/* <Route path="/project/:projectId" component={ProjectDetails} /> */}

        {/* <Route path="/update" component={Update} /> */}
        {/* <Route exact path="/form" component={Projectform} /> */}

      </div>
      
      {/* </Container> */}

      

    </Router>

  );
};

export default App

