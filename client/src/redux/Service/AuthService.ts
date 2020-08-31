export default class AuthService {

  public async signup(data: any): Promise<any> {
    try {
      const response = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return await response.json()
    } catch (e) {
      console.log(e)
    }
  }

  public async login(data: any): Promise<any> {
    try {
      const response = await fetch('http://localhost:8000/auth/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      const store = await response.json()
      if (store.message) {
        return store
      } else {
        localStorage.setItem(
          "userTokenData",
          JSON.stringify({userId: store.userId, token: store.token, email: store.email})
        )
        return store
      }
    } catch (e) {
      console.log(e)
    }
  }

}