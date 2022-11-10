import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, saveFoto } from "../../Redux/profile-reducer";
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {

  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    this.props.getUserProfile(profileId)
    this.props.getStatus(profileId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} isOwer={!this.props.router.params.profileId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} saveFoto={this.props.saveFoto}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, saveFoto }), withRouter,
  withAuthRedirect
)(ProfileContainer);