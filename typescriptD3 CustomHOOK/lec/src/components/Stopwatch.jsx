import React from 'react';
import useStopwatch from '../hooks/useStopwatch';
// import {   } from 'typescript';


const Stopwatch = () => {
    const {time,start,reset,pause}=useStopwatch(0);

  return (
    <div>

    
    <h1>Stopwatch:{time}</h1>
    <div>
<button onClick={start}>Start</button>
<button onClick={pause}>Pause</button>
<button onClick={reset}>Reset</button>
 
    </div>
    </div>
  )
}

export default Stopwatch