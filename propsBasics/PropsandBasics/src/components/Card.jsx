import React from 'react'
import { useState } from 'react'

function cartCounter(){
    
}

function Card({cartCounter,itemName,ItemAdded, imageLink}) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
    <img
      src= {imageLink}
      alt="item 1"
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
         {itemName} 
      </span>
      <span>

      </span>
      <h1 className="text-xl font-semibold tracking-wide"></h1>
    </div>
    <button className="text-gray-300" onClick={cartCounter}>
      Add to cart
    </button>
  </div>
  )
}

export default Card
