import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

export const adsAPI = async (data,headers) => {
    return await commonAPI("post",`${baseURL}/ads`, data, headers)
}

