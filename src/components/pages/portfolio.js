import React from 'react';
import FitFood from '../images/FitFood.png';
import GOOL from '../images/Gool.png';
import DazeCam from '../images/Dazecam.png';
import Jate from '../images/jate.png';
import NoteTaker from '../images/NoteTaker.png';
import IndividualProject from './individualProject';

const styles = {
    header: {
        textAlign: 'center',
        fontSize: '3rem',
        color: 'white',
    },
    container: {
        position: 'relative',
        minHeight: '100vh',
    }
}


const dazeCamPTag = `A prototype landing page for the ios app Dazecam, made by Darren Asaro. Landing 
page is a front end only HTML5 and CSS single page application with JavaScript powering the animation 
and buttons.Sell your film camera. Throw away your disposable. Because with this app you’ll have the 
ability to create photos indistinguishable from real film through effects you will not find in any 
other app. Grace your photos with smooth vintage pastel colors, dreamy glow, tasteful light leaks, 
and many other nostalgic visual garnishes to make them look like a lazy midsummer afternoon of 1976.`;

const fitFoodPTag = `Fitfood is a web application that allows users to create customized meal and workout 
plans. Users will be able to access the Edamam API with over 2,000,000 recipes to 
create customized meal plans according to their dietary and workout needs. Options 
include calorie ranges, macronutrient targets, and special dietary restrictions
including vegetarians and vegans. Users will also be able to create customized workout 
plans tailored to specific muscle groups. Users will simply choose what muscle group 
they would like to train for that day and through an exercise API exercises will be 
displayed to the user with instructions on how to train.`;

const goolPTag = `¡GOOOL! is a goals creator and tracker designed to streamline managing all of your goals 
and aspirations. Simply create a goal, add the necessary steps and todos to complete said 
goal, and come back to the site frequently to track and update your progress.
This project was created with a node Express back end and a Handlebars template engine 
front end. MySQL with Sequelize was used to create and update the database.`;

const jatePTag = `JATE or Just Another Text Editor is a web based text editor that was created as 
a progressive web application, so it can be downloaded and used offline. JATE is built with webpack 
bundler, workbox service worker, and an express back end. Writing code in JATE is stored both online 
and off in both local storage and indexDB storage, so you never have to worry about losing precious code.`;

const noteTakerPTag = `Note Taker is a web application that allows users to create and delete notes 
that are stored on a server. Note Taker accomplishes this by having an interactive user interface to 
create the notes, which when saved are then stored on a JSON file via a back end node script. Creating 
new notes appends them to the JSON file, and deleting notes removes them from the file. Note Taker
uses Node.js, Express.js, and the fs package to read and write to the saved JSON file.`;

const slidePTag = `Slide is a social media API that allows users to create an account, post thoughts, 
find friends, and react to friends thoughts. This is a stricly back end project built with Node and 
Express, and MongoDB with the Mongoose library for the database. Please note the logo link will take you
to a walkthrough video on google drive.`;

const dazecamProject = {
    href: "https://cmolitor96.github.io/dazecamLanding/",
    imgSrc: DazeCam,
    imgAlt: "Dazecam Landing Page",
    pTag: dazeCamPTag,
    github: "https://github.com/CMolitor96/dazecamLanding",
};

const fitfoodProject = {
    href: "https://kevinumayam.github.io/Fit-Food/",
    imgSrc: FitFood,
    imgAlt: "FitFood Landing Page",
    pTag: fitFoodPTag,
    github: "https://github.com/KevinUmayam/Fit-Food",
};

const goolProject = {
    href: "https://secure-shore-30155.herokuapp.com/",
    imgSrc: GOOL,
    imgAlt: "Gool! Landing Page",
    pTag: goolPTag,
    github: "https://github.com/kentshaffer/Project-2",
};

const jateProject = {
    href: "https://bloodcurdling-flesh-12385.herokuapp.com/",
    imgSrc: Jate,
    imgAlt: "Jate logo",
    pTag: jatePTag,
    github: "https://github.com/CMolitor96/JATE",
};

const noteProject = {
    href: "https://safe-shelf-23641.herokuapp.com/",
    imgSrc: NoteTaker,
    imgAlt: "Note Taker Landing Page",
    pTag: noteTakerPTag,
    github: "https://github.com/CMolitor96/Note_Taker"
};

const slideProject = {
    href: "https://drive.google.com/file/d/1gtDgPA4QEM3Sk1J-GhmdKXcytUN-JKqO/view?usp=sharing",
    imgSrc: Jate,
    imgAlt: "Slide logo, the word slide in cursive font",
    pTag: slidePTag,
    github: "https://github.com/CMolitor96/Slide",
};

function Portfolio() {

    return (
        <div style={styles.container} className='container'>
            <div className='row'>
                <div className='col' style={styles.header}>
                    Portfolio
                </div>
            </div>
            <IndividualProject {...dazecamProject}/>
            <IndividualProject {...fitfoodProject}/>
            <IndividualProject {...goolProject}/>
            <IndividualProject {...jateProject}/>
            <IndividualProject {...noteProject}/>
            <IndividualProject {...slideProject}/>
        </div>
    );
}

export default Portfolio;