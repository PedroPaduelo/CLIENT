
import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://3010-ed35dcf4-62da-423c-8abb-828eb9588ea0.ws-us03.gitpod.io/',
})

export const apiCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
})

export default api;