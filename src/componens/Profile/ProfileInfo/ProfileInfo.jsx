import React from 'react';
import Preloader from '../../common/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg' />
            </div>
            <div className={s.avatar}>
                <div className={s.avatarFoto}>
                    <ProfileStatus status="status" />
                    <img src={props.profile.photos.large} />
                </div>

                <div>
                    {props.profile.fullName} 
                </div>
                <div>
                    {props.profile.userId}
                </div>
            </div>
        </div>


    )
}

export default ProfileInfo;