import { useState } from "react";
import { Expensive } from "../components/Expensive";

const Input = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
        </div>
    )
}

export const StateDown = () => {

    return (
        <>
            <Input />
            <Expensive />
        </>
    )

}