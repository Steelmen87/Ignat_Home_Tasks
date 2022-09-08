import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import InputRange from "react-input-range";
import style from "../c8-SuperDoubleRange/style.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    setState: (value: any) => void
    state: any
    step: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type,
        onChange,
        className,
        state, setState, step,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const setValueHandler = (value: any) => {
        if (value + step <= state.value5.max) {
            setState({value5: {min: value, max: state.value5.max}})
        }
    }
    return (
        <>
            <form className={style.form}>
                <InputRange
                    step={step}
                    maxValue={50}
                    minValue={0}
                    value={state.value5.min}
                    onChange={setValueHandler}
                />
            </form>
        </>
    )
}

export default SuperRange
