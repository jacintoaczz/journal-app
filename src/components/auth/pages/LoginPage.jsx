import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../../hooks/useForm";
import {
  loginWithEmailAndPassword,
  startGoogleLogin,
} from "../../../app/store/features/auth/actions/auth";
import { TextInput } from "../../forms/TextInput";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [inputValues, errors, handleInputChange, validateInputs] = useForm(
    {
      email: "user@gmail.com",
      password: "123456",
    },
    {
      email: {
        required: {
          value: true,
          message: "This field is required.",
        },
      },
      password: {
        required: {
          value: true,
          message: "This field is required.",
        },
      },
    }
  );

  const { email, password } = inputValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      dispatch(loginWithEmailAndPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h2 className="auth__title">- Login -</h2>

      <form onSubmit={handleSubmit}>
        <TextInput
          type={"text"}
          name={"email"}
          label={"Email"}
          handleInputChange={handleInputChange}
          inputValue={email}
          errorMsg={errors.email}
        />

        <TextInput
          type={"password"}
          name={"password"}
          label={"Password"}
          handleInputChange={handleInputChange}
          inputValue={password}
          errorMsg={errors.password}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>

        <div className="auth__social-networks">
          <h3>Login with social networks</h3>
          <hr className="auth__divider" />

          <button className="google-btn" onClick={handleGoogleLogin}>
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
