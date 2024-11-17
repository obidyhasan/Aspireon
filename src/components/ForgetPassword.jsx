import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="w-full height-screen flex items-center justify-center bg-base-200">
      <div className="my-8 card bg-base-100 w-full max-w-md rounded">
        <form className="card-body">
          <label className="label block">
            <h1 className="font-bold text-2xl text-center">Forget Password</h1>
          </label>

          <hr className="my-2" />

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

          <div className="form-control mt-3">
            <Link
              to="https://mail.google.com/"
              target="_blank"
              className="btn rounded bg-primary text-white hover:bg-primaryDark"
            >
              Reset Password
            </Link>
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
