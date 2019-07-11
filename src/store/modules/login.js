import { Login, UserInfo } from '../../server/index';


export default {
    namespaced: true,
    state: {
        msg: ''
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        async loginAsync({ commit }, obj) {
            let data = await Login(obj)
            alert(data.msg)
            if (data.code == 1) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(obj.user_name))
                return true
            }
        },
        async userInfo({ commit }) {
            console.log(99999, localStorage.getItem('token'))
            let data = UserInfo()
            console.log(data)
        }
    }
}