import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const [feedbacks, setFeedbacks] = useState([]);
  const { user, setBookedService, bookedService } = useContext(AuthContext);

  const {
    id,
    counselor,
    description,
    duration,
    image,
    rating,
    serviceName,
    pricing,
    category,
  } = serviceData;

  function handelForm(e) {
    e.preventDefault();
    const feedback = e.target.feedback.value;

    setFeedbacks([...feedbacks, feedback]);
    e.target.reset();
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

  function handelBookNow() {
    // check already exits or not
    const isFind = bookedService.find(
      (service) => parseInt(service.id) === parseInt(id)
    );

    if (isFind) {
      showErrorAlert(`You are already booked ${serviceName}`);
    } else {
      setBookedService([...bookedService, serviceData]);
      showSuccessAlert(`You are booked ${serviceName} successfully`);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-5 my-5 grid gap-5 grid-cols-1 lg:grid-cols-4 mb-20">
      <Helmet>
        <title>Service Details | Aspireon</title>
      </Helmet>

      <div className="lg:col-span-3 space-y-3 border p-4 rounded">
        <figure>
          <img src={image} className="rounded w-full" alt="" />
        </figure>
        <h1 className="font-semibold text-xl">{serviceName}</h1>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm bg-secondary py-1 px-2 rounded">{category}</p>
          <p className="font-bold text-primary">${pricing}</p>
        </div>
        <p className="text-sm text-justify text-gray-600 leading-relaxed">
          {description}
        </p>
        <hr />
        <div>
          <p className="font-semibold">{counselor}</p>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm">{duration}</p>
            <div className="flex items-center gap-2">
              <ReactStars
                value={rating}
                count={5}
                size={24}
                activeColor="#ffd700"
              />
              <p className="text-sm font-medium text-gray-600">{rating}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handelBookNow}
            className="btn rounded bg-primary text-white hover:bg-primaryDark"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="border p-4 rounded h-min">
        <h1 className="font-semibold mb-3">Feedback</h1>

        <div className="mb-4 space-y-4">
          {feedbacks.map((feed, idx) => (
            <div key={idx} className="bg-base-200 p-3 rounded space-y-2">
              <div className="flex gap-2 items-center">
                <img
                  src={user.photoURL}
                  className="w-8 h-8 rounded-full object-cover"
                  alt=""
                />
                <h2 className="text-sm font-medium text-gray-500">
                  {user.displayName}
                </h2>
              </div>

              <p className="text-sm">{feed}</p>
            </div>
          ))}
        </div>

        <div>
          <form onSubmit={handelForm} className="space-y-2">
            <textarea
              name="feedback"
              className="textarea textarea-bordered w-full rounded text-sm textarea-md min-h-32"
              placeholder="enter your feedback"
              required
            ></textarea>
            <div>
              <button className="btn w-full rounded bg-primary text-white hover:bg-primaryDark">
                Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
