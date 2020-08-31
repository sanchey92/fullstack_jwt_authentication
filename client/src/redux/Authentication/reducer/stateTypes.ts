export type AuthState = {
  name: string | null,
  email: string | null,
  token: string | null,
  isLoading: boolean,
  message: string | null,
  isMessage: boolean
}