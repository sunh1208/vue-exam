import { Login, UserInfo } from '../../server/index';

export default {
    namespaced: true,
    state: {
        msg: ''
    },
    getters: {

    },
    mutations: {
        login(state, action) {
            state.msg = action.msg
            alert(action.msg)
            if (action.code == 1) {
                localStorage.setItem('token', JSON.stringify(action.token))
            }
        }
    },
    actions: {
        async loginAsync({ commit }, obj) {
            let data = await Login(obj)
            console.log(data)
            commit('login', data)
            if (data.code == 1) {
                localStorage.setItem('user', JSON.stringify(obj.user_name))
                let data2 = UserInfo(data.token)
                console.log(data2)
                return true
            }
        }
    }
}