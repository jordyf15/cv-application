import React from 'react';

class EmailInput extends React.Component{
    render(){
        const {handleOnChange, value} = this.props;
        return(
            <input onChange={handleOnChange} value={value} type='email'/>
        );
    }
}

export default EmailInput;