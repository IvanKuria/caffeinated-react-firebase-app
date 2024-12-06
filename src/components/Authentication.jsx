import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function Authentication(props) {
  const { handleCloseModal } = props
  const [isRegistered, setIsRegistered] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [error, setError] = useState(null)

  const {signup, login} = useAuth()

  async function handleAuthenticate() {
    if (!email || !email.includes("@") || !password || password.length < 6 || isAuthenticating) {
      return
    }
    try {
      setIsAuthenticating(true)
      setError(null)
      if (isRegistered) {
        // register a user
        await signup(email, password)
  
      } else {
        // login a user
        await login(email, password)
      }
      handleCloseModal()
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    } finally {
      setIsAuthenticating(false)
    }
    
  }

  return (
    <>
      <h2 className="sign-up-text">{isRegistered ? "Sign Up" : "Login"}</h2>
      <p>{isRegistered ? "Create an account" : "Sign into your account!"}</p>
      {error && (
        <p>❌ {error}</p>
      )}
      <input value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' />
      <input value={password} onChange={(e) => {setPassword(e.target.value)}}placeholder='*********' type="password" />
      <button onClick={handleAuthenticate}><p>{isAuthenticating ? "Authenticating..." : "Submit"}</p></button>
      <hr />
      <div className="register-content">
        <p>{isRegistered ? "Already have an account" : "Don\'t have an account?"}</p>
        <button onClick={() => { setIsRegistered(!isRegistered) }}><p>
        {isRegistered ? "Sign In" : "Sign Up"}</p></button>
      </div>

    </>
  )
}

export default Authentication