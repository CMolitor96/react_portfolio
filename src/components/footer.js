import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#212529',
        color: 'white',
        height: '4rem',
        padding: '1rem',
        fontFamily: 'helvetica',
        fontSize: '1.3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        padding: '1rem',
        cursor: 'pointer',
    }
}

function Footer({currentPage, setCurrentPage}) {
    return (
        <div style={styles.footer}>
            <div style={styles.icon}><FaGithub /></div>
            <div style={styles.icon} onClick={() => setCurrentPage('Contact')}><FaEnvelope /></div>
            <div style={styles.icon}><FaLinkedin /></div>
        </div>
    );
}

export default Footer;