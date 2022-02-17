import React from 'react';

class PhoneInput extends React.Component{
    render(){
        const {handleOnChange, value} = this.props;
        return (
            <input onChange={handleOnChange} value={value} type='tel'/>
        );
    }
}

export default PhoneInput;