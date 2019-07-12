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
            if (data.code == 1) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(obj.user_name))
                return { flag: true, msg: data.msg }
            }
            return { flag: false, msg: data.msg }
        },
        async userInfo({ commit }) {
            let data = UserInfo()
        }
    }
}