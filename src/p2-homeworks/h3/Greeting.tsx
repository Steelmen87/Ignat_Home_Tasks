import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onKeyPressHandler, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : ''  // need to fix with (?:)
    const addUserHandler = () => addUser()
    return (
        <div className={s.greeting}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressHandler}
            />

            <button
                className={s.button_class}
                onClick={addUserHandler}>add</button>
            <span className={s.totalU}>{totalUsers}</span>
            <br/>
            <span className={s.error_span}>{error}</span>

        </div>
    )
}

export default Greeting
