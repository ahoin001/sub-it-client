import React, { Component } from 'react'
import './App.css';

// *** Treact Things
// import "style.css"
// import "tailwindcss/dist/base.css"

// import AnimationRevealPage from "./helpers/AnimationRevealPage"
// import Hero from "./treeponents/hero/BackgroundAsImage"
// import Features from './treeponents/features/TwoColWithSteps'
// import Summary from './treeponents/features/ThreeColWithSideImage'

// import Footer from './treeponents/footers/MiniCenteredFooter'
// ****

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeTree from './pages/Home/Home.jsx'
import SignUpTree from './pages/SignUp/SignUp.jsx'
import LoginTree from './pages/Login/Login.jsx'




import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

import ProjectsList from './components/ProjectsList'
import Projectform from './components/Project_form';
import Update from './components/Update';
import ProjectDetails from './components/ProjectDetailPage';

const App = () => {
  return (

    <Router>

      <Route exact path="/" component={HomeTree} />

      <div className="container">
        <Route exact path="/signup" component={SignUpTree} />
        <Route exact path="/login" component={LoginTree} />
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

