import React, { useState } from 'react';
import './LandingPage.css';
import logo from '../images/LOGO-TOP-1.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from 'react-bootstrap/Button';


function LandingPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorModal, setShow] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();


    async function preventDefault(e) {
        e.preventDefault();
        console.log(email, password)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential.user)
            console.log('Authorized')
            navigate('/homepage')
            const username = props.setUsername(email)

        } catch (err) {
            setShow(true);
            console.error(err);
            console.log('Not Authorized')
            console.log(showErrorModal)
        }
    }

    function handleClose() {
        setShow(false)
    }

    return (
        <div className='wrapper'>
            <form>
                <h3>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Sigh up with email" id="username" onChange={(e) => setEmail(e.target.value)} ></input>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className='button' type="submit" onClick={preventDefault} >Log In</button>
                {showErrorModal ? <Modal show={showErrorModal} onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
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