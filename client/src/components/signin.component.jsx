import axios from 'axios'

const signin = async (email, password) => {
  const data = { email, password }
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URI}/user/signin`,
      data
    )

    if (response) {
      return response
    }
  } catch (error) {
    console.log(error.message)
  }
}
export default signin
