import React, { useContext, useEffect } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { useFetcher, useParams } from "react-router-dom";

const Candidate = () => {
  const { user } = useContext(authContext);
  const { id } = useParams();

  const handleCandidateInfo = (e) => {
    e.preventDefault();
    const form = e.target;

    const candidate = {
      candidateName: form.name.value,
      candidateEmail: form.email.value,
      collegeId: id,
      subject: form.subject.value,
      address: form.address.value,
      phone: form.phone.value,
      birthDate: form.date.value,
      photoURL: form.photo.value,
    };

    fetch("http://localhost:5000/candidate-info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(candidate),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.insertedId) {
          alert("Class Has Been Added Successfully.");
        }
      });
  };
  return (
    <>
      <section className="p-6 bg-gray-800 text-gray-50">
        <form
          onSubmit={handleCandidateInfo}
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
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Subject
                </label>
                <input
                  required
                  name="subject"
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
                  required
                  id="email"
                  type="email"
                  name="email"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  required
                  type="text"
                  placeholder=""
                  name="address"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="city" className="text-sm">
                  Candidate Phone Number
                </label>
                <input
                  id="city"
                  required
                  type="text"
                  placeholder=""
                  name="phone"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="state" className="text-sm">
                  PhotoURL
                </label>
                <input
                  id="state"
                  required
                  type="text"
                  placeholder=""
                  name="photo"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm">
                  Date of Birth
                </label>
                <input
                  id="zip"
                  required
                  type="date"
                  placeholder=""
                  name="date"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <button className="btn btn-wide">Submit</button>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Candidate;
