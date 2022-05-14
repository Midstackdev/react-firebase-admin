import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import './login.scss'
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({ type: "LOGIN", payload: user })
      navigate("/")
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      setError(true)
    });
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