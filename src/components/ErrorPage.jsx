import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 px-4">
      <div className="p-4 md:p-10 rounded-lg text-center w-full max-w-xl md:max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">Page Not Found</h2>
        <p className="text-base md:text-lg text-gray-600 md:mb-4">
          It looks like the page you're looking for doesn't exist. But don't
          worry, we've got plenty of other great content for you to explore!
        </p>
        <div className="md:h-[65vh] mb-2">
          <img
            src="https://img.freepik.com/premium-vector/flat-vector-man-upset-error-404-maintenance-concept_939213-325.jpg?w=740"
            alt="Error illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <button
          onClick={() => handleBack()}
          className="px-6 py-3 text-base md:text-lg bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
