import Services from "./Services";
import SliderLayout from "./SliderLayout";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <section className="my-3">
        <SliderLayout></SliderLayout>
      </section>
      <section className="my-10">
        <Services></Services>
      </section>
    </div>
  );
};

export default Home;
