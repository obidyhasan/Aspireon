import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import AppointmentCard from "./AppointmentCard";

const Appointment = () => {
  const { bookedService } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <Helmet>
        <title>Appointment | Aspireon</title>
      </Helmet>

      <h2 className="text-xl font-bold">My Appointment</h2>
      <div className="my-8 grid grid-cols-1 gap-5">
        {bookedService.length ? (
          bookedService.map((service) => (
            <AppointmentCard
              key={service.id}
              service={service}
            ></AppointmentCard>
          ))
        ) : (
          <div>
            <h2 className="text-gray-600 text-center">No appointment found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
