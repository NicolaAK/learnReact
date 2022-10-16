const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 4, message: body });
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;