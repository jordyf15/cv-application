import React from 'react';

const PhoneInput = ({handleOnChange, value, placeholder, id}) => {
    return <input onChange={handleOnChange} id={id} value={value} type='tel' placeholder={placeholder}/>;
}

export default PhoneInput;