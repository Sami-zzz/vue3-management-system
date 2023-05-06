import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import 'normalize.css'
import './assets/css/index.less'

// import myRequest from './service'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

//测试请求
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// myRequest
//   .request<DataType>({
//     url: '/post',
//     method: 'POST',
//     showLoading: true,
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('request单独的请求拦截器')
//         return config
//       }
//     }
//   })
//   .then((res) => {
//     console.log('***********')
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
