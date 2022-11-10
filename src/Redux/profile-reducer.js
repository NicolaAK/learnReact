import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_FOTO_SUCCESS = "SAVE-FOTO-SUCCESS";

let initialState = {
    PostsData: [
        { id: 1, message: 'Helloy', like: 15, },
        { id: 2, message: 'Helloy, my friends', like: 0, },
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPost,
                like: 0,
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }

        }
        case DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id !== action.postId),
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SAVE_FOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const saveFotoSuccess = (photos) => ({ type: SAVE_FOTO_SUCCESS, photos })

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getIsersId(userId)
        dispatch(setUserProfile(response))
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export const saveFoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.saveFoto(file)
        if (response.data.resultCode === 0) {
            dispatch(saveFotoSuccess(response.data.data.photos))
        }
    }
}

export default profileReducer;