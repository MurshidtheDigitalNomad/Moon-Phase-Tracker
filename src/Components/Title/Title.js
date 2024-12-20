import React from 'react';
import './Title.css';

function Title(){
    return(
        <div className='tc bn' style={{paddingRight: '4px', paddingLeft: '4px', paddingTop: '2px', paddingBottom: '1px'}}>
            <h1 className='f1 georgia title-text-glow gold'>Moon Phase Tracker</h1>
            <p className='f3 white georgia-text-glow'>Explore each phase of the beautiful moon by simply putting your prefered date and time, and find out what the moon has to say to you today!</p>
        </div>
    )
}

export default Title;