import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import s from './Select.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption?: (option: string) => void
    onChange?: (color: string) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options ? options.map((text, i) => {
        return <option
            className={s.option}
            value={i} key={text + ' ' + i}
        >{text}</option>
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e.currentTarget.value)
        onChangeOption && onChangeOption(e.target.value)
    }

    return (
        <select
            className={s.select}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
