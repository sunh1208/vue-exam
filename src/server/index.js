import axios from 'axios';

let request = axios.create({                         //开发环境|生产环境                     
    baseURL: process.env.NODE_ENV !== "production" ? "/api" : ""
})

request.interceptors.request.use((config) => {
    config.headers.authorization = window.localStorage.getItem('token')
    return config
}, (error) => {
    return Promise.reject(error)
})
request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

let get = (url, params) => request.get(url, { params })
let post = (url, data) => request.post(url, { ...data })
let deletes = (url, data) => request.delete(url, { data })
let put = (url, data) => request.put(url, { data })


export let Login = (params) => {
    return post('/user/login', params)
    //  axios.post('/api/user/login', { ...params })
}
export let UserInfo = () => {
    return get('/user/userInfo')
}

export let Fun2 = () => { }
export let Fun3 = () => { }


