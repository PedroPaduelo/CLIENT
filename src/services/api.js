
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nommandapi.herokuapp.com/',
})

export default api;