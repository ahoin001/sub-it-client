import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import './App.css';
// import { Container } from './App-Styles.jsx'

import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'

// import Home from './components/Home'
import NavbarTree from './components/navbartree/navbar'
import HomeTree from './pages/Home/Home.jsx'
import SignUpTree from './pages/SignUp/SignUp.jsx'
import LoginTree from './pages/Login/Login.jsx'
import ProjectFormTree from './components/project-components/ProjectForm/ProjectForm'
import ProjectsList from './components/project-components/ProjectsList/ProjectsList'
import ProjectStation from './pages/ProjectStation/ProjectStation'

import AuthContext from './shared/context/auth-context'

// Old
// import Navbar from './components/Navbar'
// import ProjectsList from './components/ProjectsList'
// import Projectform from './components/Project_form';
// import ProjectDetails from './components/ProjectDetailPage';
// import Update from './components/Update';

const App = () => {

  const [userSignedIn, setUserSignedIn] = useState(false)

  // ! Make this use token or localstorage info to auto login
  useEffect(() => {
    console.log('USER RELOGGED IN')
    if (localStorage.getItem('currentUserId')) {
        setUserSignedIn(true)
    }

  }, [])

  let history = useHistory();

  const logOut = () => {

    console.log('About to logout user (Check LocaleStorage)')

    localStorage.removeItem('currentUserName');
    localStorage.removeItem('userId');
    localStorage.removeItem('currentUserId');

    history.push(`/login`)

    setUserSignedIn(false)

  }

  const login = (userInfo) => {
    return axios
      // .post(`${process.env.REACT_APP_API_URL}/login`, {
      .post(`http://localhost:8000/users/login`, {
        userName: userInfo.userName,
        email: userInfo.email,
        password: userInfo.password
      })
      .then(response => {

        // The Logged In User Data
        console.log(`RESPONSE ON LOGIN BACKEND: `, response)
        console.log(`RESPONSE ON LOGIN BACKEND: `, response.data.LoggedInUser)

        // Set User data to localstorage to keep track of user
        localStorage.setItem('userId', response.data.LoggedInUser.id);
        // Might Use context instead but for now it's okay
        localStorage.setItem('currentUserId', response.data.LoggedInUser.id);
        localStorage.setItem('currentUserName', response.data.LoggedInUser.email);

        console.log('SETTING USER TO TRUE AT APP LEVEL COMPONENT')
        setUserSignedIn(true)

        return response.data.LoggedInUser

      })
      .catch(err => {
        console.log('ERROR FROM Login')
        console.log(err)
      })

  }


  return (

    <Router>

      {/* <Container>*/}

      {/* <Route exact path="/" component={HomeTree} /> */}
      {/* <Route exact path="/" component={() => <HomeTree login={login} logOut={logOut} />} /> */}

      {/* <StyledHeader links={navLinks} /> */}

      <AuthContext.Provider value={{
        secret: 'Context working!',
        userSignedIn: userSignedIn,
        login: login,
        logOut: logOut
      }}>

        <div className="container">

          <Route exact path="/" component={() => <HomeTree login={login} logOut={logOut} />} />

          <NavbarTree logOut={logOut} />

          <Route exact path="/signup" component={SignUpTree} />
          <Route exact path="/login" component={LoginTree} />

          {/* <Route exact path="/login" component={() => <LoginTree login={login} />} /> */}

          <Route exact path="/form" component={ProjectFormTree} />
          <Route path="/dashboard" component={ProjectsList} />
          <Route path="/project/:projectId" component={ProjectStation} />

        </div>

      </AuthContext.Provider>

      {/* </Container> */}

    </Router>

  );
};

export default App

