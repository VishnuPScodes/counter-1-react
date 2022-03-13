
import {useState} from "react"
export function Counter(prop){
  const [counter,setCounter]=useState(prop.value);
  return(
    <div>
    <button onClick={()=>{
      setCounter(counter+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCounter(counter-1)
    }}>Decrease</button>
    <div className="box">{counter}</div>
    </div>
  )
}