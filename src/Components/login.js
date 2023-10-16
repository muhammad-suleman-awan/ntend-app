import React from "react";

const Login = () => {
  return (
    <div className="App">
    <form className="form">
      <CustomInput
        labelText="Email"
        id="email" 
        type="text"
      />
      <CustomInput
        labelText="Password"
        id="password" 
        type="password"
      />

      <Button type="button" color="primary" className="form__custom-button">
        Log in
      </Button>
    </form>
  </div>
  );
};

export default Login;
