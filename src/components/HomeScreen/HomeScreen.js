import React from "react";
import Card from "../ContainerComponent/Card";
import Quotes from "../QuotesComponent/Quotes";
import SidePanel from "../SidePanel/SidePanel";
import styles from './HomeScreen.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomeScreen = () => {

    return (

        <Container className={styles['wrapping-container']} >
            <p className={styles['Login-user-class-paragraph']}> Welcome User!</p>
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
                            <Quotes/>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}

export default HomeScreen;
