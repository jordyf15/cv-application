import React from 'react';

class FileInput extends React.Component{
    render(){
        const {handleOnChange, value, inputId} = this.props;
        return(
            <div>
                <img/>
                <input type="file" id={inputId} onChange={handleOnChange} value={value}/>
            </div>
        );
    }
}

export default FileInput;