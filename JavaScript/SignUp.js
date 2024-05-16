import { Link,useNavigate } from "react-router-dom";
import { salutationOptions,countryList,eventList,organisationList,categoryList } from "./DataSignUpOptions";
import { useState } from "react";

const SignUp = ()=>{
    [formData,setFormData] = useState({"salute":salutationOptions[0],"name":"","addL1":"","addL2":"","city":"","state":"","pCode":"","email":"","country":countryList[0],"mob":"","event":eventList[0],"csi":"","optionalMemNumber":"","org":organisationList[0],"category":categoryList[0],"pass":"","cPass":""});
    navigate = useNavigate();
    const clearValues = (e)=>{
        e.preventDefault();
        setFormData({"salute":salutationOptions[0],"name":"","addL1":"","addL2":"","city":"","state":"","pCode":"","email":"","country":countryList[0],"mob":"","event":eventList[0],"csi":"","optionalMemNumber":"","org":organisationList[0],"category":categoryList[0],"pass":"","cPass":""});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/login`,{replace:true});

    }
    const handleChange = (e)=>{
        let { name, value,type } = e.target;
        if(type==='tel'){
            value = value.replace(/[^0-9]/g,"");
        }

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    return (
        <>
            <div className="signUpContainer">
                <p>Already registered with us? <Link to="/login">Sign in</Link></p>
                <div className="disclaimer1">
                    <p>
                        Fields marked with an asterisk <span>*</span> are required.
                    </p>
                    <p>
                        Note: The certificate acknowledging your contributions would be generated based on the records submitted by you.
                    </p>
                </div>
                <h1>Become a Member</h1>
                <form className="signUpForm" onSubmit={handleSubmit} autoComplete="off" id="signUpFrom">
                    <div className="signUpField salutation required">
                        <label htmlFor="salute">
                            Salutation
                        </label>
                        <select id="salute" name="salute" value={formData.sal} onChange={handleChange} required>
                            {salutationOptions.map((sal)=>(
                                <option key={sal} value={sal}>
                                    {sal}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="signUpField fName required">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField addL1 required">
                        <label htmlFor="addL1">
                            Address Line 1
                        </label>
                        <input type="text" id="addL1" name="addL1" value={formData.addL1} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField addL2 required">
                        <label htmlFor="addL2">
                            Address Line 2
                        </label>
                        <input type="text" id="addL2" name="addL2" value={formData.addL2} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField city required">
                        <label htmlFor="city">
                            City/District
                        </label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField state required">
                        <label htmlFor="state">
                            State/Province
                        </label>
                        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField pCode required">
                        <label htmlFor="pCode">
                            Postal Code
                        </label>
                        <input type="tel" id="pCode" name="pCode" value={formData.pCode} onChange={handleChange} pattern="[0-9]*" required/>
                    </div>
                    <div className="signUpField country required">
                        <label htmlFor="country">
                            Country
                        </label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange}>
                            {countryList.map((c)=>(
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="signUpField email required">
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField mob required">
                        <label htmlFor="mob">
                            Mobile No.
                        </label>
                        <input type="tel" id="mob" name="mob" value={formData.mob} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField event required">
                        <label htmlFor="event">
                            Interested Event
                        </label>
                        <select id="event" name="event" value={formData.event} onChange={handleChange} required>
                            {eventList.map((e)=>(
                                <option value={e} key={e}>{e}</option>
                            ))}
                        </select>
                    </div>
                    <div className="signUpField csi">
                        <label htmlFor="csi">
                            CSI Membership No.
                        </label>
                        <input type="text" id="csi" name="csi" value={formData.csi} onChange={handleChange}/>
                    </div>
                    <div className="signUpField memNumber">
                        <label htmlFor="optionalMemNumber">
                            IEEE/ISTE/IETE/IITP/IMP Membership No.
                        </label>
                        <input type="text" id="optionalMemNumber" name="optionalMemNumber" value={formData.optionalMemNumber} onChange={handleChange}/>
                    </div>
                    <div className="signUpField org required">
                        <label htmlFor="org">
                            Organisation
                        </label>
                        <select id="org" name="org" value={formData.org} onChange={handleChange} required>
                            {organisationList.map((org)=>(
                                <option key={org} value={org}>{org}</option>
                            ))}
                        </select>
                    </div>
                    <div className="signUpField category required">
                        <label htmlFor="category">
                            Category
                        </label>
                        <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                            {categoryList.map((cat)=>(
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>                        
                    </div>
                    <div className="signUpField pass required">
                        <label htmlFor="pass">
                            Password
                        </label>
                        <input type="password" id="pass" name="pass" value={formData.pass} onChange={handleChange} required/>
                    </div>
                    <div className="signUpField cPass required">
                        <label htmlFor="cPass">
                            Confirm Password
                        </label>
                        <input type="password" id="cPass" name="cPass" value={formData.cPass} onChange={handleChange} required/>
                    </div>
                    <div className="btns">
                        <button type="submit">Submit</button>
                        <button type="reset" onClick={clearValues}>Reset</button>
                    </div>
                </form>
                <div className="disclaimer2">
                    **I hereby convey my consent to receive information about the activities of the institution by email or by SMS on my Mobile number, from time to time, by the Institution.
                </div>
            </div>
        </>
    );
};

export default SignUp;