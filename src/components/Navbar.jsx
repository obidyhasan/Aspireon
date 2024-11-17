import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarLink = (
    <div className="flex gap-3 text-gray-500 flex-col lg:flex-row font-medium activeNav">
      <NavLink className="hover:text-gray-700" to={"/"}>
        Home
      </NavLink>

      <NavLink className="hover:text-gray-700" to={"/profile"}>
        My Profile
      </NavLink>
    </div>
  );

  return (
    <div className="bg-base-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="navbar bg-base-100 px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost bg-base-200 rounded mr-3 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="rounded menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-3 shadow"
              >
                {navbarLink}
              </ul>
            </div>
            <Link to={"/"} className="text-2xl font-bold">
              Aspireon
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbarLink}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to={"/login"}
              className="btn rounded bg-primary text-white hover:bg-primaryDark"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
