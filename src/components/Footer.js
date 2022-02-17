import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <p><a href="https://github.com/jordyf15" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github-square"></i></a> 
                Created by Jordy Ferdian
                    <a href="https://www.linkedin.com/in/jordy-ferdian-3606041a7/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                        </a></p>
            </footer>
        );
    }
}

export default Footer;