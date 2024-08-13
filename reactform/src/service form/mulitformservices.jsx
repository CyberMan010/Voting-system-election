import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ServiceForm = () => {
  const [formType, setFormType] = useState('candidate');

  const toggleFormType = () => {
    setFormType(formType === 'candidate' ? 'advertisement' : 'candidate');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Form Submitted!',
      text: `You submitted the ${formType} form.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="mb-6">
        <div className="relative w-full h-12 rounded-full bg-gray-200 cursor-pointer" onClick={toggleFormType}>
          <div className={`absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded-full transition-transform duration-300 ease-in-out ${formType === 'advertisement' ? 'transform translate-x-full' : ''}`}></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around text-sm font-bold">
            <span className={formType === 'candidate' ? 'text-white' : 'text-gray-700'}>Candidate Service</span>
            <span className={formType === 'advertisement' ? 'text-white' : 'text-gray-700'}>Advertisement</span>
          </div>
        </div>
      </div>

      <p className="mb-4 text-gray-600 text-center">
        {formType === 'candidate' 
          ? 'Please fill your information for candidate service' 
          : 'Provide details for your advertisement'}
      </p>

      {formType === 'candidate' ? (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="(123) 456 - 7890"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Mail ID"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </>
      ) : (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adDetails">
            Advertisement Details
          </label>
          <textarea
            id="adDetails"
            placeholder="Enter your advertisement details here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
          />
        </div>
      )}

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
        Submit
      </button>
    </form>
  );
};

export default ServiceForm;