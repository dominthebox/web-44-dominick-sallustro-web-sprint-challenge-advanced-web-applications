import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [ formValues, setFormValues ] = useState({ username: "", password: "" })
  const [ errorMessage, setErrorMessage ] = useState("")

  const { push } = useHistory();

  // const error = "Username or Password not valid.";
  //replace with error state

  const loginSubmit = () => {
    axios.post(`http://localhost:5000/api/login`, formValues)
      .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.data.payload)
        push("/bubble")      
      })
      .catch(err => {
        console.log('Houston, we have a problem: ', err);
      })
  }

  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.username === "" || formValues.password === "") {
      setErrorMessage("Username or Password not valid.")
    }
    else {
      loginSubmit();
    }
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login!</h2>
        <form onSubmit={handleSubmit}>
          <input 
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChanges}
            value={formValues.username}
          />
          <input 
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChanges}
            value={formValues.password}
          />
          <button id="submit">Login</button>
        </form>
      </div>

      <p id="error" className="error">{errorMessage}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"