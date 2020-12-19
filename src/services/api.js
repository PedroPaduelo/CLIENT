
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://procvidaapi.herokuapp.com/',
})

export default api;