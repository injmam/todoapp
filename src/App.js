// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [Hori,setHori]=useState(10)
  const [Veri,setVeri]=useState(10)
  const [Blur,setBlur]=useState(10)
  const [color,setColor]=useState("Black")
  const [checkon,setCheckon]=useState(false)
  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal length</label>
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}/>
        <label>Vertical length</label>
      <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)}/>
        <label>Blur</label>
      <input type="range"  min="0" max="200"    value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
        <label>Color</label>
      <input type="color"  min="0" max="200"    value={color} onChange={(e)=>setColor(e.target.value)}/>
  <div className="switch">
    <label>
      Outline
      <input type="checkbox" checked={checkon} onChange={()=>setCheckon(!checkon)}/>
      <span className="lever"></span>
      inset
    </label>
  </div>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow: `${checkon ? "inset":" "}   ${Hori}px ${Veri}px ${Blur}px ${color} `}}>
          <p>Box-Shadow:{Hori}px {Veri}px {Blur}px {color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
