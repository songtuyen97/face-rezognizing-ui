import {fetchInfoIdol} from '../../../api/recognition/recognition';

let state = {
    info_idol: {
        avatar: 'unknown',
        full_name: 'unknown',
        basic_info: {
            country: 'unknown',
            birthday: 'unknown',
            gender: 'unknown',
        },
        job_info: {
            name: 'unknown',
            start_time: 'unknown',
            end_time: 'unknown'
        },
        extension: [
            {
                name: 'unknown',
                url: 'unknown'
            },
            {
                name: 'unknown',
                url: 'unknown'
            }
        ]
    },
    error: null
}

let mutations = {
    setInfoIdol(state, payload) {
        state.info_idol = payload
    },
    setError(state, payload) {
        state.error = payload;
    }
}

let actions = {
    fetchInfoIdol({commit}, payload) {
        return fetchInfoIdol(payload).then(response=> {
            let data = response.data;
            if(response.status === 200) {
                commit("setInfoIdol", data.data);
            } else {
                commit("setError", data);
            }
        })
    },
    setError({commit}, payload) {
        commit('setError', payload);
    }
}

let getters = {
    info_idol: state=> state.info_idol,
    error: state=> state.error
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}