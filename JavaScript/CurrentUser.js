import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const CurrentUserName = ()=>{

    const [data, setData] = useState(sessionStorage.getItem('currentUser') || '');
    const navigate = useNavigate();
    const deleteData = ()=>{
        setData('');
        sessionStorage.removeItem("currentUser");
        navigate(`/`,{replace:true});
    }
    useEffect(() => {
        const updateData = () => {
            setData(sessionStorage.getItem('currentUser') || '');
        };

        window.addEventListener('storage', updateData);
        return () => {
            window.removeEventListener('storage', updateData);
        };
    },[]);
    if(data===''){
        return(
            <div className="loginLink">
                <div className="wlcm">Welcome, Guest</div>
                <Link to="/login">[log in]</Link>
            </div>
        );
    }
    else{
        return(
            <div className="loginLink">
                <div className="wlcm">Welcome, {data}</div>
                <Link onClick={deleteData}>[log_out]</Link>
                <Link>[edit_profile]</Link>
            </div>
        );
    };
};

export default CurrentUserName;