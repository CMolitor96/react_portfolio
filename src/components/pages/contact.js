import React, { useState } from 'react';

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
    label: {
        color: 'white',
        fontSize: '2rem',
    },
}

function Contact() {
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    const inputRequired = (e) => {
        setName(e.target.value);
        if (name.length === 0) {
            console.log(e.target.id);
            alert(`${e.target.id} is a required field!`);
        }
    };





    return (
        <div className="container" style={styles.container}>
            <div className="row">
                <div className="col" style={styles.header}>
                    Contact Me
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label style={styles.label}>Enter name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onBlur={inputRequired}/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <form>
                        <div className="form-group">
                            <label style={styles.label}>Enter email</label>
                            <input type="email" className="form-control" id="email "aria-describedby="emailHelp" onBlur={inputRequired}/>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form>
                        <div className="form-group">
                            <label style={styles.label}>Enter message</label>
                            <textarea className="form-control" id="message" rows="3" onBlur={inputRequired}></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;