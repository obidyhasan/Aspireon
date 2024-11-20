import ConnectSection from "./ConnectSection";
import FAQSection from "./FAQSection";
import Services from "./Services";
import SliderLayout from "./SliderLayout";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Helmet>
        <title>Home | Aspireon</title>
      </Helmet>

      <section className="my-3">
        <SliderLayout></SliderLayout>
      </section>
      <section className="my-14">
        <Services></Services>
      </section>
      <section className="my-20">
        <ConnectSection></ConnectSection>
      </section>
      <section className="my-20">
        <FAQSection></FAQSection>
      </section>
    </div>
  );
};

export default Home;
