import React , {useState, useEffect}from 'react'
import service from '../appwrite/config'
import { Containers, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
function Editpost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams() ;
    const navigate = useNavigate();

    useEffect(()=>{
          if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
          }
          else{
            navigate("/")
          }
    },[slug, navigate])

  return post?(<div className='py-8'>
    <Containers>
        <PostForm post={post}/>
    </Containers>
  </div>):null
}

export default Editpost
