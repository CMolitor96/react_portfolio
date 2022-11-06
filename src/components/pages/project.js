import React from 'react';
import { useState } from 'react';

//Need to pass in a href, img src, img alt, and p tag
const styles = {
    header: {
        textAlign: 'center',
        fontSize: '3rem',
        color: 'white',
    },
    image: {
        height: '15rem',
        width: '15rem',
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
    }
}

function Project({href, imgSrc, imgAlt, pTag}) {
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
                </div>
            </div>
        </div>
    );
}

export default Project;