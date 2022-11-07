import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import useClock from "./hooks/useClock";
import List1 from "./components/List1";
import useNumberList from "./hooks/useNumberList";
import List2 from "./components/List2";
function App() {
  const{hours,minutes,seconds}:any=useClock();
  const initialArray:number[]=[1,2,3];

  return (
    <div className="App">
      <Clock hours={hours} minutes={minutes} seconds={seconds}/>
      {/* Clock */}
     <List1  initialArray={initialArray}/> 
     <List2  initialArray={initialArray}/> 
       
    </div>
  );
}

export default App;
