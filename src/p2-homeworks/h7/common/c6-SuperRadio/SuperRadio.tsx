import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {colorType} from "../../../h12/bll/themeReducer";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: string[]
    onChangeOption?: (option: string) => void
    onChange?: (option: string) => void
    value?:any
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    value = value ? value : (value == 'x') ? 0 : value

    const mappedOptions: Array<any> = options ?
        options.map((text, i) => (
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    name={name}
                    value={i}
                    onChange={onChangeCallback}
                    checked={value == i}
                />
                {text}
            </label>
        )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
