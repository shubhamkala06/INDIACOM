import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ()=> {
  const [formData, setFormData] = useState({memberID: "",pass: ""});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/member/${formData.memberID}`,{replace:true});
};

  return (
    <div className="loginContainer">
        <h1>Member Login</h1>
        <form onSubmit={handleSubmit} autoComplete="off" className="loginForm">
          <div className="loginField">
              <label htmlFor="memberID">Member ID:</label>
              <input type="text" id="memberID" name="memberID" value={formData.memberID} onChange={handleChange} required/>
          </div>
          <div className="loginField">
              <label htmlFor="pass">Password:</label>
              <input type="password" id="pass" name="pass" value={formData.pass} onChange={handleChange} required/>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="otherOptions">
            <p>
                <Link>Forgot MemberID?</Link>
            </p>
            <p>
              <Link to="/signup">Not a Member?</Link> 
            </p>
            <p>
                <Link>Forgot Password?</Link>
            </p>
        </div>
    </div>
  );
}

export default Login;