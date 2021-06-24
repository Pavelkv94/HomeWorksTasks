import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    let now = new Date();

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(now)
    const [show, setShow] = useState<boolean>(false)

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const stop = () => {
        // stop
        clearTimeout(timerId)
        setTimerId(0)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            console.log('tick')
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = `${hours} : ${minutes} : ${seconds}` // fix with date
    const stringDate = now.toString() // fix with date

    return (
        <div className={s.clock}>
            <div
                className={s.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}

                </div>
            )}
            <div className={s.btn}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
