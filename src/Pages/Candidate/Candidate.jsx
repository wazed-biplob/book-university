import React, { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";

const Candidate = () => {
  const { user } = useContext(authContext);
  console.log(user);
  const location = window.location.href;
  console.log(location);
  return (
    <>
      <section className="p-6 bg-gray-800 text-gray-50">
        <form
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Provide us with Correct and Legit Information so that No issues
                arise in Future.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Candidate Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Subject
                </label>
                <input
                  id="lastname"
                  type="text"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Candidate Email
                </label>
                <input
                  disabled
                  id="email"
                  type="email"
                  placeholder={user?.email}
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="city" className="text-sm">
                  Candidate Phone Number
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="state" className="text-sm">
                  PhotoURL
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm">
                  Date of Birth
                </label>
                <input
                  id="zip"
                  type="date"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Candidate;
