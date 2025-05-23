import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'
function UserLogin() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const handleClick =(e)=>{
           e.preventDefault();
           setUser({userName, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      placeholder='username'
      value={userName}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      />
        <h2>Password</h2>
      <input type="text"
      placeholder='password'
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />
      <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default UserLogin
