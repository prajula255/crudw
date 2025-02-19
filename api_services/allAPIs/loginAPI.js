import { baseURL } from "../baseURL"
import { commonAPI } from "../commonAPI"

export const loginAPI = async (data) => {
    return await commonAPI("post", `${baseURL}/log`, data, "")
}