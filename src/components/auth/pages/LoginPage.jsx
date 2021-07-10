import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useForm } from "../../../hooks/useForm";
import { login } from "../../../app/store/features/auth/actions/auth";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [inputValues, handleInputChange] = useForm({
    email: "user@gmail.com",
    password: "123456",
  });

  const { email, password } = inputValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(123456, "Jacinto"));
  };

  return (
    <>
      <h2 className="auth__title">- Login -</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="auth__input"
            required={true}
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="input" className="control-label">
            Email
          </label>
          <i className="bar"></i>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="auth__input"
            required={true}
            value={password}
            onChange={handleInputChange}
          />

          <label htmlFor="input" className="control-label">
            Password
          </label>
          <i className="bar"></i>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks">
          <h3>Login with social networks</h3>
          <hr className="auth__divider" />

          <button className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>

            <b>Sign in with google</b>
          </button>

          <Link
            to="/auth/register"
            className="btn link-btn btn-outline-primary btn-block"
          >
            Create new account
          </Link>
        </div>
      </form>
    </>
  );
};
