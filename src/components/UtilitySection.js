import React from 'react';

class UtilitySection extends React.Component{
    render(){
        const {generatePdf, resetCv} = this.props;
        return(
            <div>
                <button onClick={generatePdf}>Generate PDF</button>
                <button onClick={resetCv}>Reset CV</button>
            </div>
        )
    }
}

export default UtilitySection;