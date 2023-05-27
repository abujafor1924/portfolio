import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home || Abu Jafor</title>
      </Helmet>
      <div className="w-10/12 mx-auto md:flex lg:flex justify-evenly text-center">
        {/* data-aos="fade-up" */}
        <div className="mt-40 -ml-20">
          <ul className="text-9xl font-extrabold text-left">
            <h1 className="transform hover:translate-x-40  transition duration-1000 ease-in-out   font-bold py-2 px-4  text-white">
              {" "}
              Hello.
            </h1>
            <li className="transform hover:translate-x-40  transition duration-1000 ease-in-out   font-bold py-2 px-4  text-[#EA0F1E]">
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li className="transform hover:translate-x-40  transition duration-1000 ease-in-out   font-bold py-2 px-4  text-[#EA0F1E]">
              <Link to={"/work"}>WORK</Link>
            </li>
            <li className="transform hover:translate-x-40  transition duration-1000 ease-in-out   font-bold py-2 px-4  text-[#EA0F1E]">
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="md:mt-52 ">
          <img
            className="w-96 h-96 rounded-full opacity-50"
            src="../../../src/assets/profile-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
