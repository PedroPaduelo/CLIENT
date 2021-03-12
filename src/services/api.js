
import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://gestaoprod.herokuapp.com/',
})


export default api;