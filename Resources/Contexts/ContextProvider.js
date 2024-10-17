import GlobalContext from "./GlobalContext";
import { useState } from "react";

const ContextProvider = (props)=>{
    const [loggedUsername,setUsername] = useState("Shubham");
    return(
        <GlobalContext.Provider value = {{loggedUsername,setUsername}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default ContextProvider;