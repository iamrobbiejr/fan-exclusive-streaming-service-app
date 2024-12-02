import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SubscriptionPlanComparison from "./SubscriptionPlanComparison";


const backgrounds = [
  '/images/bg/bg.jpeg',
  '/images/bg/bg1.jpeg',
  '/images/bg/bg3.jpeg'
];

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [plan, setPlan] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [gender, setGender] = useState('');
const [dob, setDob] = useState('');
const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      // Handle signup logic here
      console.log('Signup submitted', { email, password, plan });
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        // Navigate to dashboard or show success message
        navigate('/complete')
      }, 2000);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
            <>
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="gender" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Gender
                  </label>
                  <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="dob" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Date of Birth
                  </label>
                  <input
                      type="date"
                      id="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="phone" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Phone Number
                  </label>
                  <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (123) 456-7890"
                      className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                    Email Address
                  </label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                  Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="confirm-password" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Your Password"
                    className="block w-full px-4 py-2 mt-2 text-amber-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                />
              </div>
            </>
        );
      case 2:
        return (
            <div>
              <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Select Subscription Plan</label>
              <div className="space-y-2">
                {['basic plan $3.99/month ', 'premium plan $9.99/month', 'vip plan $14.99/month'].map((planOption) => (
                    <label key={planOption} className="flex items-center">
                      <input
                          type="radio"
                          value={planOption}
                          checked={plan === planOption}
                          onChange={() => setPlan(planOption)}
                          className="mr-2 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{planOption}</span>
                    </label>
                ))}
              </div>
              <SubscriptionPlanComparison />
            </div>
        );
      case 3:
        return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Confirm Your Details</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Email:</strong> {email}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Subscription Plan:</strong> {plan}</p>
            </div>
        );
      default:
        return null;
    }
  };

  return (
      <div className="bg-amber-200 dark:bg-gray-900">
        <div className="flex justify-center h-screen">


          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img className="w-auto h-16 sm:h-16" src="/images/favicon.png" alt="Seal Logo"/>
                </div>
                <p className="mt-3 text-gray-800 dark:text-gray-300">
                  Step {step} of 3: {step === 1 ? "Account Details" : step === 2 ? "Choose Plan" : "Confirmation" }
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}
                  <div className="mt-6">
                    {loading ? (
                        <div className="text-center">
                          <div role="status">
                            <svg aria-hidden="true"
                                 className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-amber-600"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-amber-600 rounded-lg hover:bg-amber-400 focus:outline-none focus:bg-amber-400 focus:ring focus:ring-amber-300 focus:ring-opacity-50"
                        >

                          {step < 3 ? 'Next' :  'Complete Sign Up'}
                        </button>
                    )}
                  </div>
                </form>

                {step > 1 && (
                    <button
                        onClick={() => setStep(step - 1)}
                        className="mt-4 w-full px-4 py-2 tracking-wide text-amber-600 transition-colors duration-300 transform border border-amber-600 rounded-lg hover:bg-amber-600 hover:text-white focus:outline-none focus:bg-amber-600 focus:text-white focus:ring focus:ring-amber-300 focus:ring-opacity-50"
                    >
                      Back
                    </button>
                )}

                <p className="mt-6 text-sm text-center text-gray-800 dark:text-gray-300">
                  Already have an account? <Link to="/login" className="text-amber-600 hover:underline">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
          <div
              className="hidden bg-cover bg-no-repeat lg:block lg:w-2/3"
              style={{
                background: `url(${backgrounds[step - 1]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white sm:text-4xl">
                  {step === 1 ? "Join Our Fan-Exclusive Platform" : step === 2 ? "Choose Your Experience" : "Almost There!"}
                </h2>
                <p className="max-w-xl mt-3 text-gray-300 text-lg">
                  {step === 1 ? "Create your account to access exclusive content from your favorite artists." : step === 2 ? "Select a plan that suits your passion for music and entertainment." : "Review your details and get ready to dive into a world of exclusive content."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignupForm;

