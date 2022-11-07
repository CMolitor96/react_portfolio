import React from 'react';

const styles = {
    header: {
        textAlign: 'center',
        fontSize: '3rem',
        color: 'white',
    },
    container: {
        position: 'relative',
        minHeight: '100vh',
    },
    list: {
        color: 'white',
    },
}

function Resume() {
    const download = () => {
        fetch('UpdatedResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'UpdatedResume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="container" style={styles.container}>
            <div className="row">
                <div className="col" style={styles.header}>
                    Resume
                </div>
            </div>
            <div className='row'>
                <div className='col' style={styles.list}>
                    <h1>Proficiencies:</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>React</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Git</li>
                        <li>Jest</li>
                        <li>California Burrito Enthusiast</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <button className="btn btn-primary" onClick={download}>Download Resume</button>
                </div>
            </div>
        </div>
    );
}

export default Resume;