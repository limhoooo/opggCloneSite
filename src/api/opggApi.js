import { getInstance } from "./index";

export const getSummoner = async (summonerName) => {
    const response = await getInstance.get(
        `${summonerName}`,
    );
    return response;
};
export const getMostInfo = async (summonerName) => {
    const response = await getInstance.get(
        `${summonerName}/mostInfo` ,
    );
    return response;
};
export const getMatchList = async (summonerName) => {
    const response = await getInstance.get(
        `${summonerName}/matches` ,
    );
    return response;
};
export const getMatchDetail = async (summonerName, gameId) => {
    const response = await getInstance.get(
        `${summonerName}/matchDetail/${gameId}` ,
    );
    return response;
};
