import React ,{useState , useEffect} from 'react'
import service from '../appwrite/config'
import { Containers , Postcard } from '../components'
function Allposts() {
    const [posts , setPosts] = useState([]);
    useEffect(()=>{
         service.getPosts([]).then((post)=>{
              if(post){
                setPosts(post.documents)
              }
         })
    },[])
  return (
    <div className='py-8'>
      <Containers>
      <div className='flex flex-wrap'>
        {posts.map((post)=>(
            <div key={post.$id}  className='p-2 w-1/4'>
                <Postcard {...post}/>
            </div>
        ))}
        </div>
      </Containers>
    </div>
  )
}

export default Allposts
