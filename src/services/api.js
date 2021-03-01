
import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://3010-silver-cattle-md1fo63t.ws-us03.gitpod.io/',
})

export default api;