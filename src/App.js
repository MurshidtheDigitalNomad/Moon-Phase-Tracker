import React,{useState} from 'react';
import './App.css';
import 'tachyons/css/tachyons.min.css';
import Title from './Components/Title/Title.js';
import MoonPhase from './Components/MoonPhase/MoonPhase.js';
import FormInput from './Components/FormInput/FormInput.js';
import Background from './Components/Background/Background.js';



function App() {
  const [date, setDate]= useState('');
  const [time, setTime]= useState('');
  const [submit, setSubmit]= useState(false);

  const handleSubmit=(event)=>{
    event.preventDefault();

    if (!date || !time){
      alert('Please fill up both the fields')
    }
    console.log(`Date:${date}, Time:${time}`)
    setSubmit(true)
  }

  return (
    <div className="App" style={{position: 'relative'}}>
      <Background />
      <div style={{position: 'relative', zIndex: 1, margin: '5%'}}>
        <Title />
        <div 
          className='pa2 flex flex-wrap flex-row justify-center items-center'
          style={{margin: '5%'}}>
            <MoonPhase 
            className='mr3 pa2 w-50-l w-100-m' 
            date={date}
            time={time}
            submit={submit}
            setSubmit={setSubmit}
            />
            <form className="pa3 w-50-l w-100-m br3 shadow-5 glow-form" onSubmit={handleSubmit} style={{margin: '1rem'}}>
              <FormInput
              setDate={setDate}
              setTime={setTime}
              />
              <button className="pa3 br3 bg-light-blue black hover-bg-near-black hover-white f5 shadow-5" type='submit'>Submit 🌕</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default App;
