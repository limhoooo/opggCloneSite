import axios from 'axios';

function createGetInstance() {
    return axios.create({
        baseURL: `https://codingtest.op.gg/api/summoner/`,
    });
}
function createPostInstance() {
    return axios.create({
        baseURL: process.env['VUE_APP_SERVER'],
    });
}

export const getInstance = createGetInstance();
export const postInstance = createPostInstance();
