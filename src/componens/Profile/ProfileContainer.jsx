import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';
import axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from "../../Redux/profile-reducer";
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { usersAPI } from "../../api/api";

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
    usersAPI.getIsersId(profileId)
      .then(response => {
        this.props.setUserProfile(response)
      })
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));