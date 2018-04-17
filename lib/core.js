import axios from 'axios'
/*
if(process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://core.watchout.tw'
} else if(process.env.NODE_ENV === 'staging') {
  axios.defaults.baseURL = 'https://staging.core.watchout.tw'
} else {
  axios.defaults.baseURL = 'https://dev.core.watchout.tw'
}
*/
axios.defaults.baseURL = 'https://dev.core.watchout.tw'

export function getTopics() {
  return axios.get('/park/topics')
}
