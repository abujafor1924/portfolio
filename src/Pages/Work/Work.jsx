import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="w-8/12 m-auto mb-[100%] ">
      <Link className="btn btn-outline btn-success" to={"/"}>
        Home
      </Link>

      <div>
        <h1 className="text-6xl font-bold text-white p-8 mb-16">
          My Dream and Dadigation Project
        </h1>
        <a href="https://6469b72e4c260d2e2fba4a64--magical-horse-8b4d12.netlify.app/">
          <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="../../../src/assets/pic.PNG" alt="Toy shop" />
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
    </div>
  );
};

export default Work;
