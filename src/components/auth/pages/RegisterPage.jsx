import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from "validator";

import { useForm } from "../../../hooks/useForm";
import { TextInput } from "../../forms/TextInput";
import { startRegisterWithEmailAndPassword } from "../../../app/store/features/auth/actions/auth";

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [inputValues, errors, handleInputChange, validateInputs] = useForm(
    {
      name: "Allenz",
      email: "email@email.com",
      password: "123456",
      passwordConfirm: "123456",
    },
    {
      name: {
        required: {
          value: true,
          message: "Name is required.",
        },
      },
      email: {
        custom: {
          isValid: (value) => validator.isEmail(value),
          message: "Must be a valid email.",
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 5,
          message: "Must have at least 6 characters.",
        },
      },
      passwordConfirm: {
        custom: {
          isValid: (value) => value === passwordConfirm,
          message: "Both passwords should match.",
        },
      },
    }
  );
  const { name, email, password, passwordConfirm } = inputValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      dispatch(startRegisterWithEmailAndPassword(email, password, name));
    }
  };

  return (
    <>
      <h2 className="auth__title">- Register -</h2>

      <form onSubmit={handleRegister}>
        <TextInput
          type={"text"}
          name={"name"}
          label={"Name"}
          handleInputChange={handleInputChange}
          inputValue={name}
          errorMsg={errors.name}
        />

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

        <TextInput
          type={"password"}
          name={"passwordConfirm"}
          label={"Confirm password"}
          handleInputChange={handleInputChange}
          inputValue={passwordConfirm}
          errorMsg={errors.passwordConfirm}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
      </form>

      <div className="btn-container">
        <Link
          to="/auth/login"
          className="btn link-btn btn-outline-primary btn-block"
        >
          Already registered?
        </Link>
      </div>
    </>
  );
};
