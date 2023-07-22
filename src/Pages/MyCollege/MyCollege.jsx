import React from "react";

const MyCollege = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
        <div className="flex justify-center">
          <div className="max-w-lg p-4 shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
            <div className="flex justify-between pb-4 border-bottom">
              <div className="flex items-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="mb-0 capitalize dark:dark:text-gray-100"
                >
                  Photography
                </a>
              </div>
              <a rel="noopener noreferrer" href="#">
                See All
              </a>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src="https://source.unsplash.com/random/480x360/?4"
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:dark:bg-gray-500"
                />
                <div className="flex items-center text-xs">
                  <span>6 min ago</span>
                </div>
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold dark:dark:text-violet-400">
                    Facere ipsa nulla corrupti praesentium pariatur architecto
                  </h3>
                </a>
                <p className="leadi dark:dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Repellat, excepturi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src="https://source.unsplash.com/100x100/?portrait?1"
                alt=""
                className="object-cover object-center w-full h-full rounded dark:dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                <span className="text-sm dark:dark:text-gray-400">
                  General manager
                </span>
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
                    leroy.jenkins@company.com
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
                  <span className="dark:dark:text-gray-400">
                    +25 381 77 983
                  </span>
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
                <div className="flex flex-col w-full">
                  <textarea
                    rows="3"
                    placeholder="Message..."
                    className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"
                  ></textarea>
                  <button
                    type="button"
                    className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400"
                  >
                    Post feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCollege;
