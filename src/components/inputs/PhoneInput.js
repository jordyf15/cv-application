import React from 'react';

class PhoneInput extends React.Component{
    render(){
        const {handleOnChange, value, placeholder, id} = this.props;
        return (
            <input onChange={handleOnChange} id={id} value={value} type='tel' placeholder={placeholder}/>
        );
    }
}

export default PhoneInput;