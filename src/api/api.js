import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "195f83ec-6390-4397-b9c9-bef3cdd4400f" }
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

    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
    },
    getIsersId(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

