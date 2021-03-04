import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from './App-Styles.jsx'

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'

import ProtectedRoute from './util/ProtectedRoute'
// import PageNotFound from './pages/pagenotfoundoriginal/pagenotfound.jsx'
import PageNotFound from './pages/pagenotfound/pagenotfound.jsx'

import NavbarTree from './components/navbartree/navbar'
import HomeTree from './pages/home/homepage'
import SignUpTree from './pages/signup/signup.jsx'
import LoginTree from './pages/login/login.jsx'
import AddProjectForm from './pages/addproject/add-project'

import ProjectsList from './components/project-components/ProjectsList/ProjectsList'
import ProjectStation from './pages/projectstation/ProjectStation'

import AuthContext from './shared/context/auth-context'

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

  }

  return (

    <Router>

      <Container className="AppContainer" >

        {/* <StyledHeader links={navLinks} /> */}

        <AuthContext.Provider value={{
          secret: 'Context working!',
          userSignedIn: userSignedIn,
          login: login,
          logOut: logOut
        }}>

          {/* Persist Navbar */}
          <NavbarTree logOut={logOut} />

          <Switch>

            <ProtectedRoute exact path="/form" component={AddProjectForm} ></ProtectedRoute>

            <Route exact path="/" component={() => <HomeTree login={login} logOut={logOut} />} />
            <Route exact path="/signup" component={SignUpTree} />
            <Route exact path="/login" component={LoginTree} />

            <Route path="/dashboard" component={ProjectsList} />
            {/* <Route exact path="/form" component={AddProjectForm} /> */}
            <Route path="/project/:projectId" component={ProjectStation} />

            <Route component={PageNotFound} />

          </Switch>

        </AuthContext.Provider>

      </Container>

    </Router>

  );
};

export default App

