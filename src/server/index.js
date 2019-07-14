import axios from 'axios';

let request = axios.create({                         //开发环境|生产环境                     
    baseURL: process.env.NODE_ENV !== "production" ? "/api" : ""
})

request.interceptors.request.use((config) => {
    console.log(window.localStorage.getItem('token'))
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

let get = (url, params) => { console.log(params, 9999); return request.get(url, { params }) }
let post = (url, data) => request.post(url, { ...data })
let deletes = (url, data) => request.delete(url, { data })
let put = (url, data) => request.put(url, { ...data })


export let Login = (params) => {
    return post('/user/login', params)
}
export let UserInfo = () => {
    return get('/user/userInfo', {})
}

export let getGradeData = () => {
    return get('/manger/grade', {})
}
export let getRoomData = () => {
    return get('/manger/room', {})
}

export let addRoomData = (roomText) => {
    return post('/manger/room', { room_text: roomText })
}

export let delRoomData = (room_id) => {
    return deletes('/manger/room/delete', { room_id })
}
export let getSubjectData = () => {
    return get('/exam/subject')
}
export let getUnusedGradeData = () => {
    return get('/manger/grade/new')
}
export let addGradeData = (obj) => {
    return post('manger/grade', obj)
}

export let delGradeData = (grade_id) => {
    return deletes('/manger/grade/delete', { grade_id })
}

export let upGradeData = (newGrade) => {
    return put('/manger/grade/update', newGrade)
}

export let getStudentData = () => {
    return get('/manger/student')
}

export let getUnusedStudent = () => {
    return get('/manger/student/new')
}
