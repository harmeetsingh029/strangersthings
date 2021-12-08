import React, {useState} from "react"

const Form = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameRegister, setUsernameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [isLoggedin, setIsLoggedIn] = useState(false)

    const {loginToken, setLoginToken} = props
    
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
        let data = await response.json()
        setUsernameRegister("")
        setPasswordRegister("")
        console.log(data)
    }
  
    async function login(event) {
      event.preventDefault()
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
      setLoginToken(user.data.token)
      getUser(user.data.token)
      
      setIsLoggedIn(true)
      setUsername("")
      setPassword("")
    }
  
    async function getUser(token){
        let response = await fetch('https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/users/me',
        {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      
        let user = await response.json()
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
        {console.log(loginToken)}
        
           
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
        </> : <h2>{`Welcome ${username}`}</h2>
        } 

        <div id='logout'>
            <button type='submit' onClick={logout}>Logout</button>
        </div>
      </div>
    )
  }

  export default Form;