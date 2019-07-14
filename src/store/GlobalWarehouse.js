import { getSubjectData } from "../server"
export default {
    state: {
        subject: []
    },
    getters: {
        // / exam / subject
        gradeData: (state) => {
            console.log(state.grade)
            return state.grade
        }
    },
    mutations: {
        setSubjectData(state, action) {
            console.log(action, 'subject')
            state.subject = action
        }
    },
    actions: {
        async GetSubjectData({ commit }) {
            let data = await getSubjectData();
            commit('setSubjectData', data.data)
        }
    }
}