import { Link } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div className="w-full font-jakarta min-h-screen flex-col flex items-center justify-center gap-3">
      <h1 className="font-extrabold text-4xl">404</h1>
      <p>Page not found</p>
      <Link
        to={"/"}
        className="btn rounded bg-primary text-white hover:bg-primaryDark"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorLayout;
