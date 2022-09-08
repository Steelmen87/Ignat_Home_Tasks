import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import style from './common/c8-SuperDoubleRange/style.module.css'

function HW11_1() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [state, setState] = useState({
            value: 5,
            value2: 10,
            value3: 10,
            value4: {
                min: 5,
                max: 10,
            },
            value5: {
                min: 3,
                max: 7,
            }
        }
    )
    return (
        <div>
            <form className={style.form}>
                <InputRange
                    draggableTrack
                    maxValue={100}
                    minValue={0}
                    //@ts-ignore
                    onChange={value => setState({value5: value})}
                    onChangeComplete={value => console.log(value)}
                    value={state.value5}/>
            </form>
        </div>
    )
}

export default HW11_1
