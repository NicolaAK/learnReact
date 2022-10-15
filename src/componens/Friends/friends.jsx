import React from 'react';
import s from './friends.module.css';
import Friend from './Friend/friend'


let Friends = (props) => {


    let friendElement = props.sidebar.map(el => (<Friend name={el.name} />))

    return (
        <div>
            <a>
                Friends
            </a>
            <div className= {s.friendElement}>
                {friendElement}
            </div>

        </div>
    )
};

export default Friends