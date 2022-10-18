import React from "react";
import s from "./Users.model.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
                followed: false, fullName: "Nikolay", status: 'Helloy', location: { city: "Kracnoyrsk", country: "Russia" }
            },
            {
                id: 2, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
                followed: true, fullName: "Dmitry", status: 'Kekeke', location: { city: "Moscow", country: "Russia" }
            },
            {
                id: 3, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
                followed: true, fullName: "Kazbek", status: 'Calo', location: { city: "Kiev", country: "Ukrain" }
            },
            {
                id: 4, photoUrl: "https://vraki.net/sites/default/files/inline/images/1_6.png",
                followed: false, fullName: "Nika", status: 'Cococc', location: { city: "Minsk", country: "Belarus" }
            },
        ]
        )
    }

    return (<div>
        {
            props.users.map(u => <div key={u.id} >
                <span>
                    <div className="ava">
                        <img src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
    )
}

export default Users;