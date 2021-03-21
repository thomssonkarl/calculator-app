import React, { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [data,setData] = useState('Calculation...');

  
  const addInput = (d) => {
    if(data === "Calculation..." || data === "Syntax error") {
      setData(d);
    }
    else {
      setData(prevData => prevData + d);
    }
    
  }

  const backspace = () => {
    setData(prevData => prevData.substring(0,prevData.length-1));
  }
  
  const clearInput = () => {
    setData('');
  }

  const evalExp = (d) => {

    try {
      var res = evaluate(d);
      clearInput();
      addInput(res);
    }
    catch(err) {
      clearInput();
      addInput("Syntax error");
    }
  }
  
  return (
    <div className="app">
      <link href="https://pvinis.github.io/iosevka-webfont/3.4.1/iosevka.css" rel="stylesheet" />
      <main>
        <div className = "result-container">
            <div className = "result-box"> {data} </div> 
        </div>
        <div className = "func-button-container">
          <button onClick = {()=>addInput("+")}>+</button>
          <button onClick = {()=>addInput("-")}>-</button>
          <button onClick = {()=>addInput("/")}>÷</button>
          <button onClick = {()=>addInput("*")}>×</button>
          <button onClick = {()=>addInput("^")}>^</button>
          <button onClick = {()=>evalExp(data)}>=</button>
          <button onClick = {()=>backspace()}>←</button>
        </div>
        <div className = "numbers-container">
          <button onClick = {()=>addInput("1")} >1</button>
          <button onClick = {()=>addInput("2")} >2</button>
          <button onClick = {()=>addInput("3")} >3</button>
          <button onClick = {()=>addInput("4")} >4</button>
          <button onClick = {()=>addInput("5")} >5</button>
          <button onClick = {()=>addInput("6")} >6</button>
          <button onClick = {()=>addInput("7")} >7</button>
          <button onClick = {()=>addInput("8")} >8</button>
          <button onClick = {()=>addInput("9")} >9</button>
          <button onClick = {()=>addInput("0")} >0</button>
          <button onClick = {()=>addInput(".")} >.</button>
          <button onClick = {()=>clearInput()} >AC</button>
        </div>
      </main>
      
    </div>
  );
}

export default App;
