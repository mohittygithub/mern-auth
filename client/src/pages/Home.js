import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Post from '../components/post'
import { FaPlus } from 'react-icons/fa'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { isUpdate } from '../redux/actions/post.actions'

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const uri = `${process.env.REACT_APP_NODE_SERVER_URI}`
  const getAllPosts = async () => {
    try {
      const header = {
        headers: { 'x-auth-token': localStorage.getItem('jwt') },
      }

      const response = await axios.get(`${uri}/posts/all`, header)
      await setData(response.data.response)
      const { tags, _id, title, author, body, user, createdAt } = data
      console.log(tags, _id, title, author, body, user, createdAt)
    } catch (error) {
      console.log(error.message)
    }
    console.log(data)
  }
  useEffect(() => {
    //console.log(localStorage.getItem("jwt"));
    getAllPosts()
  }, [])

  const handleClick = () => {
    dispatch(isUpdate(false))
    history.push('/new')
  }
  if (data.length === 0) {
    return (
      <>
        <div style={{ height: '100px' }}></div>
        <div className='jumbotron container post-jumbotron'>
          <div className='container'>
            <h1 className='display-4'>No Posts To Show</h1>
            <button
              onClick={() => history.push('/new')}
              className='btn btn-primary'
            >
              Create New Post
            </button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div style={{ height: '100px' }}></div>

      <ul>
        <div className='new-post container'>
          <Tippy content={'New Post'} placement='right-end'>
            <button onClick={handleClick} className='btn btn-success outlined'>
              <FaPlus className='plus-sign' />
            </button>
          </Tippy>
        </div>
        {
          //data &&
          data.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              title={post.title}
              author={post.author}
              body={post.body}
              tags={post.tags.map((tag) => '[' + tag + '] ')}
              createdAt={post.createdAt}
            />
          ))
        }
      </ul>
    </>
  )
}

export default Home
