
import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://3010-pink-frog-mpkeeusw.ws-us03.gitpod.io/',
})

export default api;