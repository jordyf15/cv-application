import React from 'react';
import cvIcon from '../images/cv-icon.png';

class Header extends React.Component{
    render(){
        return(
            <header>
                <img src={cvIcon} alt='cv'/>
                <h1>CV Creator</h1>
            </header>
        );
    }
}

export default Header;