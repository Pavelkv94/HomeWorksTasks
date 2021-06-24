import React, { ChangeEvent } from "react";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number

}

// презентационная компонента (для верстальщика)
function Greeting(props: GreetingPropsType) {
    const inputClass = s.error; // need to fix with (?:)

    return (
        <div>
            <SuperInputText value={props.name} onChange={props.setNameCallback} error={props.error} />
            <SuperButton onClick={props.addUser}>add</SuperButton>
            <span className={s.totalCount}>{props.totalUsers}</span>
        </div>
    );
}

export default Greeting;
