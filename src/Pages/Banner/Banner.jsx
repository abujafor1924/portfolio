import { Helmet } from "react-helmet";
// import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <Helmet>
        <title>Home || Abu Jafor</title>
      </Helmet>
      <div className="bg-[#050816] h-[90vh] text-center">
        <div>
          <div className=" pt-44  mx-16">
            <h1 className="text-6xl font-bold mb-4 text-white">
              Hi There,<span className="text-[#E09132]"> I am ABU JAFOR</span>
            </h1>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              I am a <span className="text-[#E09132]">Front End Developer</span>
            </h2>
            <p className="text-xl font-semibold mb-6 text-white">
              I am create professional web application using MERN stack
            </p>
            {/* <div className="flex text-6xl text-cyan-900 gap-4 mb-6">
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                <FaLinkedin />
              </a>
              <a href="https://github.com/abujafor1924">
                {" "}
                <FaGithubSquare />
              </a>
            </div> */}
            <button className="btn btn-outline  px-6 text-white  text-2xl font-semibold">
              <a href="https://drive.google.com/file/d/1-qJ7KhCbyWDHbdwuxB_GI0vNtZ5sGfV-/view?usp=sharing">
                {" "}
                Resume
              </a>
            </button>
            <button className="btn px-6 py-2 mx-4 text-2xl font-semibold text-white ">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;