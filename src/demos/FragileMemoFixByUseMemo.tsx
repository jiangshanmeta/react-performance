import { memo, useMemo, useState } from "react";
import { ExpensiveWithChildren } from "../components/Expensive";

const MemoExpensiveWithChildren = memo(ExpensiveWithChildren);

export const FragileMemoFixByUseMemo = () => {
    const [value, setValue] = useState("");
    const children = useMemo(() => {
        return <div>123</div>
    }, [])

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            <MemoExpensiveWithChildren >
                {children}
            </MemoExpensiveWithChildren>
        </div>
    )
}