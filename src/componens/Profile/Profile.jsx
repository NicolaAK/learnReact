import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostContainer from './MyPosts/MyPostContainer';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostContainer store={props.store}/>
    </div>
  )
}

export default Profile;