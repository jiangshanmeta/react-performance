import { useContext } from "react";
import { Context, ContextControllerWithRerender } from "../components/Context"

import { Expensive } from "../components/Expensive";

const ContextConsumer = () => {

    useContext(Context);

    return <Expensive />
}


export const ContextProviderValueChange = () => {
    return (
        <ContextControllerWithRerender>
            <ContextConsumer />
        </ContextControllerWithRerender>
    )
}