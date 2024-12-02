import React from 'react';
import { Link } from 'react-router-dom';

const SignupComplete = () => {
    return (
        <div className="bg-amber-200 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 p-10 bg-white bg-opacity-90 rounded-xl shadow-xl">
                <div className="text-center">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-16 sm:h-16" src="/images/favicon.png" alt="Seal Logo" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                        Registration Complete!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Thank you for joining our fan-exclusive streaming platform.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                            Your account has been successfully created. You can now log in to access exclusive content from your favorite artists.
                        </p>
                    </div>
                    <div>
                        <Link
                            to="/login"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupComplete;

