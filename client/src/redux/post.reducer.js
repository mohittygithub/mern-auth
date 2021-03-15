import { actionTypes } from './actions/action.types'

const initialState = {
  isUpdate: false,
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_UPDATE:
      return {
        ...state,
        isUpdate: action.payload,
      }
    default:
      return state
  }
}

export default postReducer
