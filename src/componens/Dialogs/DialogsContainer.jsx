import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage));
        },
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);