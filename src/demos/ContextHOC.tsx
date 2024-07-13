import { createContext, FC, memo, ReactNode, useContext, useState } from "react";
import { Expensive } from "../components/Expensive";

const Context = createContext<{
    str: string,
    setStr: React.Dispatch<React.SetStateAction<string>>
    num: number,
    setNum: React.Dispatch<React.SetStateAction<number>>
}>({
    str: "",
    setStr: () => { },
    num: 0,
    setNum: () => { }
})

const ContextController = ({ children }: { children: ReactNode }) => {
    const [str, setStr] = useState('666');
    const [num, setNum] = useState(0);

    return (
        <Context.Provider value={{ str, num, setNum, setStr }}>
            {children}
        </Context.Provider>
    )
}

export const withStr = <T extends { str: string }>(component: FC<T>) => {
    const Memo = memo(component);

    return (props: Omit<T, 'str'>) => {
        const { str } = useContext(Context)
        const allProp = {
            ...props,
            str
        } as T

        return <Memo {...allProp} />
    }
}

const NumInput = () => {
    const { num, setNum } = useContext(Context)

    return (
        <div>
            <input type="number" value={num} onChange={(e) => setNum(+e.target.value)} />
            <span>{num}</span>
        </div>
    )
}

const ExpensiveWithStr = ({ str }: { str: string }) => {
    return (
        <div>
            <div>{str}</div>
            <Expensive />
        </div>
    )
}

const HOCExpensiveWithStr = withStr(ExpensiveWithStr);

export const ContextHOC = () => {
    return (
        <ContextController>
            <NumInput />
            <HOCExpensiveWithStr />
        </ContextController>
    )
}
