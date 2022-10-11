import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPosts/MyPost';
import s from './Profile.module.css'


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPost PostsData = {props.state.PostsData} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;