import { getGradeData, addGradeData, getUnusedGradeData, delGradeData, upGradeData } from "../../server"
export default {
    namespaced: true,
    state: {
        grade: [],
        unusedGrade: []
    },
    getters: {
        gradeData: (state) => {
            return [...state.grade, ...state.unusedGrade]
        }
    },
    mutations: {
        setData(state, action) {
            state.grade = action
        },
        setUnusedData(state, action) {
            state.unusedGrade = action
        },
        addData(state, action) {
            console.log(action, state.grade, '完整教室')
            state.grade.push(action)
        },
        addUnusedData(state, action) {
            console.log(action, state.grade, '残缺教室')
            state.unusedGrade.push(action)
        },
        delGrade(state, action) {
            let delArr = action.room ? 'grade' : 'unusedGrade';
            state[delArr] = state[delArr].filter(item => item.grade_id != action.grade_id)
        },
        upGrade(state, action) {
            let Arr = action.room_id ? 'grade' : 'unusedGrade';
            state[Arr] = state[Arr].map(item => {
                return item.grade_id == action.grade_id ? action : item
            })
        }
    },
    actions: {
        async GetGradeData({ commit }) {
            let data = await getGradeData();
            let data2 = await getUnusedGradeData()
            commit('setData', data.data)
            commit('setUnusedData', data2.data)
        },
        async AddGradeData({ commit }, GradeObj) {
            let data = await addGradeData(GradeObj);
            data.code && commit(GradeObj.room_id ? 'addData' : 'addUnusedData', { ...GradeObj, grade_id: data.grade_id })
           alert(data.msg)
        },
        async DelGradeData({ commit }, gradeObj) {
            let data = await delGradeData(gradeObj.grade_id)
            data.code && commit("delGrade", gradeObj)
        },
        async UpData({ commit }, newGrade) {
            //21:32
            let data = await upGradeData(newGrade);
            data.code && commit('upGrade', newGrade)

        }
    }
}