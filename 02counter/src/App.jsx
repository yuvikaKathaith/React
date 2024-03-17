import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 0;
  const addValue = () => {
    console.log("clicked", Math.random());
    // counter = counter + 1;
    setCounter(counter + 1)
  }
  return(
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>

      <button onClick>Add value</button>
      <br/>
      <button>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
