import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const NavbarTwo = () => {
  const navigate = useNavigate();
  const [isopen, setisopen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const logouts = () => {
    logout().then((res) => {
      console.log(res);
      setisopen(false);
      //  return navigate("/")
    });
  };
  console.log(user);
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className=" lg:w-auto navbar bg-base-300 ">
            {/**navbar 1200px */}
            <div className=" max-w-[425px] lg:max-w-[1400px] lg:mx-auto">
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
              <div className=" px-2 mx-auto lg:mx-40 ">
                <div className="flex  justify-center items-center gap-3">
                  

                  <p className="text-2xl font-bold">Task Management</p>
                </div>
              </div>
              <div className="flex-none hidden lg:block">
                <div className="menu menu-horizontal">
                  {/* Navbar menu content here */}

                  <div className="flex flex-2 gap-7 justify-center items-center  ">
                    <NavLink className="text-xl font-semibold" to="/">
                      Home
                    </NavLink>

                    <NavLink className="text-xl font-semibold" to="/register">
                      Register
                    </NavLink>
                  </div>

                  {/** user name and profile would be here  */}
                  <div className="flex justify-center items-center text-xl font-semibold mx-10 ">
                    {user && <div>Name :{user?.displayName}</div>}
                    {user && (
                      <div className="avatar">
                        <div className="w-16 rounded-full cursor-pointer mx-10">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                    )}

                    {user && (
                      <button onClick={logouts} className="btn btn-outline">
                        log Out
                      </button>
                    )}
                  </div>
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
          <div className="menu p-4 w-80 z-10 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div className="flex mx-auto flex-col gap-2">
              {user && (
                <div className="avatar">
                  <div className="w-16 rounded-full cursor-pointer mx-auto">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              )}
              <div className="flex flex-col justify-between items-center gap-20">
                {user && (
                  <div className="text-xl text-wrap text-center font-semibold h-auto my-1">
                    Name :{user?.displayName}
                    <p className="text-wrap">{user?.email}</p>
                  </div>
                )}

                {user && (
                  <button onClick={logouts} className="btn btn-outline">
                    log Out
                  </button>
                )}
              </div>
              <NavLink
                className="text-xl font-semibold my-3 text-center "
                to="/"
              >
                Home
              </NavLink>
              <NavLink className="text-xl text-center font-semibold" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
