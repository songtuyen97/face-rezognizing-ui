let state = {
    count: 0
}

let mutations = {
    setCount(state, payload) {
        state.count += payload;
    }
}

let actions = {
    setCount({commit}, payload) {
        commit('setCount', payload);
    }
}

let getters = {
    count: state=> state.count
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}