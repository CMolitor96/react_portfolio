import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMountain } from "react-icons/fa";


const styles = {
    footer: {
        bottom: 0,
        width: '100%',
        backgroundColor: '#212529',
        color: 'white',
        height: '4rem',
        fontFamily: 'helvetica',
        fontSize: '1.3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
    },
    icon: {
        padding: '1rem',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
}

function Footer({currentPage, setCurrentPage}) {
    const github = () => {
        window.open('https://github.com/CMolitor96', '_blank');
    }
    const linkedin = () => {
        window.open('https://www.linkedin.com/in/charles-molitor-725703119', '_blank');
    }
    const mountainProject = () => {
        window.open('https://www.mountainproject.com/user/200675695/charlie-molitor', '_blank');
    }

    return (
        <div style={styles.footer}>
            <div style={styles.icon} onClick={github}><FaGithub /></div>
            <div style={styles.icon} onClick={() => setCurrentPage('Contact')}><FaEnvelope /></div>
            <div style={styles.icon} onClick={linkedin}><FaLinkedin /></div>
            <div style={styles.icon} onClick={mountainProject}><FaMountain /></div>
            <a  style={styles.link} href="https://www.mountainproject.com/user/200675695/charlie-molitor" target="_blank" rel="noreferrer">
                <div style={styles.icon} ><FaMountain /></div>
            </a>
        </div>
    );
}

export default Footer;