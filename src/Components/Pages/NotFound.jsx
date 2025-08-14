// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-primary text-white px-6 cursor-none">
      <h1 className="text-[120px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</p>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition-all duration-300 group"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
