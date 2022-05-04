import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password) {
      setError(true)
      return
    }
    console.log({email, password})
    navigate("/")
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Wrong email/password</span>}
      </form>
    </div>
  )
}

export default Login