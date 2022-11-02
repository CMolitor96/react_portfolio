import React, { useState } from 'react';

function Header() {
    const [hamburger, setHamburger] = useState(false);
    const showHamburger = () => {
        setHamburger(true);
    };
    const show = hamburger ? 'show' : "";

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#navbar">Navbar</a>
            <button className="navbar-toggler" onClick={showHamburger} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + show} id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-item nav-link active" href="#about">About Me</a>
                    <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
                    <a className="nav-item nav-link" href="#contact">Contact Me</a>
                    <a className="nav-item nav-link" href="#resume">Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;