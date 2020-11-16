import axios from 'axios'

export const register = newUser => {

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
      localStorage.setItem('usertoken', response.data)
      return response.data

    })
    .catch(err => {
      console.log(err)
    })
}
