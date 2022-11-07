import React from 'react';
import { useState } from 'react';

const styles = {
    header: {
        textAlign: 'center',
        fontSize: '3rem',
        color: 'white',
    },
    image: {
        height: '15rem',
        width: '15rem',
        borderStyle: 'solid',
        borderRadius: '1rem',
        boxShadow: '.25rem .5rem'
    },
    link: {
        height: '15rem',
        width: '15rem',
    },
    border: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '.25rem',
        borderRadius: '4rem',
        backgroundColor: 'lightblue',
        margin: '1rem',
    },
    container: {
        position: 'relative',
        minHeight: '100vh',
    },
    button: {
        margin: '.5rem',
    }
}

function IndividualProject({href, imgSrc, imgAlt, pTag, github}) {
    // eslint-disable-next-line
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <div>
            <div style={styles.border} className='row justify-content-center align-items-center d-flex '>
                <div className='col-sm text-center p-3'>
                    <a href={href} target="_blank" rel="noreferrer"> 
                        <img src={imgSrc} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt={imgAlt} style={styles.image}/>
                    </a>
                </div>
                <div className='col-sm text-center p-3'>
                    <p>{pTag}</p>
                        <a href={github} target="_blank" rel="noreferrer">
                            <button style={styles.button} className="btn btn-primary">Check out this repo on my GitHub!</button>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default IndividualProject;