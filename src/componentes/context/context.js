import { createContext } from "react";

import { useState } from "react";

export const DataContext = createContext({})

export const DataProvider = (props) => {

    const [token, setToken] = useState("")
    const [percent, setPercent] = useState("")

    return(
        <DataContext.Provider value={{token, setToken, percent, setPercent}}>
            {props.children}
        </DataContext.Provider>         
    )
}