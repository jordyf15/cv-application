import React from 'react';

class TextArea extends React.Component{
    render(){
        const {handleOnChange, value} = this.props;
        return(
            <textarea onChange={handleOnChange} value={value} />
        );
    }
}

export default TextArea;