import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="min-w-auto bg-base-300 navbar ">
          {/**navbar 1200px */}
          <div className=" w-full  h-[70px] max-w-[1500px] mx-auto ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <div className="flex  justify-center items-center gap-3">
                <p className="text-2xl font-bold">Task Management</p>
              </div>
            </div>
            <div className="flex-none hidden z-50 lg:block">
              <div className="menu menu-horizontal z-50">
                {/* Navbar menu content here */}

                <div className="flex gap-3 w-[600px] justify-center items-center  ">
                  <NavLink className="text-xl font-semibold" to="/">
                    Home
                  </NavLink>
                  <NavLink className="text-xl font-semibold" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <NavLink className="text-xl font-semibold" to="/register">
                    Register
                  </NavLink>
                </div>
                {/** user name and profile would be here  */}
                <div className="flex justify-center items-center text-xl font-semibold "></div>
                <div className="flex gap-3 justify-center items-center  "></div>
              </div>
            </div>
            {/**end */}
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full z-50 bg-base-200">
          {/* Sidebar content here */}
          <div className="flex z-40 flex-col gap-2">
            <NavLink className="text-xl font-semibold" to="/">
              Home
            </NavLink>
            <NavLink className="text-xl font-semibold" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="text-xl font-semibold" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
