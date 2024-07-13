import { useContext, useState } from "react"
import { Context } from "../components/Context"
import { Expensive } from "../components/Expensive";

const Input = () => {
    const {
        value,
        setValue,
    } = useContext(Context);

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            {value}
        </div>
    )
}

export const ContextNaive = () => {
    const [value, setValue] = useState('')

    return (
        <Context.Provider value={{ value, setValue }}>
            <Input />
            <Expensive />
        </Context.Provider>
    )
}