import { actionTypes } from './action.types'

export const isUpdate = (isUpdate) => (dispatch) => {
  dispatch({
    type: actionTypes.IS_UPDATE,
    payload: { isUpdate },
  })
}
