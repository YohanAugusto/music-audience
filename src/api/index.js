/* eslint-disable no-unused-expressions */
import axios from 'axios'

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env

const API = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    apikey: REACT_APP_API_KEY
  }
})

export { API }
