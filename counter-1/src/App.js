import "./styles.css";
import {Counter} from "./components/Counter"
import {useState} from "react" 

export default function App() {
const number=0
  return (
    <div className="App">
    <Counter value={number}/>
    </div>
  );
}
