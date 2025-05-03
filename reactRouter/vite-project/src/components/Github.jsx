import React from 'react'
import { useLoaderData } from 'react-router-dom';
function Github(){
    const data = useLoaderData()
   return (
    <div className='p-4 bg-gray-600 text-center'>
      <span >{data.name}</span>
        <img src={data.avatar_url} alt="dp" className='w-40 block mx-auto' />
    </div>
   )
}
export default Github;

export const  FectchApi = async ()=>{
  const response = await fetch('https://api.github.com/users/gaurav24mandal')
    return response.json()
}




