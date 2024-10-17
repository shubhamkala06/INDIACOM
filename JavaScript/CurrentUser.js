import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import GlobalContext from "../Resources/Contexts/GlobalContext";

const CurrentUserName = ()=>{
    const {loggedUsername,setUsername} = useContext(GlobalContext);
    const navigate = useNavigate();
    
    const deleteuserInfo = ()=>{
        setUsername('');
        navigate(`/`,{replace:true});
    }
    
    return loggedUsername===''?(
            <div className="loginLink">
                <div className="wlcm">Welcome, Guest</div>
                <Link to="/login">[log in]</Link>
            </div>
        )
        :
        (
            <div className="loginLink">
                <div className="wlcm">Welcome, {loggedUsername}</div>
                <Link onClick={deleteuserInfo}>[log_out]</Link>
                <Link>[edit_profile]</Link>
            </div>
        );
};

export default CurrentUserName;