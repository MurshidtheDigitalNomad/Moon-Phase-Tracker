import React, {useState, useEffect} from 'react';
import FirstQuarter from './FirstQuarter.jpg';
import FullMoon from './FullMoon.jpg';
import LastQuarter from './LastQuarter.jpg';
import NewMoon from './NewMoon.jpg';
import WaningCrescent from './WaningCrescent.jpg';
import WaningGibbous from './WaningGibbous.jpg';
import WaxingGibbous from './WaxingGibbous.jpg';
import WaxingCrescent from './WaxingCrescent.jpg';


const MoonPhase=({date='2024-12-01', time='00:00', submit, setSubmit})=>{
    const [moonPhasePoint, setMoonPhasePoint]=useState(0);

    useEffect(()=>{
        if (!submit){
            return;
        }

        async function fetchData(){
            try{
                const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dhaka/${date}T${time}:00?unitGroup=us&key=LY2TW6ELKJ46UW2TDVPK2UMM7&include=days&elements=moonphase`);
                if (!response.ok){
                    throw new Error(`HTTP error status: ${response.status}`)
                }
                const data= await response.json();
                setMoonPhasePoint(data.days[0].moonphase);
                console.log(data.days[0].moonphase)

            }catch(error){
                    console.log('There was a problem fetching data: ', error)
            } finally{
                setSubmit(false);
            }
        };

        fetchData();
        },[date, time, submit, setSubmit]);
    
    if (moonPhasePoint===0){
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={NewMoon}
                alt='New Moon'
                />
                <h3 className='white'>'New Moon'</h3>
            </div>

        )
    } else if(0<moonPhasePoint && moonPhasePoint<0.25) {
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={WaxingCrescent}
                alt='Waxing Crescent'
                />
                <h3 className='white'>'Waxing Crescent'</h3>
            </div>
        )
    } else if(moonPhasePoint===0.25){
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={FirstQuarter}
                alt='First Quarter'
                />
                <h3 className='white'>First Quarter</h3>
            </div>
        ) 
    } else if(0.25<moonPhasePoint && moonPhasePoint<0.5){
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={WaxingGibbous}
                alt='Waxing Gibbous'
                />
                <h3 className='white'>Waxing Gibbous</h3>
            </div>
        )
    } else if (moonPhasePoint===0.5){
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={FullMoon}
                alt='FullMoon'
                />
                <h3 className='white'>Full Moon</h3>
            </div>
        )
    } else if (0.50<moonPhasePoint && moonPhasePoint<0.75){
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={WaningGibbous}
                alt='Waning Gibbous'
                />
                <h3 className='white'>Waning Gibbous</h3>
            </div>
        )
    }else if(moonPhasePoint===0.75){
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={LastQuarter}
                alt='LastQuarter'
                />
                <h3 className='white'>Last Quarter</h3>
            </div>
        )
    } else if (0.75<moonPhasePoint && moonPhasePoint<=1.0){
        return(
            <div>
                <img 
                height='300px'
                width='300px'
                src={WaningCrescent}
                alt='Waning Crescent'
                />
                <h3 className='white'>Waning Crescent</h3>
            </div>
        )
    }
};

export default MoonPhase;