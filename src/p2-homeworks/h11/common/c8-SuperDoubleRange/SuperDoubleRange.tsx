import React from 'react'
import InputRange from "react-input-range";
import style from './style.module.css'
import 'react-input-range/lib/css/index.css';
import {stateType} from "../../HW11";

type SuperDoubleRangePropsType = {
    setState: (value: stateType) => void
    state: stateType
    step:number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({state, step,setState}) => {

    return (
        <>
            <form className={style.form}>
                <InputRange
                    step={step}
                    draggableTrack
                    maxValue={50}
                    minValue={0}
                    //@ts-ignore
                    onChange={value => setState({value5: value})}
                    value={state.value5}/>
            </form>
        </>
    )
}

export default SuperDoubleRange
