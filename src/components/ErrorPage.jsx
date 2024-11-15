import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-xl text-center w-full max-w-xl md:max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-extrabold text-blue-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          The page you are looking for doesn’t exist, or an error occurred. Try
          returning to the homepage or going back.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleBack()}
            className="px-6 py-3 text-base md:text-lg bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
