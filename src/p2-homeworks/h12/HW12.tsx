import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, colorType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {
    const theme = useSelector<AppStoreType, colorType>(state => state.themes.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (color: any) => {
        let col = (color === '0') ? 'dark' : (color === '1') ? 'red' : 'some'
        dispatch(changeThemeAC(col as colorType))
    }
    let value = (theme === 'dark') ? 0 : (theme === 'red') ? 1 : 2
    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homeworks 12
            </div>
            <SuperSelect
                value={value}
                options={['dark', 'red', 'some']}
                onChange={onChangeCallback}/>

            <SuperRadio
                value={value}
                options={['dark', 'red', 'some']}
                onChange={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
