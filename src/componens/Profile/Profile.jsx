import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPosts/MyPost';
import s from './Profile.module.css'


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPost PostsData = {props.state.PostsData} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;