import { useState } from 'react'


export default function Signup({ setToken, setIsUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('http://localhost:3005/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.token)
        localStorage.setItem('token', data.token)
      })
      .catch(error => alert(error))
  }
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label><br/>
        <label>Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label><br/>
        <input type="submit" value="Sign up" />
      </form><br/>
      <button onClick={() => setIsUser(true)}>Login</button>
    </>
  )
}