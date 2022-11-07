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

    return (
        <div style={styles.footer}>
            <a style={styles.link}  href="https://github.com/CMolitor96" target="_blank" rel="noreferrer">
                <div style={styles.icon}><FaGithub /></div>
            </a>
            <div style={styles.icon} onClick={() => setCurrentPage('Contact')}><FaEnvelope /></div>
            <a style={styles.link} href="https://www.linkedin.com/in/charles-molitor-725703119" target="_blank" rel="noreferrer">
                <div style={styles.icon}><FaLinkedin /></div>
            </a>
            <a  style={styles.link} href="https://www.mountainproject.com/user/200675695/charlie-molitor" target="_blank" rel="noreferrer">
                <div style={styles.icon} ><FaMountain /></div>
            </a>
        </div>
    );
}

export default Footer;