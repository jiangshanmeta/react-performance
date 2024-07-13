import { ReactNode } from "react";

const wait = (ms: number) => {
    const start = Date.now();
    while (Date.now() - start < ms) { }
}

export const Expensive = () => {
    wait(1000);

    return null;
}

export const ExpensiveWithChildren = ({ children }: { children: ReactNode }) => {
    console.log(children)
    wait(1000);
    return <div>{children}</div>;
}