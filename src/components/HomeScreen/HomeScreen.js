import React, { useEffect, useState } from "react";
import Card from "../ContainerComponent/Card";
import Quotes from "../QuotesComponent/Quotes";
import SidePanel from "../SidePanel/SidePanel";
import styles from './HomeScreen.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDatabase, ref, onValue } from "firebase/database";
import { db, firebase } from '../../firebase';
import 'firebase/compat/auth';



const HomeScreen = (props) => {

    const [loadedData, setLoadedData] = useState([]);
    const [checkCurrentRole, setCurrentRole] = useState(false);
    const username = props.email.substring(0, props.email.indexOf('@'))
    console.log(username)

    useEffect(() => {
        // readData();
    }, [])








    // async function readData() {
    //     db.collection('Users').get().then((querySnapshot) => {
    //         querySnapshot.forEach(element => {
    //             const incomingData = element.data();
    //             setLoadedData(incomingData)        
    //         })
    //     })
    // }

    // async function readData() {
    //     const db = firebase.firestore();
    //     const data = await db.collection("Users").get();
    //     let result = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    //     result.filter()
    // }




    return (
        <div className={styles['wrapper']}>
            <Container className={styles['wrapping-container']} >
                <h2 className={styles['Login-user-class-paragraph']}> Welcome {username}!</h2>
                <Row>
                    <Col md={2}>
                        <Container>
                            <SidePanel />
                        </Container>
                    </Col>
                    <Col md={10}>
                        <Container>
                            <Row>
                                <Col md={3} className={styles['set-row-padding']}>
                                    <Card />
                                </Col>
                                <Col md={3} className={styles['set-row-padding']}>
                                    <Card />
                                </Col>
                                <Col md={3} className={styles['set-row-padding']}>
                                    <Card />
                                </Col>
                                <Col md={3} className={styles['set-row-padding']}>
                                    <Card />
                                </Col>
                            </Row>
                            <Row>
                                <Quotes />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default HomeScreen;
