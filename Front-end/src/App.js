import React from 'react';
import './App.css'
import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SplTour from './components/SplTour'
import Photos from './components/Photos'
import MyBooking from './components/MyBooking'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="app-content">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route excat path="/register" component={RegisterForm} />
            <Route exact path="/search" component={Home} />
          
            <Route excat path="/spltour" component={SplTour} />
            <Route excat path="/photos" component={Photos} />
            <Route excat path="/mybooking" component={MyBooking} />
          </Switch>
        </Router>
      </div>
    </div>

  );
}

export default App;
