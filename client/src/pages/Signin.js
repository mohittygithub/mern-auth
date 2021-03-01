import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/actions/auth.actions'
import signin from '../components/signin.component'

const Signin = (props) => {
  const dispatch = useDispatch()
  let history = useHistory()
  const stateJwt = useSelector((state) => state.authReducer.jwt)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const [token, setToken] = useState('')

  // handlesubmit method
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await signin(loginData.email, loginData.password)

    setToken(response.data.jwt)
    setLoginData({ email: '', password: '' })
    history.push('/')
  }

  // useEffect method to capture the value of token
  useEffect(() => {
    //console.log(token)
    localStorage.setItem('jwt', token)
    console.log(localStorage.getItem('jwt'))
  }, [token])

  // handleChange method
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h2>Sign in to your account!</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='email'
          name='email'
          placeholder='email'
          autoComplete='on'
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          required
          onChange={(e) => handleChange(e)}
        />
        <button type='submit'>Sign in</button>
      </form>
      <br />

      <h6>
        Don't have an account? <Link to='/signup'>Create Account</Link>
      </h6>
    </>
  )
}

export default Signin
