export default {
    state: {
        result:null
    },
    getters: {
        getResult(state) {
            return state.result
        }
    },
    actions: {

    },
    mutations: {
        updateResult(state, value) {
            state.result=value;
          }
    }

}