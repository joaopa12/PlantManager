import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.24.224.1'
})

export default api;