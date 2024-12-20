import React from 'react';
import './FormInput.css';

const FormInput=({setDate, setTime})=> {
    const handleDateChange=(event)=>{
        setDate(event.target.value);
    }

    const handleTimeChange=(event)=>{
        setTime(event.target.value);
    }

    return (
        <div className="form-container">
            
                <div className="mb2" style={{paddingRight: '1rem'}}>
                    <label className="db fw6 lh-copy f3 mb2" htmlFor="date">
                    Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        onChange={handleDateChange}
                        className="pa2 input-reset b--black ba bg-transparent w-100"
                    />
                </div>
                <div className="mb3" style={{paddingRight: '1rem'}}>
                    <label className="db fw6 lh-copy f3 mb2" htmlFor="time">
                        Time:
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        onChange={handleTimeChange}
                        className="pa2 input-reset b--black ba bg-transparent w-100"
                    />
                </div>
        </div>
    );
}

export default FormInput;