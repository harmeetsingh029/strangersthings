import React, {useState} from "react"
import { getUser } from "../api";

const Form = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameRegister, setUsernameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')

    const {loginToken, setLoginToken, isLoggedin, setIsLoggedIn, userData, setUserData} = props
    
    async function register(event) {
        event.preventDefault()
        let response = await fetch(
            'https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/users/register',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user: {
                  username: usernameRegister,
                  password: passwordRegister,
                },
              }),
            }
          )
        let info = await response.json()
        setUsernameRegister("")
        setPasswordRegister("")
    }
  
    async function login(event) {
      event.preventDefault()
      try{
      let response = await fetch(
        'https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      )

      let user = await response.json()
      setIsLoggedIn(true)
      setLoginToken(user.data.token)
      let newUser = getUser(user.data.token)
      setUserData(newUser)
      }catch(err){
        console.log(err)
      }
      setUsername("")
      setPassword("")
    }
  


    function logout(){
        setIsLoggedIn(false)
        setLoginToken('')  
        setUsername("")
        setPassword("")
    }

    return (
      <div id='formContainer'>
          {
          !isLoggedin ? <>
        <div id='loginContainer'>
        <h2>Login: </h2>
        <form onSubmit={login}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
        </div>
           
        <div id='registerContainer'>
        <h2>Register: </h2>
            <form onSubmit={register}>
                <label htmlFor='usernameRegister'>Desired Username:</label>
                <input type='text' name='usernameRegister' value={usernameRegister} onChange={(event) => setUsernameRegister(event.target.value)}/>
                <label htmlFor='passwordRegister'>Desired Password:</label>
                <input type='password' name='passwordRegister' value={passwordRegister} onChange={(event) => setPasswordRegister(event.target.value)}/>
                <button type='submit'>Register</button>
            </form>
        </div>
        </> : null
        } 

        <div id='logout'>
            <button type='submit' onClick={logout}>Logout</button>
        </div>
      </div>
    )
  }

  export default Form;