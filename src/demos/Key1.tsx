import { memo, useState } from "react"
import { Expensive } from "../components/Expensive";

const MemoExpensive = memo(Expensive);

export const KeyNaive = () => {
    const [value, setValue] = useState("");

    const jsx = [<div>123</div>]

    if (value.length > 3) {
        jsx.push(<div>length great than 3</div>)
    }
    jsx.push(<MemoExpensive />)

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            <div>{jsx}</div>
        </div>
    )
}

export const WithKey = () => {
    const [value, setValue] = useState("");

    const jsx = [<div>123</div>]

    if (value.length > 3) {
        jsx.push(<div>length great than 3</div>)
    }
    jsx.push(<MemoExpensive key="momo" />)

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            <div>{jsx}</div>
        </div>
    )
}

export const KeyBestSolution = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <span>{value}</span>
            <div>
                <div>123</div>
                {value.length > 3 && <div>length great than 3</div>}
                <MemoExpensive />
            </div>
        </div>
    )
}