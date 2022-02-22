import React from 'react';
import '../styles/utilitySection.css';

class UtilitySection extends React.Component{
    render(){
        const {generatePdf, resetCv} = this.props;
        return(
            <div id='utility-section-btn-container'>
                <button id='generate-pdf-btn' onClick={generatePdf}>Generate PDF</button>
                <button id='reset-cv-btn' onClick={resetCv}>Reset CV</button>
            </div>
        )
    }
}

export default UtilitySection;