import axios from "./axios";

export const lonin = (param) => {
    return axios.request({
        url: '/api/login',
        method: 'post',
        data: param
    })
}