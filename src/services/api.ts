import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.29.69:3333'
})

//iniciar api
//json-server ./src/services/server.json --host 192.168.29.69 --port 3333 

export default api;