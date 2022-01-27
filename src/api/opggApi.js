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