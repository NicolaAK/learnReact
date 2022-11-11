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
        return profileAPI.getProfile(profileId)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response
            })
    },
    getStatus(profileId) {
        return instance.get(`profile/status/${profileId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    saveFoto(photoFile) {
        let formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },

}

