import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { formErrorMessages, bgImag } from "../utils/constants";
import { validateUsername,validatePassword} from "../utils/helper";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [unErr, setUnErr] = useState({ status: false, msg: "" });
  const [pwdErr, setPwdErr] = useState({ status: false, msg: "" });

  const navigate = useNavigate();

  
  const onChangeUsername = (event) => {
    setUserName(event.target.value);
  };

  const onBlurUserName = () => {
    if (userName.trim() === "") {
      setUnErr((prev) => ({
        ...prev,
        status: true,
        msg: formErrorMessages.emptyErr,
      }));
    } else if (validateUsername(userName) === false) {
      setUnErr((prev) => ({
        ...prev,
        status: true,
        msg: formErrorMessages.userErr,
      }));
    } else {
      setUnErr((prev) => ({
        ...prev,
        status: false,
        msg: "",
      }));
    }
  };

  const onBlurPassword = () => {
    if (password.trim() === "") {
      setPwdErr((prev) => ({
        ...prev,
        status: true,
        msg: formErrorMessages.emptyErr,
      }));
    } else if (validatePassword(password) === false) {
      setPwdErr((prev) => ({
        ...prev,
        status: true,
        msg: formErrorMessages.pwdErr,
      }));
    } else {
      setPwdErr((prev) => ({
        ...prev,
        status: false,
        msg: "",
      }));
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const pwdIcon = showPassword ? (
    <BsEyeSlashFill size={20} color="blue" />
  ) : (
    <BsEyeFill size={20} color="blue" />
  );

  const passwordType = showPassword ? "text" : "password";

  

  const renderUserNameError = () => {
    return unErr.status ? (
      <small className="form-text text-danger w-75">{unErr.msg}</small>
    ) : null;
  };

  const renderPasswordError = () => {
    return pwdErr.status ? (
      <small className="form-text text-danger">{pwdErr.msg}</small>
    ) : null;
  };


  const renderPasswordField = () => (
    <div className="mb-3 w-100">
      <label
        className="form-label text-primary-emphasis fw-semibold"
        htmlFor="password"
        title={formErrorMessages.pwdErr}
      >
        PASSWORD
      </label>
      <div className="d-flex flex-row">
        <input
          type={passwordType}
          id="password"
          className="form-control"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
          //onBlur={onBlurPassword}
        />
        <button
          type="button"
          className="btn btn-outline-light mx-3"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {pwdIcon}
        </button>
      </div>
      {renderPasswordError()}
    </div>
  );

  const renderUsernameField = () => (
    <div className="mb-3">
      <label
        className="form-label text-primary-emphasis fw-semibold"
        htmlFor="captcha"
        title={formErrorMessages.userErr}
      >
        USERNAME
      </label>

      <input
        type="text"
        id="username"
        className="form-control"
        value={userName}
        onChange={onChangeUsername}
        placeholder="Username"
        //onBlur={onBlurUserName}
      />
      {renderUserNameError()}
    </div>
  );

  const submitForm = (event) => {
    event.preventDefault();
    if (validateUsername(userName) && validatePassword(password)) {
      localStorage.setItem("jokesAppUserInfo", userName);
      navigate("/");
    }
    else {
      onBlurUserName();
      onBlurPassword();
    }
  };

  const loginInfo = localStorage.getItem("jokesAppUserInfo");
  if (loginInfo !== null) {
    return <Navigate to="/" />;
  }
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${bgImag})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center align-items-center shadow"
          style={{ minHeight: "100vh" }}
        >
          <form
            onSubmit={submitForm}
            className="d-flex flex-column justify-content-center shadow-lg rounded-4 border border-primary-subtle p-4 col-10 m-auto col-md-5 colo-lg-6"
          >
            {renderUsernameField()}
            {renderPasswordField()}
            <button type="submit" className="btn btn-primary align-self-center">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
