import React, { useState } from "react";
import { sendUsername } from "../api/routes";

export const RegisterAccount = () => {
  const [username, setUsername] = useState(" ");

  const sendData = async (e) => {
    e.preventDefault();  // Prevent the form from submitting and reloading the page

    const data = await sendUsername(username);  // Send username to the backend
    console.log(data.message);  // Log the response message from the backend
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Register For an Account</h1>
      <form
        onSubmit={sendData} // Use onSubmit instead of onClick for form submission
        className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Username Field */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Enter Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};
