import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
function GreetingContainer(props: GreetingContainerPropsType) { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string | null>(null)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value); // need to fix
    };
    const addUser = () => {
        const trimmerTitle = name.trim()
        if (trimmerTitle) {
            props.addUserCallback(name);
            alert(`HELLO ${name} !`);
            setName("");
            setError(null);
        }
        else { setError("Title is required!") }
    };

    const totalUsers = props.users.length;


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
