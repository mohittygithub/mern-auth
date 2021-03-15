import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BsPencilSquare } from 'react-icons/bs'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { isUpdate } from '../redux/actions/post.actions'
const UpdatePost = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [update, setUpdate] = useState(false)
  const handleClick = () => {
    setUpdate(isUpdate(true))
    dispatch(isUpdate(true))
    history.push('/new')
  }
  return (
    <>
      <Tippy content={'Update Post'} placement='right-end'>
        <button onClick={() => handleClick()} className='btn btn-secondary'>
          <BsPencilSquare />
        </button>
      </Tippy>
    </>
  )
}
export default UpdatePost
