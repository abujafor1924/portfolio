import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="scroll-m-1  w-10/12 mx-auto p-16">
      <Link className="btn btn-outline btn-success" to={"/"}>
        Home
      </Link>
      <h1 className="text-8xl font-bold text-white md:mt-24 md:ml-72">
        Something Special for yours!
      </h1>
      <div className="w-6/12 mx-auto  mt-20">
        <h1 className="text-4xl font-bold text-white text-left">Contact</h1>
        <p className="text-2xl font-semibold text-white space-x-3 mt-8 text-left">
          Email me with any questions or inquiries . I would be happy to answer
          your questions and set up a meeting with you.
        </p>
        <p className="mt-4">
          <a className="text-3xl text-[#EA0F1E] ">(+880) 1906061620</a>
        </p>
        <p className="mt-4">
          <a className="text-3xl text-[#EA0F1E] ">soyad.abu.jafor@gmail.com</a>
        </p>
        <p className="mt-4">
          <a
            href="https://github.com/abujafor1924"
            className="text-3xl text-[#EA0F1E] "
          >
            GitHub
          </a>
        </p>
        <p className="mt-4">
          <a
            href="https://www.linkedin.com/in/abu-jafor-575726278/"
            className="text-3xl text-[#EA0F1E] "
          >
            Linkdin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
