import Vue from 'vue';
import Vuex from 'vuex';
import { getSummoner, submit } from "../api/opggApi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userI11nfo: [],
    },
    getters: {

    },
    mutations: {
        setUserInfo(state, data) {
            state.userI11nfo = data;
        },
        setAnswerList(state, data) {
            state.answerList = [...data]
            state.answerFlag = true;
        }
    },
    actions: {
        async getSummonerFnc({ commit }, data) {
            try {
                const result = await getSummoner(data);
                console.log(result);
                commit('setUserInfo', result.data)
            } catch (error) {
                console.log(error);
            }
        },
        async submit({ commit }, data) {
            try {
                const result = await submit(data);
                commit('setAnswerList', result.data.results)
            } catch (error) {
                console.log(error);
            }
        }
    },

});
