import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorLayout from "../layout/ErrorLayout";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import PrivateRouter from "./PrivateRouter";
import ServiceDetails from "../components/ServiceDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorLayout></ErrorLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/serviceDetails/:serviceId",
        loader: async ({ params }) => {
          const res = await fetch("/ServicesData.json");
          const data = await res.json();

          const serviceData = data.find(
            (service) => parseInt(service.id) === parseInt(params.serviceId)
          );
          return serviceData;
        },
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default Router;
