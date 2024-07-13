import { memo, useState } from "react";
import { Expensive } from "../components/Expensive";

const MemoExpensive = memo(Expensive)

export const MemoStart = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            <MemoExpensive />
        </div>
    )
}