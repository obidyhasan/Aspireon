import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const AppointmentCard = ({ service }) => {
  const { bookedService, setBookedService } = useContext(AuthContext);
  const { id, description, counselor, image, serviceName, pricing, category } =
    service;

  function handelRemoveAppointment() {
    const booked = bookedService.filter(
      (service) => parseInt(service.id) !== parseInt(id)
    );
    setBookedService(booked);
  }

  return (
    <div className="border p-4 rounded flex flex-col md:flex-row gap-5 relative">
      <figure>
        <img
          src={image}
          className="w-full md:w-[300px] h-full rounded object-cover"
          alt=""
        />
      </figure>

      <div className="flex-1 space-y-2">
        <h1 className="font-semibold text-lg">{serviceName}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <h3 className="font-medium">{counselor}</h3>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm bg-secondary py-1 px-2 rounded">{category}</p>
          <p className="font-bold text-primary">${pricing}</p>
        </div>
        <div>
          <Link
            to={`/serviceDetails/${id}`}
            className="btn w-full rounded bg-primary text-white hover:bg-primaryDark"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="top-3 right-3 absolute">
        <IoIosClose
          onClick={handelRemoveAppointment}
          className="cursor-pointer w-8 h-8  bg-white border rounded"
        />
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  service: PropTypes.object,
};

export default AppointmentCard;
