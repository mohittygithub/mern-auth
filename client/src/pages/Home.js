import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  let history = useHistory()
  // logout method
  const logout = (e) => {
    e.preventDefault()
    console.log('hi')
    localStorage.clear()
    history.push('/signin')
  }
  return (
    <>
      <p>Home Page</p>
      <button onClick={logout}>Logout</button>
    </>
  )
}
export default Home
