import React from 'react';

class EmailInput extends React.Component{
    render(){
        const {handleOnChange, value, placeholder, id} = this.props;
        return(
            <input onChange={handleOnChange} id={id} placeholder={placeholder} value={value} type='email'/>
        );
    }
}

export default EmailInput;