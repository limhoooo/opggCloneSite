import Vue from 'vue';
import Vuex from 'vuex';
import { getSummoner, getMostInfo, getMatchList } from "../api/opggApi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: [],
        ladderRank: [],
        previousTiers: [],
        leagues: [],
        mostInfo: [],
        champions: [],
        games: [],
        positions: [],
        summary: [],
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
        },
        setMatchList(state, data) {
            state.champions = data.champions;
            state.games = data.games;
            state.positions = data.positions;
            state.summary = data.summary;
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
        },
        async getMatchListFnc({ commit }, data) {
            try {
                const result = await getMatchList(data);
                commit('setMatchList', result.data)
            } catch (error) {
                console.log(error);
            }
        }
    },


});
