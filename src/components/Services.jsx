import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/ServicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-center font-bold text-2xl">
          Explore Our Expert Career Services
        </h1>
        <p className="max-w-2xl text-sm text-center mx-auto text-gray-600">
          Unlock your potential with tailored career guidance, skill
          development, and professional support to achieve your goals. Start
          your journey today!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
