import axios from 'axios'

export const signUpUser = newUserInfo => {

  return axios
    // .post(`${process.env.REACT_APP_API_URL}/signup`, {
    .post(`http://localhost:8000/users/signup`, {
      // `${process.env.REACT_APP_API_URL}/some-route`
      userName: newUserInfo.userName,
      email: newUserInfo.email,
      password: newUserInfo.password
    })
    .then(response => {
      console.log(response)
      console.log('Registered')
      console.log(`RESPONSE ON LOGIN BACKEND: `,response.data.newUser)
      localStorage.setItem('usertoken', response.data.newUser.email)
      return response.data
    })
}

export const googleRegister = newUser => {

  return axios
    .post(`${process.env.REACT_APP_API_URL}/signup`, {
      // `${process.env.REACT_APP_API_URL}/some-route`
      userName: newUser.userName,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    // .post(`${process.env.REACT_APP_API_URL}/login`, {
    .post(`http://localhost:8000/users/login`, {
      userName: user.userName,
      email: user.email,
      password: user.password
    })
    .then(response => {

      // The Logged In User Data
      console.log(`RESPONSE ON LOGIN BACKEND: `,response)
      console.log(`RESPONSE ON LOGIN BACKEND: `,response.data.LoggedInUser)

      // Set User data to localstorage to keep track of user
      localStorage.setItem('usertoken', response.data.LoggedInUser.id)
      
      return response.data.LoggedInUser

    })
    .catch(err => {
      console.log('ERROR FROM Login')
      console.log(err)
    })
}


export const logout = (e) => {
  e.preventDefault()
  localStorage.removeItem('usertoken')
  this.props.history.push(`/login`)
}
