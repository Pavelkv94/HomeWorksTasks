import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './HW5.module.css'

function Header() {
    const [menu, setMenu] = useState(!false);

    return (<div className={s.page}>
        <nav className={menu ? s.navContainer : s.disable}>
            <NavLink to="/pre-junior" className={s.item} activeClassName={`${s.active}`}> Pre-Junior</NavLink>
            <NavLink to="/junior" className={s.item} activeClassName={s.active}> Junior</NavLink>
            <NavLink to="/junior-plus" className={s.item} activeClassName={s.active}> Junior-Plus</NavLink>
            <NavLink to="/error" activeClassName={s.active} className={`${s.item} ${s.error}`}> Error</NavLink>
        </nav>
        <div className={s.btnContainer}>
            <button onClick={() => { setMenu(!menu) }} className={!menu ? s.btn : `${s.btn} ${s.btnUp}`}>{arrow(menu)} Menu{arrow(menu)}</button>
        </div>
        <hr />
    </div>
    );
}

export default Header;

const arrow = (menu: boolean) => {
    return (menu
        ? <span>&#8659;</span>
        : <span>&#8657;</span>)
}