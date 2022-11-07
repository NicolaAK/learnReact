import React from 'react';
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/207/458/png-transparent-photoshop-cc-logo-thumbnail.png' />
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;