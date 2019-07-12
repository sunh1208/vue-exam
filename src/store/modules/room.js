import { getRoomData, addRoomData, delRoomData } from "../../server"
export default {
    namespaced: true,
    state: {
        room: [],
    },
    getters: {
        roomData: (state) => {
            return state.room.sort((a, b) => {
                return a.room_text - b.room_text;
            })
        }
    },
    mutations: {
        addRoomData(state, actions) {
            state.room.push(actions)
        },
        setRoomData(state, action) {
            console.log(action,'123')
            state.room = action
        },
        delRoomData(state, action) {
            state.room = state.room.filter((item) => {
                return item.room_id !== action.room_id
            })
        }
    },
    actions: {
        async GetRoomData({ commit }) {
            let data = await getRoomData();

            commit('setRoomData', data.data)
        },
        async addRoomAsync({ commit }, room_text) {
            let data = await addRoomData(room_text);
            data.code && commit('addRoomData', { room_text, room_id: data.room_id })
        },
        async delRoomAsync({ commit }, room_id) {
            let data = await delRoomData(room_id);
            data.code && commit('delRoomData', { room_id })
        }
    }
}
