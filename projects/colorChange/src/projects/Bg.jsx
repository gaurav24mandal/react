import React from 'react'

function Bg({color, setColor}) {
    function changeColor(e){
        setColor(e.target.id)
}
  return (
    
      <div className={`w-full h-screen ${color} duration-200`} style={{backgroundColor : color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
 <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
   <button onClick={changeColor} id='blue' className="outline-none px-4 py-1 rounded-full text-blue shadow-lg" >
     blue
   </button>
   <button onClick={ changeColor} id='red' className="outline-none px-4 py-1 rounded-full text-red shadow-lg">
     red
   </button>
   <button onClick={ changeColor}  id='green' className="outline-none px-4 py-1 rounded-full text-green shadow-lg">
     green
   </button>
   <button onClick={ changeColor} id='orange' className="outline-none px-4 py-1 rounded-full text-orange shadow-lg">
    orange
   </button>
 </div>
</div>
 </div>
    
  )
}

export default Bg







// function App() {
//   const [color,setColor] = useState("gray") 
  
//   return (
//    <>
//    <Bg color={color} setColor={setColor}/>
//    </>
//   )
// }