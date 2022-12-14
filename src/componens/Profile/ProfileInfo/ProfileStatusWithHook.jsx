import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                   <b>STATUS</b>: <span onDoubleClick={activateEditMode} >{props.status || "NO STATUS"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}></input>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHook;