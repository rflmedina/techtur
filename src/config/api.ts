import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
)

export default api