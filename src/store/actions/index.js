import { Store } from 'store'
import { SET_FAVORITE } from './actionTypes'

export const setFavorite = (artist) => {
  let newData = Store.getState().favorites || JSON.parse(localStorage.getItem('favorites')) || []

  if (newData.find(favorite => +favorite.id === +artist.id)) {
    const dataFilter = newData.filter(favorite => +favorite.id !== +artist.id)
    localStorage.setItem('favorites', JSON.stringify(dataFilter))
    newData = dataFilter
  } else {
    newData.push(artist)
    localStorage.setItem('favorites', JSON.stringify(newData))
  }

  return ({
    type: SET_FAVORITE,
    favorites: newData
  })
}
