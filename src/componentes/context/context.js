import { createContext } from "react";

import { useState } from "react";

export const DataContext = createContext({})

export const DataProvider = (props) => {

    const [percent, setPercent] = useState("")

    return(
        <DataContext.Provider value={{ percent, setPercent}}>
            {props.children}
        </DataContext.Provider>         
    )
}