import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username: "ankit",
  age: 19
}
let newArr= [1,2,3,4]
  return (
    <>
    <h1 className="text-3xl font-bold underline mb-10"> hello world!</h1>
    <Card username ="friedrice" someObj={newArr} btnText="click me"/>
    <Card username="ankit" btnText="visit me"/>
     
 
  </>
  )
}


export default App
