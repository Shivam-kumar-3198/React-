import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//const [counter, setCounter] =  useState(0)  ----->this const will not work

let [counter, setCounter] =  useState(0)  //this makes react supereasy

//let counter = 0

const  addValue =() =>{
 counter = counter + 1
 setCounter(counter)
  console.log("clicked", counter);
  // console.log("value added", Math.random());
}

//for remove

const removevalue = ()=>{
  setCounter(counter - 1)
}

//for kya karoge
const kyakaroge =() =>{
  setCounter(counter + 100)
}


  return(
  <>
     <h1>Shivam is Counting</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>

     <button onClick={kyakaroge}>Introducing new button</button>
    

     <button onClick={removevalue}>Decrease value</button>

  
  
  </>
  )
}

export default App

//Assignment set limit to 0 and maximum limit to 20