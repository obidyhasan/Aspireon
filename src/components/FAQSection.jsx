import faqImg from "../assets/faq.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FAQSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="space-y-3">
        <h1 data-aos="zoom-out" className="text-center font-bold text-3xl">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="max-w-2xl text-sm text-center mx-auto text-gray-600">
          Find answers to common questions about our services, pricing, and how
          we can help you achieve your career goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        <div className="flex items-center justify-center">
          <img src={faqImg} className="w-3/5 " alt="" />
        </div>
        <div>
          <div className="join join-vertical w-full rounded">
            <div className="collapse collapse-arrow join-item border-base-300 border p-2">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-semibold">
                What is career counseling, and how can it help me?
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">
                  Career counseling provides guidance and advice to help you
                  choose, develop, or transition in your career. Our experts
                  help identify your strengths, interests, and opportunities.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border p-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold">
                How do I book a career counseling session?
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">
                  You can book a session through the Services section on our
                  website. Select the desired service, check availability, and
                  complete the booking process.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border p-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold">
                Are the counseling sessions conducted online or offline?
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">
                  We offer both online and offline options. You can choose based
                  on your convenience and the service type mentioned in the
                  details.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border p-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold">
                What qualifications do the counselors have?
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">
                  Our counselors are certified professionals with years of
                  experience in career guidance, skill development, and
                  industry-specific expertise.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border p-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold">
                Can I reschedule or cancel a session?
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">
                  Yes, you can reschedule or cancel your session up to 24 hours
                  before the scheduled time. Please contact our support team for
                  assistance.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border p-2">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-semibold">
                Do you offer group sessions or workshops?
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">
                  Yes, we conduct group sessions, workshops, and seminars on
                  topics like resume writing, interview preparation, and skill
                  enhancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
