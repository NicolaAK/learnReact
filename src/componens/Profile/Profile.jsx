import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo saveFoto={props.saveFoto} isOwer={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostContainer />
    </div>
  )
}

export default Profile;