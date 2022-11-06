import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Stopwatch from './components/Stopwatch';
import SW2 from './components/SW2';
function App() {
  return (
    <div className="App">
     <Counter/>
     <Stopwatch/>
     <SW2/>
         
    </div>
  );
}

export default App;
