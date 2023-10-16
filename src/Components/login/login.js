import { Button, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div className="App">
    <form className="form">
      <TextField
        labelText="Email"
        id="email" 
        type="text"
      />
      <TextField
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
