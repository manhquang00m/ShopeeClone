import { AuthResponse } from 'src/types/auth.type'
import { http } from 'src/utils/http'

export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/resgister', body).then((response) => {
    return response?.data
  })
}
