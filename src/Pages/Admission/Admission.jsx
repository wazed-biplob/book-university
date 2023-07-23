import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [collegeData, setCollegeData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/college")
      .then((res) => res.json())
      .then((data) => setCollegeData(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collegeData.map((college) => (
          <div>
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
                    src={college.collegeImage}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                  />
                  <div className="flex items-center text-xs">
                    <span>Admission Date : {college.AdmissionDate}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold text-violet-400">
                      <Link to={`/candidate/${college?._id}`}>
                        {college?.CollegeName}
                      </Link>
                    </h3>
                  </a>
                  <p className="leadi text-gray-400">
                    {college.ResearchHistory}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admission;
