import React, { ChangeEvent } from 'react'
import s from './style.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        ...restProps//
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([+e.currentTarget.value, +e.currentTarget.value])
    }

    return (
        <div className={s.container}>
            DoubleRange
            <br />

            {/* <input
                type={'range'}
                onChange={onChangeCallback}


                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            /> */}

            <input type="range" className={s["slider"]} {...restProps} onChange={onChangeCallback} />
            <input type="range" className={s["slider"]} {...restProps} onChange={onChangeCallback} />

        </div>
    )
}

export default SuperDoubleRange
