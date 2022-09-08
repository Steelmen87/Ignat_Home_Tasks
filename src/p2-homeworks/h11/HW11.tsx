import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

export type stateType = {
    value: number,
    value5: {
        min: number,
        max: number,
    }
}

function HW11() {

    const [state, setState] = useState<stateType>({
            value: 5,
            value5: {
                min: 5,
                max: 7,
            },
        })
    ;
    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <SuperRange
                    step={1}
                    state={state}
                    setState={setState}
                />
            </div>
            <div style={{marginBottom: '30px'}}>
                <SuperDoubleRange
                    step={1}
                    state={state}
                    setState={setState}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW11
