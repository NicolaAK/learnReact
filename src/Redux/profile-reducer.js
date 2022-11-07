import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = "ADD-POST";

const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

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
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }

        }
        default:
            return state;
    }


}
export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getIsersId(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export default profileReducer;