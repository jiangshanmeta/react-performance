import { memo, useState } from "react";
import { ExpensiveWithChildren } from "../components/Expensive";

const MemoExpensiveWithChildren = memo(ExpensiveWithChildren);

export const FragileMemo = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            <MemoExpensiveWithChildren >
                <div>123</div>
            </MemoExpensiveWithChildren>
        </div>
    )
}