import React, { useState } from 'react';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    // In a real application, you would validate credentials with a backend
    // For this example, we'll just simulate a successful login
    login({ email, password });
    const from = location.state?.from?.pathname || '/dashboard';
    setLoading(false)
    navigate(from, { replace: true });
  };

  return (
      <div className="bg-amber-200 dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3"
               style={{
                 background: `url('/images/bg/bg1.jpeg')`,
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat"
               }}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white sm:text-4xl">Fan-Exclusive Streaming
                  Platform</h2>

                <p className="max-w-xl mt-3 text-gray-300 text-lg">
                  Welcome to SEAL&apos;s fan-exclusive streaming platform were you&apos;ll get exclusive
                  access to Artist&apos;s music, live streams,
                  concerts, merch and many more...
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img className="w-auto h-16 sm:h-16" src="/images/favicon.png"
                       alt="Seal Logo"/>
                </div>

                <p className="mt-3 text-gray-800 dark:text-gray-300">Sign in to access your account</p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Email
                      Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"
                           placeholder="example@example.com"
                           className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password"
                             className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                      <a href="/login" className="text-sm text-gray-800 focus:text-amber-500 hover:text-amber-500 hover:underline">Forgot password?</a>
                    </div>

                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password"
                           placeholder="Your Password"
                           className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  </div>

                  <div className="mt-6">
                    {loading ? (
                        <div className="text-center">
                          <div role="status">
                            <svg aria-hidden="true"
                                 className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                 viewBox="0 0 100 101" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"/>
                              <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                    ) : (
                        <button onClick={handleSubmit}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-amber-600 rounded-lg hover:bg-amber-400 focus:outline-none focus:bg-amber-400 focus:ring focus:ring-amber-300 focus:ring-opacity-50">
                          Sign in
                        </button>
                    )}
                  </div>

                </form>

                <p className="mt-6 text-sm text-center text-gray-800">Don&#x27;t have an account yet? <Link to="/signup" className="text-amber-600 hover:underline">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;

