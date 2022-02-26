import React from 'react';

const TextArea = ({handleOnChange, value, placeholder, id, className}) => {
    return <textarea rows='5' onChange={handleOnChange} id={id} className={className} value={value} placeholder={placeholder}/>;
}

export default TextArea;