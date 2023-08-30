import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="contact" className="md:flex ">
      <div className="md:w-1/2 w-[100%] bg-slate-200 rounded md:px-24 pl-4 py-10">
        <h1 className="text-2xl font-semibold ">
          Say <span className="text-[#E09132]">Hi,,,,,</span>{" "}
        </h1>
        <div>
          <h1 className="text-xl font-normal py-2">Name</h1>
          <input type="text" placeholder="Name" className="input w-full " />
        </div>
        <div>
          <h1 className="text-xl font-normal py-2">Email</h1>
          <input type="email" placeholder="Email" className="input w-full " />
        </div>
        <div>
          <h1 className="text-xl font-normal py-2 ">Message</h1>
          <textarea
            name="Message"
            id=""
            cols="40"
            rows="5"
            className="rounded w-full ml-1"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-outline btn-ghost mt-4 ml-3">
            Submit
          </button>
        </div>
      </div>
      <div className="md:w-1/2 text-center mt-24">
        <h1 className="text-4xl font-semibold">
          Get in <span className="text-[#E09132]">Touch</span>
        </h1>
        <p className="px-4 mb-6">
          Contact me directly through the provided form or reach out via the
          provided contact details to discuss potential collaborations, project
          inquiries, or any other questions you may have.
        </p>
        <div className="md:text-left ml-10">
          <h1>
            <span className="text-[#E09132]">Email:</span>{" "}
            soyad.abu.jafor@gmail.com
          </h1>
          <h1>
            <span className="text-[#E09132]">Phone: </span>+8801906061620
          </h1>
          <div className="flex justify-center m-4 gap-4">
            <a href="https://github.com/abujafor1924">
              <FaGithubSquare className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/abu-jafor-575726278/">
              <BsLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
