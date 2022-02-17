import React from 'react';

class FileInput extends React.Component{
    render(){
        const {handleOnChange, value} = this.props;
        return(
            <div>
                <image/>
                <input type="file" onChange={handleOnChange} value={value}/>
            </div>
        );
    }
}

export default FileInput;