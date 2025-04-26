import { useState } from "react";

function App() {
  
let [counter , setCounter] = useState(0)
   const addValue = ()=>{
        setCounter(counter+1)
   }
  function decValue(){
     setCounter(counter-1)
  }

  return(
    <>
    <h1 className="count"> {counter}</h1>
    <button id="up" onClick={addValue}>up</button>
     <button id="down"onClick={decValue}>down</button>
    
    </>
  )
 
}

export default App
