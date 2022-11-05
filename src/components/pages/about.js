import React from 'react';
import Charlie from '../images/charlie.jpeg';

const styles = {
    header: {
        textAlign: 'center',
        fontSize: '3rem',
        color: 'white'
    },
    p: {
        color: 'white',
    },
    image: {
        height: '15rem',
        width: '15rem',
    },
    container: {
        position: 'relative',
        minHeight: '100vh',
    }
}


function About() {
    return (
       <div style={styles.container} className='container'>
        <div className='row'>
            <div className='col' style={styles.header}>
                About Me
            </div>
        </div>
        <div className='row justify-content-center align-items-center d-flex'>
            <div className='col-sm text-center'>
                <img src={Charlie} className='rounded-circle shadow-lg' alt="Headshot of Charles Molitor" style={styles.image}/>
            </div>
            <div className='col-sm p-3' style={styles.p}>
                <p>My name is Charles Molitor. I am pursuing a software developr role in San Diego, California, where I 
                am based. I am currently enrolled in the full stack developer bootcamp at UCSD with a graduation date of 
                November 2022. In my freetime I enjoy rock climbing and surfing.
                </p>
            </div>
        </div>
       </div>
    );
}

export default About;

