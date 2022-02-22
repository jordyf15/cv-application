import React from 'react';

class TextInput extends React.Component{
    render(){
        const {handleOnChange, value, placeholder, id, className} = this.props;
        return (
            <input onChange={handleOnChange} id={id} className={className} value={value} type='text' placeholder={placeholder}/>
        );
    }
}

export default TextInput;