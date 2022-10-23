import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/image/noName.png"
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div>

        {
            props.users.map(u => <div key={u.id} >
                <span>
                    <NavLink to={"/profile/" + u.id}>
                        <div className={s.ava}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>
            )
        }
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
            })}
        </div>
    </div>
    )
}

export default Users;