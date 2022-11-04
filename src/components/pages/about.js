import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Charlie from '../images/charlie.jpeg';

const styles = {
    image: {
        height: '15rem',
        width: '15rem',
    }
}


function About() {
    return (
        <Container fluid>
            <Row>
                <Col style={{textAlign: 'center', fontSize: '3rem'}}>About Me</Col> 
            </Row>
            <Row className="justify-content-center">
                <Col className="col">
                    <img src={Charlie} alt="Headshot of Charles Molitor" style={styles.image}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
            <Col className="col">
                    <p>My name is Charles Molitor. I am pursuing a software developr role in San Diego, California, where I 
                        am based. I am currently enrolled in the full stack developer bootcamp at UCSD with a graduation date of 
                        November 2022. In my freetime I enjoy rock climbing and surfing.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;