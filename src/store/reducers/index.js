import { combineReducers } from 'redux'
import { favoritesReducer } from './favorites'

export const Reducers = combineReducers({
  favorites: favoritesReducer
})
