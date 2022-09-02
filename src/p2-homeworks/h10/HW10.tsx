import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";
import s from './Style.module.css'
import style from '../h9/styles.module.css'
import Preloader from "../../common/Preloader/Preloader";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    console.log(loading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log(loading)
    };

    return (
        <div className={s.hw}>
            <span>
                homeworks 10
            </span>
            <div className={`${style.clock} ${s.dop_param}`}>
                <div className={s.block}>
                    {loading
                        ? <Preloader/>
                        : <div>
                            <SuperButton
                                onClick={setLoading}
                                className={s.set_loading}>
                                set loading...
                            </SuperButton>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default HW10
