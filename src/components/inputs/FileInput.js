import React from 'react';

class FileInput extends React.Component{
    render(){
        const {handleOnChange, value, inputId, alt} = this.props;
        return(
            <div>
                <img src={value} alt={alt}/>
                <input type="file" id={inputId} onChange={handleOnChange}/>
            </div>
        );
    }
}

export default FileInput;