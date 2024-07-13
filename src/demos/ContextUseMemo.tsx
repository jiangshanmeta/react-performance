import { ReactNode, useContext, useMemo, useState } from "react";
import { Context } from "../components/Context";
import { Expensive } from "../components/Expensive";

const ContextConsumer = () => {

    useContext(Context);

    return <Expensive />
}

const ContextControllerUseMemo = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState("");
    const [number, setNumber] = useState(0);

    const providerValue = useMemo(() => {
        return {
            value,
            setValue
        }
    }, [value, setValue])

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
            <span>{number}</span>
            <Context.Provider value={providerValue}>
                {children}
            </Context.Provider>
        </div>
    )
}

export const ContextUseMemo = () => {
    return (
        <ContextControllerUseMemo>
            <ContextConsumer />
        </ContextControllerUseMemo>
    )
}