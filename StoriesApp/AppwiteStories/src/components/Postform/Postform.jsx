import React ,{useCallback ,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import {Input , Button , Editor , Select} from '../index'
import Crud from '../../Appwrite/Crud';
import  {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {addPost,deletePost,updatePost,setLoading,setError} from "../../store/PostSilce"
import { useDispatch } from 'react-redux';

function Postform({post}) {
    const userData =  useSelector(state => state.auth.userData)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {register , handleSubmit, control,watch, setValue, getValues } = useForm({
        defaultValues : {
            title : post?.title || "" ,
            slug  : post?.$id || "",
            content :post?.content || "",
            status  : post?.status || "active",
            userID : post?.userData.$id
         },
    })
    const submit = async (data)=>{
       if(post){
        console.log("Final data:", data);
            const file = await data.image[0]?Crud.createFile(data.image[0]):null
              
            if(file){
              await Crud.deleteFile(post.featuredImage);
             
            }
            const dbPost = await Crud.updatePost(post.$id,{
                ...data ,
                featuredImage : file?file.$id:undefined,
                })
                
                if(dbPost){
               
                  
                    navigate(`/post/${dbPost.$id}`);
                    dispatch(updatePost(dbPost))
                }
          }
           else{
            console.log("Final data:", data);
            const file = await  Crud.createFile(data.image[0]);
            console.log(file);
            
             if(file){
                data.featuredImage = file.$id
                const dbPost = await Crud.createPost({...data, userID: userData.$id})
                
                
                if (dbPost) {
                  dispatch(addPost(dbPost))
                    navigate(`/post/${dbPost.$id}`);
                }
             }
        }
    }
       const slugTransform = useCallback((value)=>{
                if (value && typeof value === "string"){
                  return value
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-zA-Z\d\s]+/g, "-")
                  .replace(/\s/g, "-");
                  return "";
                }
       } , [])

       React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    
  return (
     <form onSubmit={handleSubmit(submit)}>
      <div className='w-2/3 px-2'>
       <Input
         label = "Title"
         type = "text"
         placeholder="Title"
         className="mb-4"
         {...register("title",{required: true})}
       />
        <Input
         label = "Slug"
         type = "text"
         placeholder="Slug"
         className="mb-4"
         {...register("slug",{required: true})}
         onInput = {(e)=>{
            setValue('slug',slugTransform(e.currentTarget.value),{shouldValidate: true});
         }}
       />
       <Editor
        label ="Content :" 
         name = "content" 
         control ={control}
        defaultValues ={getValues("content")}
       />
        <Input
         label = "Featured Image"
         type = "file"
         accept = "image/png, image/jpg, image/jpeg, image/gif"
         className="mb-4"
         {...register("image",{required: true})}
       />
       {post?.featuredImage && (
            <div className='w-full mb-4'>
             <img 
             src= {Crud.getFilePreview(post.featuredImage)} 
             alt= {post.title}
             className="rounded-lg"
              />
            </div>
       )
     }
     <Select 
      options={["active", "inactive"]}
      label= "Status"
      className="mb-4"
     {...register("status", { required: true })}
     />
      <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
      </div>
     </form>
  )
}

export default Postform
