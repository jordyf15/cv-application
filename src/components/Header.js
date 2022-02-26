import React from 'react';
import cvIcon from '../images/cv-icon.png';

const Header = () => {
    return <header>
        <img src={cvIcon} alt='cv'/>
        <h1>CV Creator</h1>
    </header>
}

export default Header;