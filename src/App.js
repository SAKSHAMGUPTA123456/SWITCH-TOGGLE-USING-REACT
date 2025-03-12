import logo from './logo.svg';
import { Fragment } from 'react';
import { useState } from 'react';
import './input.css';
import './output.css';
import React from 'react';
import './App.css'
function App() {
  const [count,setcount]=useState(true);
  const handlechange=()=>{
    setcount(!count)
    console.log(count)
  }
  return (
    
    <Fragment>
      <div className='flex justify-center mt-44'>
        <div style={{backgroundColor:`${count==true?"rgb(42, 157, 42)":"gray"}`,width:"100px",borderRadius:"50px",height:"50px"}}>

<div  class={` super firston-${count==true?"on":"off"}`}  onClick={handlechange}>{count==true?"On":"Off"}</div>
</div>
        </div>
    </Fragment>
    
  );
}

export default App;
