import { ReactNode, useState } from "react"
import { Expensive } from "../components/Expensive";

const InputWithChildren = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            {children}
        </div>
    )

}

export const ComponentsAsProps = () => {
    return (
        <InputWithChildren>
            <Expensive />
        </InputWithChildren>
    )
}