import { SET_FAVORITE } from 'store/actions/actionTypes'

const initialState = JSON.parse(localStorage.getItem('favorites')) || []

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return [
        ...action.favorites
      ]
    default:
      return state
  }
}
