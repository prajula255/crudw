import { baseURL } from "../baseURL";
import { commonAPI } from "../commonAPI";

export const userUpdateAPI = async (data, headers) => {
    return await commonAPI("post", `${baseURL}/update`, data, headers)
}
