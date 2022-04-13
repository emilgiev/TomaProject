import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from 'react-router-dom';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import React, { useState } from 'react'
import firebase from '../src/firebase';


function App() {

  const [username, setUsername] = useState('')

  return (
    <Routes>
      <Route>
        <Route exact path="/" element={<LandingPage setUsername={setUsername} />}></Route>
        <Route exact path="/homepage" element={<HomeScreen username={username} />}></Route>
      </Route>
    </Routes>
  );
}


export default App;

