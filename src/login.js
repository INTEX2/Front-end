import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
// import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button, Error } from "./components/AuthForm"
import AppContext from './context'  


function Login() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isError, setIsError] = useState(false)
  const state = useContext(AppContext)
//   console.log(state)

  function postLogin() {
    state.LogIn(userName, password)
  }

  if (state.LoggedIn) {
    return <Redirect to="/" />;
  }

  return (
        <Card>
      {/* <Logo src={logoImg} /> */}
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { state.isLogInError &&<Error>The username or password provided were incorrect!</Error>}
    </Card>
  );
}

export default Login;