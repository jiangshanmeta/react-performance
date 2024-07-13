import { useState } from "react"
import { Expensive } from "../components/Expensive";

export const StartDemo = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            <Expensive />
        </div>
    )
}