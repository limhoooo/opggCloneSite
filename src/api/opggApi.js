import { getInstance, postInstance } from "./index";

export const getSummoner = async (name) => {
    const response = await getInstance.get(
        `${name}`,
    );
    return response;
};
export const submit = async data => {
    const response = await postInstance.post(
        `/submit`,
        data
    );
    return response;
};