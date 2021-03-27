import axios from "axios";
import authHeader from './auth-header'

const URL=process.env.REACT_APP_URL

class AuthService {
  login(data) {
    return axios.post(`${URL}/auth/login`, data)
    .then(res => {
      let userInfo=res.data.data
      localStorage.setItem('user',JSON.stringify(userInfo.token))  
      return userInfo;
    })
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(data) {
    return axios.post(`${URL}/auth/signin`, data)
    .then(res => {
      let userInfo=res.data.data
      localStorage.setItem('user',JSON.stringify(userInfo))
      return userInfo;
    })
  }

  checkUser() {
      return axios.get(`${URL}/auth`, { headers: authHeader()}).then(
      res=>{
        let userInfo=res.data
        return userInfo;
      })
    }

    checkAdmin() {
        return axios.get(`${URL}/auth/admin`, { headers: authHeader()}).then(
        res=>{
          let userInfo=res.data
          return userInfo;
        })
    }

  }

  


export default new AuthService();