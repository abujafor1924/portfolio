const Project = () => {
  return (
    <div id="project" className="pt-10">
      <h1 className="text-6xl font-bold text-center pt-10 ">
        Project Section{" "}
      </h1>
      <div className="py-10 grid md:grid-cols-3 gap-4 mx-auto  ">
        <div
          data-aos="fade-right"
          className="card w-96 bg-base-100 shadow-xl mx-auto py-5 hover:p-2"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/98XW5bb/Capture1.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <h1 className="text-2xl font-semibold text-center py-2">
            Ai University
          </h1>
          <div className="grid grid-cols-3 gap-2 px-4">
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              HTML
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              CSS
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              JavaScript
            </p>
          </div>
          <div className="ml-16 mt-4 mx-auto">
            <button className="btn btn-outline btn-accent">
              <a href="https://superb-trifle-df853c.netlify.app/static">Live</a>
            </button>
            <button className="btn btn-outline btn-accent ml-4">
              <a href="https://superb-trifle-df853c.netlify.app/static">Live</a>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card w-96 bg-base-100 shadow-xl mx-auto py-5 hover:p-2"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/SKzKD58/Capture2.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <h1 className="text-2xl font-semibold text-center py-2">
            Iyad Toy Shop
          </h1>
          <div className="grid grid-cols-3 gap-2 px-4">
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              HTML
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              TELWIND
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              React
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              Express
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              MongoDB
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              FireBase
            </p>
          </div>
          <div className="ml-16 mt-4">
            <button className="btn btn-outline btn-info mr-4">
              <a href="https://github.com/abujafor1924/as-11-server-site">
                server
              </a>{" "}
            </button>
            <button className="btn btn-outline btn-success mr-4">
              {" "}
              <a href="https://github.com/abujafor1924/as-11-clind-site">
                Clind
              </a>{" "}
            </button>
            <button className="btn btn-outline btn-accent">
              {" "}
              <a href="https://magical-horse-8b4d12.netlify.app/"> Live</a>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="card w-96 bg-base-100 shadow-xl mx-auto py-5 hover:p-2"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/HCBtqVH/Capture3.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <h1 className="text-2xl font-semibold text-center py-2">
            Language Lerning School
          </h1>
          <div className="grid grid-cols-3 gap-2 px-4">
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              HTML
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              TELWIND
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              React
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              Express
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              MongoDB
            </p>
            <p className="bg-zinc-300 text-center p-2 rounded-xl font-semibold ">
              FireBase
            </p>
          </div>
          <div className="ml-16 mt-4">
            <button className="btn btn-outline btn-info mr-4">server</button>
            <button className="btn btn-outline btn-success mr-4">Clind</button>
            <button className="btn btn-outline btn-accent">
              <a href="https://school-8b119.web.app/">Live</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
