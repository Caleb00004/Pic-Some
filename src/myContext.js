import { createContext } from "react";

const context = createContext()

function ContextProvider(props) {

    return (
        <context.Provider value={"test-value"}>
            {props.children}
        </context.Provider>
    )
}

export {ContextProvider, context}