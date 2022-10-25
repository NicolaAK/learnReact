import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "58106f4e-ad66-43de-a792-a97553840b23" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getIsersId(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    }
}

