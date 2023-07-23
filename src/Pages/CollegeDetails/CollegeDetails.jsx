import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    fetch(`https://book-university-server.vercel.app/college/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);

  return (
    <div>
      <div className="bg-gray-800 text-gray-50">
        <div className="container grid grid-cols-12 mx-auto bg-gray-900">
          <div
            className="bg-no-repeat bg-cover bg-gray-500 col-span-full lg:col-span-4"
            style={{
              backgroundImage: `url(${college?.collegeImage})`,
              backgroundPosition: "center center",
              backgroundBlendMode: `multiply`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start">
              <span className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900">
                Rating : {college?.Rating}
              </span>
            </div>
            <h1 className="text-3xl mt-4 font-semibold">
              {college?.CollegeName}
            </h1>
            <p className="flex-1 pt-2">
              Research History : {college?.ResearchHistory}
            </p>
            <p className="flex-1 pt-2">
              Admission Date : {college?.AdmissionDate}
            </p>
            <p className="flex-1 pt-2">
              Admission Process : {college?.admissionProcess}
            </p>
            <p className="flex-1 pt-2">
              Research History : {college?.ResearchHistory}
            </p>
            <p className="flex-1 pt-2">
              Research Works :{" "}
              {college?.ResearchWorks?.map((w) => (
                <li>{w}</li>
              ))}
            </p>
            <p className="flex-1 pt-2">
              Sports :{" "}
              {college?.Sports?.map((s) => (
                <li>{s}</li>
              ))}
            </p>
            <p className="flex-1 pt-2">
              Sports :{" "}
              {college?.Events?.map((e) => (
                <li>{e}</li>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
