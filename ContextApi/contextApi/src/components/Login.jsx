import React, {useState,useContext} from 'react'
import CreateContext from '../context/CreateContext'
function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const {setUser}= useContext(CreateContext)
  const handleSubmit =(e)=>{
       e.preventDefault();
        setUser({userName, password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
       placeholder='userName'
       value={userName}
       onChange={(e)=>{
        setUsername(e.target.value)
       }}
       
      />
      <h2>Password</h2>
      <input type="text"
       placeholder='Password'
       value={password}
       onChange={(e)=>{
        setPassword(e.target.value)
       }}
      />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Login
