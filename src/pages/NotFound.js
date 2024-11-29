import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you are looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;

