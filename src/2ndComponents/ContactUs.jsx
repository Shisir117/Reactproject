import React, { useState } from "react";
import ReceptionImage from "../assets/Images/reception.jpg";

const EnquiryForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    interest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <section className="container mx-auto px-4 mb-16  pt-20 pb-8">
        <h1 className="text-center text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Submit an Enquiry Form and Our Receptionist Will Contact You
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col lg:flex-row overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={ReceptionImage}
              alt="Reception"
              className="object-cover w-full h-64 lg:h-full"
            />
          </div>

          {/* Form Section */}
          <div className="p-8 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-blue-600 text-center lg:text-left">
              Enquiry Form
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

              {/* Gender */}
              <div className="mb-5">
                <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Gender
                </span>
                <div className="flex items-center mt-2 space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={form.gender === "male"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Male
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={form.gender === "female"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Female
                    </span>
                  </label>
                </div>
              </div>

              {/* Address */}
              <div className="mb-5">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

              {/* E-mail */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                />
              </div>

              {/* Interest */}
              <div className="mb-6">
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                >
                  <option value="">Select a program</option>
                  <option value="BBS">Bachelor In Business Studies</option>
                  <option value="DHM">Diploma In Hotel Management</option>
                  <option value="HM">Hotel Management</option>
                  <option value="Management">Management</option>
                  <option value="Science">Science</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Computer Management">
                    Computer Management
                  </option>
                  <option value="Law">Law</option>
                  <option value="Food & Nutrition">Food & Nutrition</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnquiryForm;
