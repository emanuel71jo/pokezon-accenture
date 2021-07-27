import axios from 'axios'

const app = axios.create({
  baseURL: 'http://localhost:3333/',
})

export { app }
