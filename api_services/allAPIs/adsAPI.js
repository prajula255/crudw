import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";
export const adsAPI = async (data,headers) => {
    return await commonAPI("post", `${baseURL}/ads`, data, headers)
}
export const getUserAds = async (userId, headers) => {
    return await axios.get(`https://your-api-url.com/ads/user/${userId}`, { headers });
};
