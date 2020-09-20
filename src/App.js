import React, { Component } from 'react'
import './App.css';

// *** Treact Things
// import "style.css"
import "tailwindcss/dist/base.css"

import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./treeponents/hero/BackgroundAsImage"
import Features from './treeponents/features/TwoColWithSteps'
import Summary from './treeponents/features/ThreeColWithSideImage'

import Footer from './treeponents/footers/MiniCenteredFooter'
// ****

// import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Login from './components/Login'
// import Register from './components/Register'

// import ProjectsList from './components/ProjectsList'
// import Projectform from './components/Project_form';
// import Update from './components/Update';
// import ProjectDetails from './components/ProjectDetailPage';

class App extends Component {
  render() {
    
    return (
      <AnimationRevealPage disabled >
        <Hero />
        <Features/>
        <Summary/>
        <Footer/>
      </AnimationRevealPage>
    )

    // return (

    //   <Router>
    //     <div className="App">
    //       <Navbar />

    //       <Route exact path="/" component={Home} />

    //       <div className="container">
    //         <Route exact path="/register" component={Register} />
    //         <Route exact path="/login" component={Login} />
    //         <Route path="/dashboard" component={ProjectsList} />
    //         <Route path="/project" component={ProjectDetails} />
    //         <Route path="/update" component={Update} />
    //         <Route exact path="/form" component={Projectform} />
    //       </div>

    //     </div>

    //   </Router>

    // )

  }
}

export default App

