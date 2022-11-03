import React from 'react';
import Navigation from './navigation';

const styles = {
    top: '0',
    width: '100%',
    height: '4rem',
    backgroundColor: 'green',
}

function Header() {
    return (
        <div style={styles}>
            <Navigation />
        </div>
    );
}

export default Header;