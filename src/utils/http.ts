import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const http = new Http().instance
