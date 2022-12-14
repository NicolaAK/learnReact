import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, acceptFollow, acceptUnFollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsersState, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <Preloader /> : null}
            </div>
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow,
        acceptFollow, acceptUnFollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)

