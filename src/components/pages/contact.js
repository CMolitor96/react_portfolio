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
    error: {
        color: 'white',
        fontSize: '2rem',
    }
}

function Contact() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState(false);

    const forLater = () => {
        alert('Button functionality will be added later');
    };

    const regexEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        return regex.test(String(email));
    };
    const validateEmail = (e) => {
        let email = e.target.value;
        if (!email) {
            setError('Email is required');
            return;
        }
        else if (!regexEmail(email)) {
            setEmailError(true);
            setError('Invalid Email Format');
            return;
        } else {
            setEmailError(false);
            setError('');
        }
    };

    const inputRequired = (e) => {
        let value = e.target.value;
        if (!value) {
            setError(`${e.target.id} is required`);
            return;
        } else {
            setError('');
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
                            <input type="email" className="form-control" id="email "aria-describedby="emailHelp" onBlur={validateEmail}/>
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

            {(error || emailError) && (
                <div>
                    <p className="text-danger" style={styles.error}>{error}</p>
                </div>)}

            <br></br>
            <div className='row'>
                <div className='col'>
                    <button type="submit" className='btn btn-primary' onClick={forLater}>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;