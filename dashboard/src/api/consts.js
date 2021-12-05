import axios from 'axios'

export const client = (url) => axios.create({baseURL:url})

export const api_url =  "https://perfanalytics-api-kg.herokuapp.com/api"

