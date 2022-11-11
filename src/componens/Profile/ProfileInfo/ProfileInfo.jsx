import React from 'react';
import Preloader from '../../common/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHook from "./ProfileStatusWithHook"
import noName from "./../../../assets/image/noName.png"
import { useState } from 'react';


const ProfileInfo = (props) => {
    const { editMode, setEditMode } = useState(false)
    if (!props.profile) {
        return <Preloader />
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.saveFoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.avatar}>
                <div className={s.avatarFoto}>
                    <img src={props.profile.photos.large || noName} />
                    <input type={"file"} onChange={mainPhotoSelected}></input>
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
                    {editMode
                        ? <ProfileDataForm profile={props.profile} />
                        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} />}
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My prof skills</b>: {props.profile.lookingForAJobDescription}
                </div>}
            <div>
                <b>About me</b>: {props.profile.aboutMe ? "yes" : "no"}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTile={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const ProfileDataForm = (props) => {
    return (
        <div>
            <div>
                <button onClick={props.goToEditMode}>EDIT</button>
            </div>
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My prof skills</b>: {props.profile.lookingForAJobDescription}
                </div>}
            <div>
                <b>About me</b>: {props.profile.aboutMe ? "yes" : "no"}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTile={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Contact = ({ contactTile, contactValue }) => {
    return (
        <div><b>{contactTile}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;