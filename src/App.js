import LandingPage from "./components/LandingPage/LandingPage";
import { Route } from 'react-router-dom';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from '../src/firebase';


function App() {


  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/homepage">
        <HomeScreen />
      </Route>
    </Router>
  );
}

export default App;

