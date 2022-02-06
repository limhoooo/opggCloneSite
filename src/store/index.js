import Vue from 'vue';
import Vuex from 'vuex';
import { getSummoner, getMostInfo, getMatchList, getMatchDetail } from "../api/opggApi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: [],
        ladderRank: [],
        previousTiers: [],
        leagues: [],
        mostInfoChampions: [],
        mostInfoRecentWinRate: [],
        champions: [],
        games: [],
        gamesCapyData: [],
        positions: [],
        summary: [],
        testtt: [],
    },
    getters: {

    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data.summoner;
            state.ladderRank = data.summoner.ladderRank;
            state.previousTiers = data.summoner.previousTiers;
            state.leagues = data.summoner.leagues; RecentWinRate
        },
        setMostInfo(state, data) {
            state.mostInfoChampions = data.champions.sort((a, b) => b.games - a.games);
            state.mostInfoRecentWinRate = data.recentWinRate;
        },
        setMatchList(state, data) {
            state.champions = data.champions;
            state.games = data.games;
            state.gamesCapyData = [...data.games];
            state.positions = data.positions;
            state.summary = data.summary;
        },
        setMatchDetail(state, data) {
            state.testtt = data;
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
        async getMatchListFnc({ commit }, summonerName) {
            try {
                const result = await getMatchList(summonerName);
                commit('setMatchList', result.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getMatchDetailFnc({ commit }, data) {
            try {
                const result = await getMatchDetail(data.summonerName, data.gameId);
                return result.data;
            } catch (error) {
                console.log(error);
            }
        }
    },


});
