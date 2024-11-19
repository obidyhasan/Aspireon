import PropTypes from "prop-types";

const SlideLayout = ({ slide }) => {
  const { description, title, image } = slide;

  return (
    <div className="w-full h-full rounded-lg relative">
      <img
        src={image}
        className="rounded-lg w-full h-full object-cover"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 transform  -translate-y-1/2 -translate-x-1/2 space-y-3 text-center">
        <h1 className="font-extrabold text-4xl text-black bg-white px-3 py-2 rounded sm:w-max">
          {title}
        </h1>
        <p className="text-white max-w-96 mx-auto">{description}</p>
        <button className="btn rounded">Explore More</button>
      </div>
    </div>
  );
};

SlideLayout.propTypes = {
  slide: PropTypes.object,
};

export default SlideLayout;
