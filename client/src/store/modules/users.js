import axios from "axios";
export default {
    state: {
        name:localStorage.First_Name,
        result:Number(localStorage.Result)
    },
    getters: {
        getUser(state) {
            return state.name
        },
        getResults(state){
            return state.result
        }
    },
    actions: {
        true_answer({commit}){
            commit('up',{type:'result',items:1})
        },
        exit({commit}) {
            localStorage.clear();
            commit('del',{type:'name',items:''})   
        },
        localstore({commit}){
        commit('delStore',{type:'name',items:''})  
        },

        logon({ commit }, guest) {
            axios
                .post('http://localhost:3000/login/', {
                    guest: guest
                })
                .then(r => {
                    commit('set', { type: "name", items: r.data.user[0].First_Name }) //метод для отправки данных в мутацию
                    console.log(r)
                    localStorage.First_Name = r.data.user[0].First_Name;
                    localStorage.Last_Name = r.data.user[0].Last_Name;
                    localStorage.Login = r.data.user[0].Login;
                    localStorage.Id =r.data.user[0]._id;
                    localStorage.Role = r.data.user[0].Role;
                    localStorage.Actual = r.data.user[0].Actual;
                    localStorage.Result = r.data.user[0].Result;
                    localStorage.Token = r.data.user[0].token;

                })
                .catch(e => console.error(e))

        }
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
        },
        del(state,{ type, items }){
            state[type] = items

        },
        delStore(state,{ type, items }){
            state[type] = items
        },
        up(state,{type, items}){
            state[type]=state[type]+1
        }
    }

}
