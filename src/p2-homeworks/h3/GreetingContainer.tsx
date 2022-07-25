import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        setError('')
    }
    const addUser = () => {
        if (name.trim() === '') {
            setError('Поле не заполнено')
            return
        }
        if (name) {
            addUserCallback(name)
            setName('')
            alert(`Hello  ! ${name}`)
            setError('')// need to fix
        }


    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (name === '') {
            setError('Поле не заполнено')
            return;
        }

        if (e.key === 'Enter') {
            addUser()
            setError('')
        }
    }
    const totalUsers = users.length // need to fix
    return (
        <Greeting
            onKeyPressHandler={onKeyPressHandler}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
