import React, { useState } from "react";
import { sendUsername } from "../api/routes";

export const RegisterAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    // Send username and password to the backend
    const data = await sendUsername({ username, password });
    console.log(data.message); // Log the response message from the backend
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic
    console.log("Google Sign-In button clicked");
    // Redirect or invoke Firebase auth logic for Google sign-in
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Register For an Account</h1>
      <form
        onSubmit={sendData} // Use onSubmit for form submission
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
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Enter Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mb-4"
        >
          Register
        </button>

        {/* Google Sign-In Button */}
        <button
          type="button"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center"
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </form>
    </div>
  );
};
