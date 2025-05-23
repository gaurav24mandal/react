import React , {useEffect} from 'react'
import Crud from '../Appwrite/Crud'
import { useSelector  ,useDispatch } from 'react-redux'
import { Containers, PostCard } from '../components'
import { setPosts } from '../store/PostSilce'


function AllPost() {
    const posts = useSelector(state => state.posts.posts)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
          const getPost = async()=>{
            const res  = await Crud.getPosts();
            if(res){
                dispatch(setPosts(res.documents))
            }
          }
        getPost()
        console.log(posts);
        },[dispatch])
    
  return (
    <div className='w-full py-8'>
    <Containers>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                    
                </div>
            ))}
        </div>
        </Containers>
</div>
)
  
}

export default AllPost
