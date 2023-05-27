import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="scroll-m-1  w-10/12 mx-auto p-16">
      <Link className="btn btn-outline btn-success" to={"/"}>
        Home
      </Link>
      <h1 className="text-8xl font-bold text-white md:mt-24 md:ml-72">
        I am a WebDeveloper & build Digitel Product
      </h1>
      <div className="w-6/12 mx-auto  mt-20">
        <h1 className="text-4xl font-bold text-white text-left">About</h1>
        <p className="text-2xl font-semibold text-white space-x-3 mt-8 text-left">
          I m Abu Jafor ,I m a WebDeveloper . I was learning web development by
          programin hiro with jhunkar mjahbub. I m a very friendly and
          team-working person. I am very comfortable working with development by
          Javascript. My vision web development industry-leading position after
          3/4 years .javaScript my Programin mother tongue.
        </p>
        <p className="text-2xl font-semibold text-white space-x-3 mt-8 text-left">
          I was some program organizes and services my department. and sometimes
          debating university various issues. so this is my experience
          convincing and leading a team or communication skill buildup and
          experiences. I m very careful about timing work and dedication to
          work. this is my personality.
        </p>
        <p className="mt-8">
          <a
            href="https://drive.google.com/file/d/1ohZ3N_LyFDN8FsZo2fKI7goGwxPPPTJz/view?usp=drive_link"
            className="text-3xl text-[#EA0F1E] "
          >
            Resumi Drive
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
