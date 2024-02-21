import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setcounter] = useState(0);
// let counter = 5;

const addvalue = ()=> {
  // console.log("value added" , Math.random());
  if(counter<20){
    counter = counter + 1;
    console.log("clicked" , counter);
    setcounter(counter);
  }
}

const removevalue = () =>{
  if(counter > 0){
    counter = counter - 1;
    console.log("clicked" , counter);
    setcounter(counter);
  }
}
  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>add value {counter}</button>
      <br/>
      <button onClick={removevalue}>remove value {counter}</button>
    </>
  )
}

export default App
