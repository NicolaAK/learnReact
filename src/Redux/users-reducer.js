const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        // {
        //     id: 1, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
        //     followed: false, fullName: "Nikolay", status: 'Helloy', location: { city: "Kracnoyrsk", country: "Russia" }
        // },
        // {
        //     id: 2, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
        //     followed: true, fullName: "Dmitry", status: 'Kekeke', location: { city: "Moscow", country: "Russia" }
        // },
        // {
        //     id: 3, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
        //     followed: true, fullName: "Kazbek", status: 'Calo', location: { city: "Kiev", country: "Ukrain" }
        // },
        // {
        //     id: 4, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
        //     followed: false, fullName: "Nika", status: 'Cococc', location: { city: "Minsk", country: "Belarus" }
        // },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }


}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;