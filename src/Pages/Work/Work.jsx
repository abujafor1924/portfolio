import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="w-8/12 m-auto mb-[100%] ">
      <Link className="btn btn-outline btn-success" to={"/"}>
        Home
      </Link>
      <h1 className="text-6xl font-bold text-white p-8 mb-16">
        My Dream and Hard working Project
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <a href="https://6469b72e4c260d2e2fba4a64--magical-horse-8b4d12.netlify.app/">
            <div className="card w-full h-96 bg-base-100 shadow-xl  image-full">
              <figure>
                <img src="https://i.ibb.co/mcgLL42/pic.png" alt="Toy shop" />
              </figure>
              <div className="card-body m-auto">
                <h2 className="card-title text-center">Toy Shop</h2>
                <p>
                  This is a Toy shop. this not all functonality same a toy shop
                  this is some functonality active practice shop{" "}
                </p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="https://64717b90e9d7032dfe8e5cd0--idyllic-genie-44f477.netlify.app/">
            <div className="card w-full h-96 bg-base-100 shadow-xl  image-full">
              <figure>
                <img
                  src="https://i.ibb.co/ZJgJQKz/portfolio.png"
                  alt="Toy shop"
                />
              </figure>
              <div className="card-body m-auto">
                <h2 className="card-title text-center">PortFolio</h2>
                <p>This is my simple PortFolio Site.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
