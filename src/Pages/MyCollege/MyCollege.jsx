import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://book-university-server.vercel.app/my-college/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.resultCollege) {
          alert(`You don't have booked any college`);
          navigate("/admission");
        } else {
          setUserData(data?.result[0]);
          setCollegeData(data?.resultCollege[0]);
        }
      });
  }, []);
  const [collegeData, setCollegeData] = useState({});
  const {
    CollegeName,
    AdmissionDate,
    ResearchHistory,
    ResearchWorks,
    admissionProcess,
    collegeImage,
    Events,
    Sports,
  } = collegeData;

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {
    address,
    birthDate,
    candidateName,
    candidateEmail,
    phone,
    photoURL,
    subject,
  } = userData;

  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.rating.value > 5 || form.rating.value < 0) {
      alert("Put a value between 1.0 to 5.0");
      form.reset();
      return;
    }
    const rating = form.rating.value;

    const review = {
      feedback: form.feedback?.value,
      collegeName: collegeData?.CollegeName,
      userName: userData?.candidateName,
      photoURL: userData?.photoURL,
      rating: rating,
    };
    fetch("https://book-university-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Successfully Added");
          form.reset();
        }
      });
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
        <div className="flex justify-center">
          <div className="max-w-lg p-4 shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={collegeImage}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:dark:bg-gray-500"
                />
              </div>
              <div className="space-y-2">
                <p className="block">
                  <h3 className="text-xl font-semibold dark:dark:text-violet-400">
                    {CollegeName}
                  </h3>
                </p>
                <p className="leadi dark:dark:text-gray-400">
                  {ResearchHistory}
                </p>

                <p className="text-sm dark:text-gray-400">
                  <span className="font-extrabold">Admission</span> :{" "}
                  {AdmissionDate}
                </p>
                <p className="text-sm dark:text-gray-400">
                  <span className="font-extrabold">Admission Process : </span> :{" "}
                  {admissionProcess}
                </p>
                <p>
                  <span className="font-extrabold">Events</span> :
                  {Events?.map((event) => (
                    <li>{event}</li>
                  ))}
                </p>
                <p>
                  <span className="font-extrabold">Research</span> :
                  {ResearchWorks?.map((r) => (
                    <li>{r}</li>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="max-w-md p-8 items-center sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={photoURL}
                alt=""
                className="object-cover object-center w-full h-full rounded dark:dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{candidateName}</h2>
                <span className="text-sm dark:dark:text-gray-400">
                  Subject : {subject}
                </span>
                <p className="text-sm dark:dark:text-gray-400">
                  BirthDate : {birthDate}
                </p>
                <p className="text-sm dark:dark:text-gray-400">
                  Address : {address}
                </p>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="dark:dark:text-gray-400">
                    {candidateEmail}
                  </span>
                </span>
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="dark:dark:text-gray-400">{phone}</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:dark:bg-gray-900 dark:dark:text-gray-100">
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">
                  Provide us with your Feedback
                </h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                </div>

                <form
                  onSubmit={handleFeedback}
                  className="flex flex-col w-full"
                >
                  <fieldset className="w-full space-y-1 dark:text-gray-100 mb-4">
                    <div className="flex">
                      <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700">
                        Rating
                      </span>
                      <input
                        type="text"
                        style={{ outline: "none", paddingLeft: "4px" }}
                        id="url"
                        name="rating"
                        required
                        placeholder="Rate us ranging from 1.0 to 5"
                        className="flex flex-1 border sm:text-sm rounded-r-md dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800"
                      />
                    </div>
                  </fieldset>
                  <textarea
                    rows="3"
                    required
                    placeholder="Message..."
                    name="feedback"
                    className="p-4 w-full rounded-md resize-none text-gray-100 bg-gray-900"
                  ></textarea>
                  <button
                    type="submit"
                    className="py-4 btn-wide my-8 font-semibold rounded-md text-gray-900 bg-violet-400"
                  >
                    Post feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCollege;
