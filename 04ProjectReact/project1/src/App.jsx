import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-1"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-center m-10" >My Name is shivam and I am building this screen changing Color</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button onClick={() => setColor("red")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
            RED
          </button>
          <button onClick={()=> setColor("green")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
            blue
          </button>
          <button onClick={()=> setColor("black")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
            Black
          </button>
          <button onClick={()=>setColor("cyan")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"cyan"}}>
            Cyan
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
