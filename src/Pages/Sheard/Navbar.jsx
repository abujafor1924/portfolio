const Navbar = () => {
  const navbar = (
    <>
      <li>
        <a href="#banar" className="font-bold ">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="font-bold">
          About
        </a>
      </li>
      <li>
        <a href="#project" className="font-bold">
          Project
        </a>
      </li>
      <li>
        <a href="#contact" className="font-bold">
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar  text-white bg-[#E09132] fixed z-20   w-[100%] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navbar}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          Abu Jafor
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navbar}</ul>
      </div>
    </div>
  );
};

export default Navbar;
