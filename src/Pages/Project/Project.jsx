const Project = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center pt-10 ">
        Project Section{" "}
      </h1>
      <div className="py-10 grid grid-cols-3 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl py-5">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/rsdT7vx/screencapture-superb-trifle-df853c-netlify-app-2023-07-03-21-11-58-1.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="ml-16 mt-4">
            <button className="btn btn-outline btn-accent">
              <a href="https://superb-trifle-df853c.netlify.app/static">Live</a>
            </button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl py-5">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/F5ZwL8q/screencapture-magical-horse-8b4d12-netlify-app-2023-07-03-21-15-02.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
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
        <div className="card w-96 bg-base-100 shadow-xl py-5">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/rtcpqNm/screencapture-school-8b119-web-app-2023-07-03-21-21-16.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
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
