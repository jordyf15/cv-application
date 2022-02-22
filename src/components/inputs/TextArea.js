import React from 'react';

class TextArea extends React.Component{
    render(){
        const {handleOnChange, value, placeholder, id, className} = this.props;
        return(
            <textarea rows='5' onChange={handleOnChange} id={id} className={className} value={value} placeholder={placeholder}/>
        );
    }
}

export default TextArea;