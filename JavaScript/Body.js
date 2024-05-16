import { Outlet,Link } from "react-router-dom";
import Navigation from "./Navigation";

const Body = ()=>{
    return (
        <div className="bodyContainer">
            <Navigation/>
            <Outlet/>
        </div>
    )
};

export default Body;