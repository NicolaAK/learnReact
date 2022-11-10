import React from 'react';
import Preloader from '../../common/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHook from "./ProfileStatusWithHook"
import noName from "./../../../assets/image/noName.png"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length){
            props.saveFoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.avatar}>
                <div className={s.avatarFoto}>
                    <img src={props.profile.photos.large || noName} />
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
                    <input type={"file"} onChange={mainPhotoSelected}></input>
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