import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter, fuckCounter] = useState(18)

  //let counter = 18;

  const addValue = () => {
    
    // console.log("value added ", Math.random());
    // counter = counter + 1;
    fuckCounter(counter+1);
    console.log("clicked", counter);
    
  }
  const decreasevalue = () => {
    fuckCounter(counter-1);
  }
  return (
    <>
     <h1>chai aur react </h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={decreasevalue}>Decrease value {counter} </button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
