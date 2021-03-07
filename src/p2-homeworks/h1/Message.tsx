
import React from 'react'
import a from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={a.container}>
            <div className={a.ava}><img src={props.avatar} alt=""/></div>
            <div className={a.triangle}><div className={a.round}></div></div>
            <div className={a.wrap}>
            <div className={a.name}>{props.name}</div>
            <div className={a.message}>{props.message}</div>
            <div className={a.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
