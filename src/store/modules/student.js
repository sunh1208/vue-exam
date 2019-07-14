import { getStudentData, getUnusedStudent } from "../../server"
export default {
    namespaced: true,
    state: {
        student: [],
        unusedStudent: [],
        primary: null
    },
    getters: {
        studentData: (state) => {
            return [...state.unusedStudent, ...state.student].filter(item => {
                if (state.primary == null) { return true }
                return item.student_name == state.primary.student_name
            })
        }
    },
    mutations: {
        addRoomData(state, actions) {
            state.room.push(actions)
        },
        setStudentData(state, action) {
            state.student = action.student
            state.unusedStudent = action.unusedStudent;
        },
        delRoomData(state, action) {
            state.room = state.room.filter((item) => {
                return item.room_id !== action.room_id
            })
        },
        primaryData(state, action) {    //添加筛选条件
            state.primary = action;
        },
        resolve(state) {            //清空筛选条件
            state.primary = null
        }
    },
    actions: {
        async GetStudentData({ commit }) {
            let data = await getStudentData();
            let data2 = await getUnusedStudent();
            commit('setStudentData', { student: data.data, unusedStudent: data2.data })
        },
        PrimaryData({ commit }, primary) {
            console.log(123133)
            commit('primaryData', primary)
        },
        resolveData({ commit }) {
            commit('resolve')
        }
    }
}
