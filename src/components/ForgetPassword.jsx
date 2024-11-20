import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { forgetEmail, handelForgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  function showErrorAlert(message) {
    Swal.fire({
      title: "Error!",
      text: message,
      icon: "error",
    });
  }

  function resetPasswordFunction(e) {
    e.preventDefault();
    handelForgetPassword(e.target.email.value)
      .then(() => {
        window.open("https://mail.google.com/", "_blank");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        showErrorAlert("Something went wrong");
      });
  }

  return (
    <div className="w-full height-screen flex items-center justify-center bg-base-200">
      <Helmet>
        <title>Forget Password | Aspireon</title>
      </Helmet>

      <div className="my-8 card bg-base-100 w-full max-w-md rounded">
        <form onSubmit={resetPasswordFunction} className="card-body">
          <label className="label block">
            <h1 className="font-bold text-2xl text-center">Forget Password</h1>
          </label>

          <hr className="my-2" />

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              defaultValue={forgetEmail && forgetEmail}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded"
              required
            />
          </div>

          <div className="form-control mt-3">
            <button className="btn rounded bg-primary text-white hover:bg-primaryDark">
              Reset Password
            </button>
          </div>
          <label className="label block text-center">
            <span className="label-text text-sm">
              <Link to={"/login"} className="text-primary font-semibold">
                Back to Login
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
