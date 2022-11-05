import React from 'react';
import FitFood from '../images/FitFood.png';
import GOOL from '../images/Gool.png';
import DazeCam from '../images/Dazecam.png';
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

function Portfolio() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <div style={styles.container} className='container'>
            <div className='row'>
                <div className='col' style={styles.header}>
                    Portfolio
                </div>
            </div>
            <div style={styles.border} className='row justify-content-center align-items-center d-flex '>
                <div className='col-sm text-center p-3'>
                    <a href="https://cmolitor96.github.io/dazecamLanding/" target="_blank" rel="noreferrer"> 
                        <img src={DazeCam} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="Dazecam Landing Page" style={styles.image}/>
                    </a>
                </div>
                <div className='col-sm text-center p-3'>
                    <p>A prototype landing page for the ios app Dazecam, made by Darren Asaro. Sell your film camera. Throw away 
                       your disposable. Because with this app you’ll have the ability to create photos 
                       indistinguishable from real film through effects you will not find in any other app.
                       Grace your photos with smooth vintage pastel colors, dreamy glow, tasteful light leaks, 
                       and many other nostalgic visual garnishes to make them look like a lazy midsummer 
                       afternoon of 1976. It’s simple. It’s sleek. It’s powerful. It’s free. It's just begging 
                       to be downloaded. Feel free to check out @daze.cam on instagram. And if you haven't 
                       noticed - the old wave is the new wave.</p>
                </div>
            </div>

            <div style={styles.border} className='row justify-content-center align-items-center d-flex'>
            <div className='col-sm text-center p-3'>
                    <p>Fitfood is a web application that allows users to create customized meal and workout 
                       plans. Users will be able to access the Edamam API with over 2,000,000 recipes to 
                       create customized meal plans according to their dietary and workout needs. Options 
                       include calorie ranges, macronutrient targets, and special dietary restrictions
                       including vegetarians and vegans. Users will also be able to create customized workout 
                       plans tailored to specific muscle groups. Users will simply choose what muscle group 
                       they would like to train for that day and through an exercise API exercises will be 
                       displayed to the user with instructions on how to train.</p>
                </div>
                <div className='col-sm text-center p-3'>
                    <a href="https://kevinumayam.github.io/Fit-Food/" target="_blank" rel="noreferrer"> 
                        <img src={FitFood} alt="FitFood Landing Page" style={styles.image}/>
                    </a>
                </div>
            </div>

            <div style={styles.border} className='row justify-content-center align-items-center d-flex '>
                <div className='col-sm text-center p-3'>
                    <a href="https://secure-shore-30155.herokuapp.com/" target="_blank" rel="noreferrer"> 
                        <img src={GOOL} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="Gool! Landing Page" style={styles.image}/>
                    </a>
                </div>
                <div className='col-sm text-center p-3'>
                    <p>¡GOOOL! is a goals creator and tracker designed to streamline managing all of your goals 
                        and aspirations. Simply create a goal, add the necessary steps and todos to complete said 
                        goal, and come back to the site frequently to track and update your progress.
                        This project was created with a node Express back end and a Handlebars template engine 
                        front end. MySQL with Sequelize was used to create and update the database. </p>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;