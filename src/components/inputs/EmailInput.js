import React from 'react';

const EmailInput = ({handleOnChange, value, placeholder, id}) => {
    return <input onChange={handleOnChange} id={id} placeholder={placeholder} value={value} type='email'/>
}
export default EmailInput;