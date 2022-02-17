import React from 'react';

class TextInput extends React.Component{
    render(){
        const {handleOnChange, value} = this.props;
        return (
            <input onChange={handleOnChange} value={value} type='text'/>
        );
    }
}

export default TextInput;