import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
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
        // onChange, onChangeOption
        onChangeOption(e.currentTarget.value)
    }
    value = value == 'x' ? 0 : value

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
