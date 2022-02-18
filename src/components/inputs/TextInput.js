import React from 'react';

class TextInput extends React.Component{
    render(){
        const {handleOnChange, value, placeholder, id} = this.props;
        return (
            <input onChange={handleOnChange} id={id} value={value} type='text' placeholder={placeholder}/>
        );
    }
}

export default TextInput;