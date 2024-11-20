import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { handelLogin, handelGoogleAuth, setLoading, setForgetEmail } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleInputChange(e) {
    setForgetEmail(e.target.value);
  }

  function showErrorAlert(message) {
    Swal.fire({
      title: "Error!",
      text: message,
      icon: "error",
    });
  }

  function showSuccessAlert(message) {
    Swal.fire({
      title: "Success",
      text: message,
      icon: "success",
    });
  }

  function handelOnSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      showErrorAlert("Password length must be at least 6 character");
      return;
    }

    handelLogin(email, password)
      .then(() => {
        showSuccessAlert("Login Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setLoading(false);
        showErrorAlert("Invalid Email or Password");
      });
  }

  function handelGoogleLogin() {
    handelGoogleAuth()
      .then(() => {
        showSuccessAlert("Login Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => showErrorAlert("Something went wrong"));
  }

  return (
    <div className="w-full height-screen flex items-center justify-center bg-base-200">
      <Helmet>
        <title>Forget Password | Aspireon</title>
      </Helmet>

      <div className="my-8 card bg-base-100 w-full max-w-md rounded">
        <form onSubmit={handelOnSubmit} className="card-body">
          <label className="label block">
            <h1 className="font-bold text-2xl text-center">Login</h1>
          </label>

          <hr className="my-2" />

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered rounded"
              required
            />
            <label className="label mt-2">
              <Link
                to={"/forgetPassword"}
                className="label-text-alt link link-hover text-sm"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn rounded bg-primary text-white hover:bg-primaryDark">
              Login
            </button>
          </div>
          <label className="label block text-center">
            <span className="label-text text-sm space-x-1">
              <span>{"Don't have an account?"}</span>
              <Link to={"/register"} className="text-primary font-semibold">
                Register
              </Link>
            </span>
          </label>
        </form>
        <div className="divider mx-8 -mt-5 ">
          <span className="text-sm">Or</span>
        </div>
        <button
          onClick={handelGoogleLogin}
          className="btn mx-8 mb-8 mt-2 btn-outline rounded border-primary text-primary"
        >
          <FcGoogle className="w-5 h-5" /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
