import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const { handelRegister, handelGoogleAuth, handelUpdateProfile, setLoading } =
    useContext(AuthContext);
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();

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

  function handelRegisterSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const uppercaseRegex = /^(?=.*[A-Z]).*$/;
    const lowercaseRegex = /^(?=.*[a-z]).*$/;

    if (password.length < 6) {
      showErrorAlert("Password length must be at least 6 character");
      return;
    }
    if (!uppercaseRegex.test(password)) {
      showErrorAlert("Must have an Uppercase letter in the password");
      return;
    }

    if (!lowercaseRegex.test(password)) {
      showErrorAlert("Must have a Lowercase letter in the password  ");
      return;
    }

    handelRegister(email, password)
      .then(() => {
        showSuccessAlert("Register Successfully");
        handelUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setLoading(false);
            navigate("/");
          })
          .catch((error) => {
            setLoading(false);
            showErrorAlert(error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(error.message);
      });
  }

  function handelGoogleRegister() {
    handelGoogleAuth()
      .then(() => {
        navigate("/");
        showSuccessAlert("Register Successfully");
      })
      .catch(() => {
        showErrorAlert("Something went wrong");
      });
  }

  return (
    <div className="w-full height-screen flex items-center justify-center bg-base-200">
      <Helmet>
        <title>Register | Aspireon</title>
      </Helmet>

      <div className="my-8 card bg-base-100 w-full max-w-md rounded">
        <form onSubmit={handelRegisterSubmit} className="card-body">
          <label className="label block">
            <h1 className="font-bold text-2xl text-center">Create Account</h1>
          </label>

          <hr className="my-2" />

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered rounded"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered rounded"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <label className="input input-bordered rounded flex items-center gap-2">
              <input
                type={hide ? "password" : "text"}
                name="password"
                placeholder="password"
                className="grow"
                required
              />
              <div className="cursor-pointer" onClick={() => setHide(!hide)}>
                {hide ? (
                  <FaRegEye className="opacity-85" />
                ) : (
                  <FaRegEyeSlash className="opacity-85" />
                )}
              </div>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn rounded bg-primary text-white hover:bg-primaryDark">
              Register
            </button>
          </div>
          <label className="label block text-center">
            <span className="label-text text-sm space-x-1">
              <span>{"Already have an account?"}</span>
              <Link to={"/login"} className="text-primary font-semibold">
                Login
              </Link>
            </span>
          </label>
        </form>
        <div className="divider mx-8 -mt-5 ">
          <span className="text-sm">Or</span>
        </div>
        <button
          onClick={handelGoogleRegister}
          className="btn mx-8 mb-8 mt-2 btn-outline rounded border-primary text-primary"
        >
          <FcGoogle className="w-5 h-5" /> Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
