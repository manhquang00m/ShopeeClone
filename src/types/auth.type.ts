import { User } from './user.type'
import { ReponseAPI } from './utils.type'

export type AuthResponse = ReponseAPI<{
  access_token: string
  expires: string
  user: User
}>
