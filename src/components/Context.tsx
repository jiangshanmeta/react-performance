import { createContext, ReactNode, useState } from "react";


export const Context = createContext<{
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}>({
    value: "",
    setValue: () => { }
})

export const ContextController = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState("");

    return (
        <Context.Provider value={{ value, setValue }}>
            {children}
        </Context.Provider>
    );
}

export const ContextControllerWithRerender = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState("");
    const [number, setNumber] = useState(0);
    console.log("re-render")
    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
            <span>{number}</span>
            <Context.Provider value={{ value, setValue }}>
                {children}
            </Context.Provider>
        </div>
    )

}