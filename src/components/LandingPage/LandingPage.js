import React, { useState, } from "react";
import './LandingPage.css';
import logo from '../images/LOGO-TOP-1.png';
import { BrowserRouter as Router } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function LandingPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    async function preventDefault(e) {
        e.preventDefault();
        console.log(email, password)
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential.user)
    }

    return (
        <Router>
            <div className='wrapper'>
                <form>
                    <h3>Login Here</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Sigh up with email" id="username" onChange={(e) => setEmail(e.target.value)} ></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <button className='button' type="submit" onClick={preventDefault} >Log In</button>
                    <div className='landingpage-logo'>
                        <img src={logo} className="landingpage-logo"></img>
                    </div>
                </form>
            </div>
        </Router>


    )
}

export default LandingPage;