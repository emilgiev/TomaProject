import React, { useState , useRef} from 'react';
import './LandingPage.css';
import logo from '../images/LOGO-TOP-1.png';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

function LandingPage(props) {

    const [showErrorModal, setShow] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    function sumbitForm(e) {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNBAxjeKNoAPPjBV0JW4vZ0QaTaOx9-L4';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.ok) {
                
                navigate('/homepage')
            } else {
                setShow(true);
            }
            return res.json()
        }).then((data) =>
            console.log(data))
    }

    function handleClose() {
        setShow(false)
    }

    return (
        <div className='wrapper'>
            <form onSubmit={sumbitForm}>
                <h3>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Sigh up with email" id="username" ref={emailInputRef} ></input>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" ref={passwordInputRef}></input>
                <button className='button' type="submit" typeof='submit' >Log In</button>
                {showErrorModal ? <Modal show={showErrorModal} onHide={handleClose}
                    backdrop="static">
                    <Modal.Header>
                        <Modal.Title>Incorrect Username/Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please provide the correct credentials
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : null}
                <div className='landingpage-logo'>
                    <img src={logo} className="landingpage-logo"></img>
                </div>
            </form>
        </div>
    )
}

export default LandingPage;