import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="w-full height-screen flex items-center justify-center bg-base-200">
      <div className="my-8 card bg-base-100 w-full max-w-md rounded">
        <form className="card-body">
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
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered rounded"
              required
            />
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
        <button className="btn mx-8 mb-8 mt-2 btn-outline rounded border-primary text-primary">
          <FcGoogle className="w-5 h-5" /> Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
