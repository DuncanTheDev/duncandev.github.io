import asset from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const Information = [
    { img: asset.mail, name: "duncan.patrick02@gmail.com" },
    { img: asset.call, name: "+639302191307" },
    { img: asset.location, name: "Bauan, Batangas, Philippines" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      mirror: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div
      id="contact"
      className="min-h-screen w-[90%] md:w-[80%] mx-auto px-4 pt-20 md:px-8 py-12 flex flex-col justify-center bg-white"
    >
      <div className="text-center mb-12" data-aos="zoom-in">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2b2c34]">
          Contact Me
        </h1>
        <div>
          <h2 className="text-2xl font-semibold text-[#6246ea] mt-8">
            Get in Touch
          </h2>
          <p className=" font-semibold text-[#2b2c34]">
            Let's Build Something Great Together
          </p>
        </div>
      </div>
      <div className="contact-section flex justify-center gap-20">
        <div
          className="flex flex-col gap-2 w-full max-w-md bg-[#d1d1e9] p-5 rounded-2xl"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-0.5">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              className="bg-white p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              className="bg-white p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="bg-white p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              rows="5"
            />
          </div>
          <div className="flex justify-center">
            <button className="w-40 p-2 mt-2 text-[#fffffe] bg-[#6246ea] rounded-md cursor-pointer  hover:bg-[#8069f1] transition-colors duration-200 active:bg-[#6246ea]">
              Submit
            </button>
          </div>
        </div>

        <div data-aos="fade-left">
          <h2 className="details text-2xl font-semibold text-[#2b2c34] mb-2">
            My Contact Details
          </h2>
          <div className="flex flex-col gap-3">
            {Information.map((info) => (
              <div key={info.name} className="flex items-center gap-2">
                <img src={info.img} alt="" />
                <span>{info.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
