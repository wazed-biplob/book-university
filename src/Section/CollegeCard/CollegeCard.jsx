import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    fetch("https://book-university-server.vercel.app/college")
      .then((res) => res.json())
      .then((data) => setCollegeData(data));
  }, []);
  return (
    <>
      <div>
        <h1
          style={{ fontSize: "32px" }}
          className="mt-8 mb-2 text-center font-extrabold"
        >
          Favourite Colleges
        </h1>
      </div>
      <div
        style={{ justifyItems: "center" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6"
      >
        {collegeData.slice(0, 3).map((college) => (
          <>
            <div className="flex border flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              <div>
                <img
                  src={college.collegeImage}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
                <h2 className="mb-1 text-xl font-semibold">
                  {college.CollegeName}
                </h2>
                <p className="text-sm dark:text-gray-400">
                  <span className="font-extrabold">Admission</span> :{" "}
                  {college.AdmissionDate}
                </p>

                <p>
                  <span className="font-extrabold">Events</span> :
                  {college.Events.map((event) => (
                    <li>{event}</li>
                  ))}
                </p>
                <p className="text-sm dark:text-gray-400">
                  <span className="font-extrabold">Research History</span> :
                  {college.ResearchHistory}
                </p>
                <p>
                  <span className="font-extrabold">Sports</span> :
                  {college.Sports.map((event) => (
                    <li>{event}</li>
                  ))}
                </p>
              </div>
              <div className="flex flex-wrap justify-center">
                <div>
                  <Link to={`/college-details/${college._id}`}>
                    <button
                      style={{
                        width: "200px",
                        height: "40px",
                        border: "1px solid lightblue",
                      }}
                      className="border btn btn-info "
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CollegeCard;
