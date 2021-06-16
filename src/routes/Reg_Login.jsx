import React, { useState} from 'react';
import { RegLoginStyle } from '../components.style/RegLoginStyle'; 
import { useHistory } from 'react-router-dom';


function Reg_Login() {
const history = useHistory()

// onClick buttons
const [switchToggled, setSwitchToggle] = useState(false);

const signinBtn = () => {
  switchToggled ? setSwitchToggle(false) : setSwitchToggle(true);
  console.log(switchToggled)
}

 const signupBtn = () => {
  switchToggled ? setSwitchToggle(false) : setSwitchToggle(true);
  console.log(switchToggled)
}


//  form submisstion
const [values, setValues] = useState({
  name: "",
  email: "",
  password: ""
});

const [invalidFields, setInvalidFields] = useState({
  name: false,
  email: false,
  password: false
});


const [invalidCredentials, setInvalidCredentials] = useState(false)

// EVENT HANDLERS
// INPUT FIELDS ACCEPT VALUES:  update state value of input fields (from empty to when text is entered )

  const handleNameChange = (e) => {
    setValues({...values, name: e.target.value})
  }
  
  const handleEmailChange = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handlePasswordChange = (e) => {
    setValues({...values, password: e.target.value})
  }

  // const handleresetChange = (e) => {
  //   setValues({...values, reset: e.target.value})
  // }

  const handleRegistration = (event) => {
    event.preventDefault();
    console.log(values)
    fetch("/register", {
      method: "POST",
      body:JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then((data) => {
      if(data.error){
        switch (data.error){
          case "User Already Exists":
            setSwitchToggle(false);
            break;
          case "Missing Registration Information":
            setInvalidFields({
              name: values.name=== "",
              email: values.email=== "",
              password: values.password=== "",
            })
            break;
        }
        console.log(data.error)
        return;
      }
      localStorage.setItem("token", data.token)
      // clear values in reg form
      setValues({
        name: "",
        email: "",
        password: ""
      })
      history.push("/user_options")
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      body:JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then((data) => {
      if(data.error){
        switch(data.error){
          case "Invalid Credentials":
            setInvalidCredentials(true);
        }
        return;
      }
      // document.cookie = data.token;
      localStorage.setItem("token", data.token)
      // clear values in reg form
      setValues({
        name: "",
        email: "",
        password: ""
      })
      history.push("/user_options")
    })
  }
  
  

  return (
    <div className="container">
      <RegLoginStyle />

      <div id="blueBg" > 

              {/* Sign In / LogIn */}
            <div className="box signin" >
              <img className="mice" src={process.env.PUBLIC_URL + '/img/welcome-mice.png'} alt="mice" />
              <h2>Nice to see you again !</h2>
              <h6>Already Have an Account ?</h6>
              <button  onClick={signinBtn} className="signinBtn" id="signIn">Sign In</button>
            </div>

               {/* Sign up / Register */}
            <div className="box signup"  >
              <img className="mice" src={process.env.PUBLIC_URL + '/img/welcome-mice.png'} alt="mice" />
              <h2>Really glad you came!</h2>
              <h6>Create an account with us !!</h6>
              <button onClick={signupBtn} className="signupBtn" id="signUp" >Register</button>
            </div>


            <div className="formBx"
              className={switchToggled ? "formBx active " : "formBx"} >

                    {/* Sign In / LogIn  */}
                  <div className="form signinForm">
                      <form onSubmit={handleLogin} >

                        <h3>Sign In</h3>

                        <input type="text" placeholder="Username" value={values.name} onChange={handleNameChange} />
                        {invalidFields.name && <span>Required</span>}
                        {invalidCredentials && <span className="invalid-credentials">Invalid credentials.</span>}

                        <input type="password" placeholder="Password" autoComplete="on" value={values.password} onChange={handlePasswordChange} />
                        {invalidFields.password && <span>Required</span>}
                        {invalidCredentials && <span className="invalid-credentials">Invalid Credentials</span>}

                        <input type="submit" value="Login"   />

                        <h4 className="forgot">Login to listen, relax and live !!</h4>
                      </form>
                  </div>

                    {/* Sign up / Register */}
                  <div className="form signupForm">
                      <form onSubmit={handleRegistration}>

                        <h3>Sign Up</h3>

                        <input type="text" placeholder="Username" minLength="4" value={values.name} onChange={handleNameChange}  />
                        {invalidFields.name && <span>Required</span>}

                        <input type="text" placeholder="Email" value={values.email} onChange={handleEmailChange}  />
                        {invalidFields.email && <span>Required</span>}

                        <input type="password" placeholder="Password" autoComplete="on" minLength="6" value={values.password} onChange={handlePasswordChange}  />
                        {invalidFields.password && <span>Required</span>}
{/* 
                        <input type="password" placeholder="Confirm Password" /> */}
                        <input type="submit" defaultValue="Register" />
                      </form>
                  </div>
              </div>


      </div>
    </div>
  );
};


export default Reg_Login;
