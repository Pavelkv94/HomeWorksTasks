import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { api } from "./api";
import s from "./HW13.module.css";


function HW13() {
    let [value, setValue] = useState(false);
    let a;
    useEffect(() => {
        api.success(value)
            .then(res => {
                debugger
                console.log(res.data.info);
                a = JSON.stringify(res.data)
            }).catch(err => {
                console.log(err.message)

            });
    })

    return (
        <div >
            <hr />
            homeworks 13
            <br />
            <SuperCheckbox checked={value} onClick={() => { setValue(!value) }} />
            <div style={{ border: '1px solid black', width: '150px', height: '50px' }}>
                {a}
            </div>
        </div>
    );
}

export default HW13;
