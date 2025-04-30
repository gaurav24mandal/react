import { useState,useCallback, useEffect,useRef } from 'react'
import React from 'react'

function Password() {
    const[length, setLength] =useState(8);
    const[CheckNum, SetCheckNum]= useState(false);
    const[checkChar, setCheckChar] = useState(false);
    const[password,setPassword]=useState("");
   let ref = useRef(null)
    const passwordGenerator = useCallback(()=>{
        let finalPassworrd=""
         let words = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
         if(CheckNum) words += "1234567890"
         if(checkChar)words += '`!@#$%^&*(){}'
         
         for(let i=0;i<length;i++){
            let randomWord = Math.floor(Math.random()*words.length+1);
            finalPassworrd += words.charAt(randomWord)
             }
         setPassword(finalPassworrd)
    },[length,CheckNum,checkChar]) 
     const copyClipboard = useCallback(()=>{
        if (ref.current) {
            ref.current.select();  // Select text
            window.navigator.clipboard.writeText(password); // Copy to clipboard
          }
     },[password])
    useEffect(()=>{
        passwordGenerator()
    },[passwordGenerator])
    return (
        <div className="bg-gray-900 p-4 rounded-lg w-[400px] space-y-4 text-white">
          {/* Password Display */}
          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 p-2 rounded-l-md bg-white text-orange-500 font-semibold focus:outline-none"
              readOnly
              value={password}
              ref={ref}
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white font-bold" onClick={copyClipboard}>
              copy
            </button>
          </div>
    
          {/* Length Slider */}
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e)=>{setLength(e.target.value)}}
              className="flex-1 accent-orange-500"
            />
            <span className="text-orange-400 font-semibold">
              Length {length}
            </span>
          </div>
    
          {/* Checkboxes */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2 text-orange-400 font-semibold cursor-pointer">
              <input
                type="checkbox"
                checked={CheckNum}
                className="accent-orange-500"
                onChange={()=>{
                    SetCheckNum((prev)=>!prev)
                }}
              />
              <span>Numbers</span>
            </label>
    
            <label className="flex items-center space-x-2 text-orange-400 font-semibold cursor-pointer">
              <input
                type="checkbox"
                checked = {checkChar}
                className="accent-orange-500"
                onChange={()=>{setCheckChar((prev)=>!prev)}}
              />
              <span>Characters</span>
            </label>
          </div>
        </div>

   
      );

      
}


export default Password
