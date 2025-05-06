import React,{useContext} from 'react'
import CreateContext from '../context/CreateContext'
function Profile() {
    const{user} = useContext(CreateContext)
     if(!user) return <div>Please Login</div>
     return <div> Welcome {user.userName} </div>
}
export default Profile   


