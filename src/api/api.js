import * as axios from "axios";
import {apiKey} from "./ApiKey";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": apiKey
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=
            ${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    onUserFollow(userId) {
        return instance.post(`follow/${userId}`, {},).then(response => {
            return response.data.resultCode
        });
    },
    onUserUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode
        });
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const securityApi = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
}

