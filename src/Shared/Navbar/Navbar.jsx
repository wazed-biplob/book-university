import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  console.log(user);
  const navLinks = (
    <>
      <li>
        <Link>Home</Link>
      </li>

      <li>
        <Link to="/college">College</Link>
      </li>

      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="my-college">My College</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>

      <li>
        <Link
          onClick={() => {
            logOut()
              .then((r) => console.log(""))
              .catch((e) => console.log(e));
          }}
        >
          Logout
        </Link>
      </li>
      <li>
        <Link to="/registration">Registration</Link>
      </li>
      <li>
        <Link to="">{user?.displayName}</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Book University</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
