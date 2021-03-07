import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string 
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void
    addUser:()=>void
    error: string | null 
    totalUsers: number 

}

// презентационная компонента (для верстальщика)
function Greeting(props: GreetingPropsType) {
    const inputClass = s.error; // need to fix with (?:)

    return (
        <div>
            <input value={props.name} onChange={props.setNameCallback} className={props.error ?inputClass : ""} />
            {props.error && <span className={s.errorMessage}>{props.error}</span>}
            <button onClick={props.addUser}>add</button>
            <span className={s.totalCount}>{props.totalUsers}</span>
        </div>
    );
}

export default Greeting;
