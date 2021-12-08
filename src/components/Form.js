import React, {useState} from "react"

const Form = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(event) {
        event.preventDefault()
        

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
    
      setUsername("")
      setPassword("")
    }
  
  
    return (
      <div id='formContainer'>
        <div id='loginContainer'>
        <form onSubmit={login}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
        </div>


        <div id='registerContainer'>
            <form onSubmit={register}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button type='submit'>Register</button>
            </form>
        </div>
      </div>
    )
  }

  export default Form;