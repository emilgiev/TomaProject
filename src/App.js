import LandingPage from "./components/LandingPage/LandingPage";
import { Routes, Route } from 'react-router-dom';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import React, { useState } from 'react'


function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState('')


  return (
    <Routes>
      <Route>
        <Route exact path="/" element={<LandingPage setUsername={setUsername} email={email} setEmail={setEmail} />}></Route>
        <Route exact path="/homepage" element={<HomeScreen email={email} />}></Route>
      </Route>
    </Routes>
  );
}


export default App;

