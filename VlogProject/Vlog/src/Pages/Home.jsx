import { useEffect , useState} from 'react'
import React  from 'react'
import service from '../appwrite/config'
import { Postcard , Containers } from '../components'
function Home() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        service.getPosts().then((post)=>{
            if(post){
                setPosts(post)
            }
        })
    })
  if(posts.length=== 0){
    return  (
        <div className="w-full py-8 mt-4 text-center">
        <Containers>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
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
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <Postcard {...post} />
                </div>
            ))}
        </div>
    </Containers>
</div>
  )
}

export default Home
