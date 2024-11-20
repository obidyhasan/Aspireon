import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, description, counselor, image, serviceName, pricing, category } =
    service;

  return (
    <div className="border p-4 rounded flex flex-col gap-3">
      <div className="flex-1 space-y-2">
        <figure>
          <img
            src={image}
            className="w-full h-[150px] rounded object-cover"
            alt=""
          />
        </figure>
        <h1 className="font-semibold text-lg">{serviceName}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <h3 className="font-medium">{counselor}</h3>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm bg-secondary py-1 px-2 rounded">{category}</p>
          <p className="font-bold text-primary">${pricing}</p>
        </div>
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
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
