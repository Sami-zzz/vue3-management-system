import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log('请求错误')
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return err
  }
)
