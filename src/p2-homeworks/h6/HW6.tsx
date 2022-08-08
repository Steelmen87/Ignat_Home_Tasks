import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './Style.module.css'
import png from './../../img/pngegg.png'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        console.log('save')
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        console.log('restoreState')
        let state = restoreState<string>('editable-span-value', value)
        setValue(state)
    }


    return (
        <div className={s.main}>
            HW6

            {/*should work (должно работать)*/}

            <div>
                <SuperEditableSpan
                    spanClassName={s.SpanClassName}
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>

            <div className={s.style_button}>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
