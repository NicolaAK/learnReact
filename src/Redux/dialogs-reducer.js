const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogsData: [
        { id: 1, name: 'Nicolay', },
        { id: 2, name: 'Dima', },
        { id: 3, name: 'Sacha', },
        { id: 4, name: 'Pety', },
        { id: 5, name: 'Jony', },
        { id: 6, name: 'Tarantino', },
    ],
    messagesData: [
        { id: 1, message: 'Hi', },
        { id: 2, message: 'Yes', },
        { id: 3, message: 'No', },
    ],

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessage;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: body }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessage) => ({ type: SEND_MESSAGE, newMessage })

export default dialogsReducer;