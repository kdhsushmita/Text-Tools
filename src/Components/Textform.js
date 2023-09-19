import React from 'react'
import { useState } from 'react';

export default function Textform({heading,handleUppercase,text,handleOnChange, 
  handleLowercase,handleClear,setText,handleOnCopy,handleRemovespaces,mode}) {
    const [find,setFind]=useState("");
    const[replace,setReplace]=useState("");
    const handleFindReplace=()=>{
        let newText=text.replace(find,replace);
        setText(newText);
    }
  return (
    <div>
        
        <h2 className='my-3'>{heading}</h2>
        <div className="my-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} 
        onChange={handleOnChange}></textarea>
        <h5 className='my-3'>Enter a text to find.</h5>
        <textarea className="form-control my-3" id="find" rows="1" value={find} onChange={(e)=>{setFind(e.target.value)}} ></textarea>
        <h5>Enter a text to replace.</h5>
        <textarea className="form-control" id="replace" rows="1" value={replace} 
        onChange={(e)=>{setReplace(e.target.value)}}></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${mode==='dark'?'light':'dark'} my-3 mx-3`} onClick={handleUppercase} >ToUpperCase</button>
        <button disabled={text.length===0} className={`btn btn-${mode==='dark'?'light':'dark'} my-3 mx-3 `} onClick={handleLowercase}>ToLowercase</button>
        <button disabled={text.length===0} className={`btn btn-${mode==='dark'?'light':'dark'} my-3 mx-3`} onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} className={`btn btn-${mode==='dark'?'light':'dark'} m-3`} onClick={handleFindReplace}>Find & Replace</button>
        <button disabled={text.length===0} className={`btn btn-${mode==='dark'?'light':'dark'} m-3`} onClick={handleOnCopy
        }>Copy</button>
        <button disabled={text.length===0} className={`btn btn-${mode==='dark'?'light':'dark'} m-3`} onClick={handleRemovespaces}>RemoveExtraSpaces</button>
        <div className="container my-3">
         <h5>Text Preview: {text.length===0?"Enter text to preview":text}</h5> 
        <h5>Word count: {text.split(/\s+/).filter((element)=>{return (element.length!==0)}).length}</h5>
        <h5>Letter count: {text.length}</h5>
        <h5>Time taken to read the text above: {0.008*text.split(" ").filter((element)=>{return (element.length!==0)}).length} minutes</h5>
        </div> 
    </div>
  )
}
