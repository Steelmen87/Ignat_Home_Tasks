import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './styles.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [dateNow, setDate] = useState<string>('')
    const [show, setShow] = useState<boolean>(false)
    const [stringTime, setStringTime] = useState<string>('')

    const stop = () => {
        clearInterval(timerId)
    }

    const TimeNow = () => {
        const date = new Date()
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        setStringTime(`${hour}:${minutes}:${seconds}`)
    }


    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            TimeNow()
        }, 1000)
        setTimerId(id)
    }
    let stringDate = ''
    const onMouseEnter = () => {
        DataShow()
        setDate(stringDate)
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const DataShow = () => {
        const date = new Date()
        const day = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()
        const month = date.getMonth() < 10 ? ('0' + date.getMonth()) : date.getMonth()
        stringDate = `${day}.${month}.${date.getFullYear()}`
    }

    return (
        <div className={s.clock}>
            <div className={s.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            {show && (<div> {dateNow} </div>)}
            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop} className={s.items}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
