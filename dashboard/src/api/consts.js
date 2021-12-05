import axios from 'axios'

export const client = (url) => axios.create({baseURL:url})

export const api_url =  process.env.API_URL || "http://localhost:5000/api"

