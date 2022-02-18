import React from 'react';

class DateInput extends React.Component{
    render(){
        const {handleOnChange, value, id} =this.props;
        return(
            <input type="date" onChange={handleOnChange} value={value} id={id}/>
        )
    }
}

export default DateInput;