import React from 'react';

class TextArea extends React.Component{
    render(){
        const {handleOnChange, value, placeholder, id} = this.props;
        return(
            <textarea onChange={handleOnChange} id={id} value={value} placeholder={placeholder}/>
        );
    }
}

export default TextArea;