import React, { Fragment, useState } from "react";

const RegisterForm = ({ register, verify }) => {
  const [verifyView, setVerifyView] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirm: "",
    verify_code: "",
  });
  const { email, password, password_confirm, verify_code } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password === password_confirm) {
      await register(email, password);
      setVerifyView(true);
    } else {
      console.log("passwords don't match");
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    await verify(email, verify_code, password);
  };

  return (
    <Fragment>
      {!verifyView ? (
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password_confirm"
            value={password_confirm}
            onChange={handleChange}
          />
          <input type="submit" value="Register." />
        </form>
      ) : (
        <form onSubmit={handleVerifySubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Verification Code"
            name="verify_code"
            value={verify_code}
            onChange={handleChange}
          />
          <button onMouseDown={() => setVerifyView(false)}>Back</button>
          <input type="submit" value="Verify." />
        </form>
      )}
    </Fragment>
  );
};

export default RegisterForm;
