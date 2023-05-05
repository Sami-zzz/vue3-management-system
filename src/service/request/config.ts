let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://httpbin.org'
  console.log(process.env.NODE_ENV)
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/prod'
} else {
  BASE_URL = '/test'
}

export { BASE_URL, TIME_OUT }
