import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { login, registerUser, verifyEmail } from "actions/auth";

import routes from "constants/routes";

import LoginForm from "components/auth/LoginForm";
import RegisterForm from "components/auth/RegisterForm";

const LoginPage = ({ auth, login, registerUser, verifyEmail }) => {
  const [loginView, setLoginView] = useState(true);
  const { isAuthenticated } = auth;

  const handleStateChange = () => {
    setLoginView(!loginView);
  };

  if (isAuthenticated) {
    return <Redirect to={routes.DASHBOARD} />;
  }

  return (
    <div>
      <h1>Login Page!</h1>
      {loginView ? (
        <LoginForm login={login} />
      ) : (
        <RegisterForm register={registerUser} verify={verifyEmail} />
      )}
      <button onMouseDown={handleStateChange}>Change</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, registerUser, verifyEmail })(
  LoginPage
);
