import React from 'react'
import b from "./AlternativeMessage.module.css"


type MessageType2 = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: MessageType2) {
    return (
        <div className={b.container}>


            <div className={b.wrap}>
                <div className={b.name}>{props.name}</div>
                <div className={b.message}>{props.message}</div>
                <div className={b.time}>{props.time}</div>
            </div>
            <div className={b.triangle}><div className={b.round}></div></div>
            <div className={b.ava}><img src={props.avatar} alt="" /></div>
        </div>
    )
}

export default AlternativeMessage
