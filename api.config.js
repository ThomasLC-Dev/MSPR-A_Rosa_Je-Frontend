import VueJwtDecode from 'vue-jwt-decode'

export const config = {
  apiBase: 'https://a-rosa-je.herokuapp.com/',
  endpoints: {
    loginPath: 'login',
    registerPath: 'auth/register',
    addressesPath: 'api/addresses',
    attachmentFilesPath: 'api/attachment-files',
    plantsPath: 'api/plants',
    slotsPath: 'api/slots',
    usersPath: 'api/users',
    userRolesPath: 'api/user-roles',
    chatsPath: 'api/chats',
    messagesPath: 'api/messages'
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

export const getCurrentUserId = () => {
    return VueJwtDecode.decode(getToken()).userId
}