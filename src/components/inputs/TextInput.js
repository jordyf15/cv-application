import React from 'react';

const TextInput = ({handleOnChange, value, placeholder, id, className}) => {
    return <input onChange={handleOnChange} id={id} className={className} value={value} type='text' placeholder={placeholder}/>;
}

export default TextInput;