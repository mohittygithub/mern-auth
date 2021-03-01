import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import signup from '../components/signup.component'

const Signup = (props) => {
  let history = useHistory()
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords did not match')
    }

    const response = await signup(signupData)
    console.log('response = ', response.data.message)
    alert(response.data.message + '. Login to your account')
    setSignupData({ name: '', email: '', password: '', confirmPassword: '' })
  }

  return (
    <>
      <h2>Sign Up Page</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='name'
          value={signupData.name}
          placeholder='name'
          onChange={(e) => handleChange(e)}
        />
        <input
          type='email'
          name='email'
          value={signupData.email}
          placeholder='email'
          autoComplete='on'
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type='password'
          name='password'
          value={signupData.password}
          placeholder='password'
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type='password'
          name='confirmPassword'
          value={signupData.confirmPassword}
          placeholder='confirm password'
          required
          onChange={(e) => handleChange(e)}
        />
        <button type='submit'>Sign in</button>
      </form>
      <br />
      <h4>
        Have an account? <Link to='/signin'>Sign in</Link>
      </h4>
    </>
  )
}

export default Signup
