import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import style from './pages/style.module.css'

function Header() {
    return (
        <div>
            <input type="checkbox" id="hmt" className={style["hidden-menu-ticker"]}/>
            <label className={style["btn-menu"]} htmlFor="hmt">
                <span className={style.first}/>
                <span className={style.second}/>
                <span className={style.third}/>
            </label>
            <ul className={style["hidden-menu"]}>
                <li><NavLink to={'/'}>Pre Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR}>Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIORPlUS}>Junior Plus</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
