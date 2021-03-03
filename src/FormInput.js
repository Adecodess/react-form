import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import { FaEye } from "react-icons/fa";

const FormInput = ({ submitForm }) => {
  const { handleChange, person, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    // console.log(123);
  };

  return (
    <>
      <div className="form-content-right">
        <form className="form" errors={errors} onSubmit={handleSubmit}>
          <h1>
            Get started with us today! create your account by filling out the
            information below{" "}
          </h1>
          <div className="form-inputs">
            <label htmlFor="firstName" className="form-label">
              firstName:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              className="form-input"
              onChange={handleChange}
              placeholder="enter username"
            ></input>
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="lastName" className="form-label">
              lastName:{" "}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={person.lastName}
              className="form-input"
              onChange={handleChange}
              placeholder="enter  lastName"
            ></input>
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              email:{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              className="form-input"
              onChange={handleChange}
              placeholder="enter  email"
            ></input>
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              password:{" "}
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              value={person.password}
              className="form-input"
              onChange={handleChange}
              placeholder="enter  password"
              // {...(passwordShown ? "text" : "password")}
            ></input>
            <i>
              <FaEye className="icon" onClick={togglePasswordVisiblity} />
            </i>
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              confirm password:{" "}
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              id="password2"
              name="password2"
              value={person.password2}
              className="form-input"
              onChange={handleChange}
              placeholder="confirm password"
            ></input>
            <i>
              <FaEye className="iccon" onClick={togglePasswordVisiblity} />
            </i>
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button
            className="form-input-btn"
            type="submit"
            onClick={handleSubmit}
          >
            sign up
          </button>
          <span className="form-input-login">
            Already have an account login <a href="#">here</a>
          </span>
        </form>
      </div>
    </>
  );
};

export default FormInput;
