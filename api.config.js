export const config = {
  apiBase: 'https://a-rosa-je.herokuapp.com/',
  endpoints: {
    loginPath: 'login',
    registerPath: 'auth/register'
  }
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const saveToken = (token) => {
	localStorage.setItem('token', token)
}

export const removeToken = () => {
	localStorage.removeItem('token')
}

export const isConnected = () => {
	return localStorage.getItem('token') != null
}