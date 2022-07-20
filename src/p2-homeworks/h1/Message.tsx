import React from 'react'
import style from './Message.module.css'
type MessageTypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypeProps) {
    let {avatar,message,name,time} = props
    return (
        <div className={style.task}>
            <div className={style.avatar}>
                <img src={avatar} alt="ava"/>
            </div>
            <div className={`${style.message} `}>
                <div>{name}</div>
                <div>{message}</div>
                <div className={style.time}>{time}</div>
            </div>

        </div>
    )
}

export default Message
