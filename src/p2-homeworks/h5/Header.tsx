import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './HW5.module.css'

type HeaderType = {
    disable: boolean
}


function Header() {
    const [menu, setMenu] = useState(false)

    return (<div>
        <nav className={menu ? s.navContainer : s.disable}>
            <div className={s.item} ><NavLink to="/pre-junior" activeClassName={s.active}> Pre-Junior</NavLink></div>
            <div className={s.item} ><NavLink to="/junior" activeClassName={s.active}> Junior</NavLink></div>
            <div className={s.item} ><NavLink to="/junior-plus" activeClassName={s.active}> Junior-Plus</NavLink></div>
            <div className={`${s.item} ${s.error}`} ><NavLink to="/error" activeClassName={s.active}> Error</NavLink></div>
        </nav>
        <div className={s.btnContainer}>
            <button onClick={() => { setMenu(!menu) }} className={s.btn}>&#8679; Menu &#8679;</button>
        </div>
        <hr />
    </div>
    );
}

export default Header;
