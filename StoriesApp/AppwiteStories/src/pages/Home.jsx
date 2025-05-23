import React ,{useState, useEffect} from 'react'
import { PostCard, Containers } from '../components'
import { useSelector } from 'react-redux'

function Home() {

   const posts = useSelector(state => state.posts.posts);
   const status = useSelector(state => state.auth.status)

   if( ! posts || posts.length === 0){
  return  (
      <div className="w-full py-8 mt-4 text-center">
      <Containers>
          <div className="flex flex-wrap">
              <div className="p-2 w-full">
                  <h1 className="text-2xl font-bold hover:text-gray-500">
                      {status? <div>add post</div>: <span>login to see post</span> }
                  </h1>
              </div>
          </div>
      </Containers>
  </div>
    )
   }
   return(
    <div className='w-full py-8'>
   <Containers>
   <div className='flex flex-wrap'>
     {posts.map((post)=>(
       <div key={post.$id} className='p-2 w-1/4'>
       <PostCard {...post} />
         </div>
     ))}
    </div>
   </Containers>
 </div>
       
   )
}

export default Home
