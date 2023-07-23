import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = useContext(authContext);
  const [collegeData, setCollegeData] = useState([]);
  const [search, setSearch] = useState(null);
  const { hasCollege, setHasCollege } = useContext(authContext);
  useEffect(() => {
    fetch(`https://book-university-server.vercel.app/candidate/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("l", loading);
        console.log("d", data);
        if (data.length === 0) {
          setHasCollege(false);
        } else if (data.length !== 0) {
          setHasCollege(true);
        }
      });
  }, [user]);
  console.log(hasCollege);

  useEffect(() => {
    fetch("https://book-university-server.vercel.app/college")
      .then((res) => res.json())
      .then((data) => setCollegeData(data));
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const result = collegeData.filter(
      (college) => college.CollegeName === search
    );
    if (result.length === 0) {
      alert("Please, write the examct Name. Search is case-sensitive.");
      return;
    }
    setSearch(result);
  };
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
      {hasCollege ? (
        <>
          {" "}
          <li>
            <Link to="my-college">My College</Link>
          </li>
        </>
      ) : (
        ""
      )}

      {user ? (
        <>
          {" "}
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
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </>
      )}

      <li className="flex items-center right-0">
        <Link to="">
          {user?.photoURL && (
            <>
              {" "}
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt="image"
              />
            </>
          )}
          {user?.displayName}
        </Link>
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
          <a className="btn btn-ghost normal-case text-xl">Book College</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <form onSubmit={handleSearch} className="form-control">
            <input
              type="text"
              name="search"
              placeholder="Search College"
              className="input input-bordered w-24 md:w-auto"
            />
          </form>
        </div>
      </div>
      <div>
        {search?.map((s) => (
          <>
            <div>
              <h1 className="font-extrabold mt-8 mb-2">Search Results</h1>
              {search?.length} result(s) Found
            </div>
            <div className="mb-8">
              <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
                <div className="flex justify-between pb-4 border-bottom">
                  <div className="flex items-center">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="mb-0 capitalize text-gray-100"
                    ></a>
                  </div>
                  <a rel="noopener noreferrer" href="#"></a>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src="https://source.unsplash.com/random/480x360/?4"
                      alt=""
                      className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                    />
                    <div className="flex items-center text-xs">
                      <span>6 min ago</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                      <h3 className="text-xl font-semibold text-violet-400">
                        <Link to={``}>{}</Link>
                      </h3>
                    </a>
                    <p className="leadi text-gray-400">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Repellat, excepturi. Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Repellat, excepturi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Navbar;
