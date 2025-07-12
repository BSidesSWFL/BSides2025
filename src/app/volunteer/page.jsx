"use client";

import { useState } from "react";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interests: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data to the console
    console.log("Volunteer form submitted:", formData);
    alert("Thank you for your interest in volunteering! We will get back to you soon.");
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      interests: "",
      availability: "",
    });
  };

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 wrapper">
        <h1 className="text-3xl font-bold mb-4 mt-18 text-center text-teal-700">Volunteer</h1>
        <form onSubmit={handleSubmit} className="max-w-md mt-6 mx-auto my-6 mb-36 md:mb-48">
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-1 font-semibold text-orange-200">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold text-orange-200">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 font-semibold text-orange-200">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interests" className="block mb-1 font-semibold text-orange-200">
              Areas of Interest or Skills
            </label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="availability" className="block mb-1 font-semibold text-orange-200">
              Availability
            </label>
            <textarea
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              rows={3}
              className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md mt-4 font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
