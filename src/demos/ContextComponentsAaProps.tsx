import { useContext } from "react";
import { Context, ContextController } from "../components/Context"
import { Expensive } from "../components/Expensive"
const Input = () => {
    const {
        value,
        setValue,
    } = useContext(Context);

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            {value}
        </div>
    )
}
export const ContextComponentsAaProps = () => {
    return (
        <ContextController>
            <Input />
            <Expensive />
        </ContextController>
    )
}