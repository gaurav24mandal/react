import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Userprofile() {
    const {user} = useContext(UserContext)
    return(
        <div>
            {user?(<div>
                <h1>Welcome ,{user.userName}</h1>
                
            </div>):(<div> please login</div>)}
        </div>
    )
}

export default Userprofile

