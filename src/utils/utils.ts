import { AxiosError } from 'axios'

export const isAxiosError = (error: AxiosError) => {
  return error.isAxiosError
}
