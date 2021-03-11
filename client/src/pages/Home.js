import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const getAllPosts = async () => {
    const headers = {
      'x-auth-token': localStorage.getItem('jwt'),
    }
    const response = await axios.get('/posts/all', headers)
    console.log(response)
  }
  useEffect(() => {})
  return (
    <>
      <p>Home Page</p>
    </>
  )
}
export default Home
