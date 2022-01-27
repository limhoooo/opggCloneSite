import Vue from 'vue';
import Vuex from 'vuex';
import { getSummoner, getMostInfo } from "../api/opggApi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: [],
        ladderRank: [],
        previousTiers: [],
        leagues: [],
        mostInfo: []
    },
    getters: {

    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data.summoner;
            state.ladderRank = data.summoner.ladderRank;
            state.previousTiers = data.summoner.previousTiers;
            state.leagues = data.summoner.leagues;
        },
        setMostInfo(state, data) {
            state.mostInfo = data;
        }
    },
    actions: {
        async getSummonerFnc({ commit }, data) {
            try {
                const result = await getSummoner(data);
                commit('setUserInfo', result.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getMostInfoFnc({ commit }, data) {
            try {
                const result = await getMostInfo(data);
                commit('setMostInfo', result.data)
            } catch (error) {
                console.log(error);
            }
        }
    },

});
