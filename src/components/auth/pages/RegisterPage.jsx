import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <h2 className="auth__title">- Register -</h2>

      <form>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="auth__input"
            required={true}
          />

          <label htmlFor="input" className="control-label">
            Name
          </label>
          <i className="bar"></i>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            className="auth__input"
            required={true}
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
          />

          <label htmlFor="input" className="control-label">
            Password
          </label>
          <i className="bar"></i>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="passwordConfirm"
            className="auth__input"
            required={true}
          />

          <label htmlFor="input" className="control-label">
            Confirm password
          </label>
          <i className="bar"></i>
        </div>

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
