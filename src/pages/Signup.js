import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubscriptionPlanComparison from '../components/SubscriptionPlanComparison';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [plan, setPlan] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Handle signup logic here
            console.log('Signup submitted', { email, password, plan });
        }
    };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                    <>
                        <div>
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                    </>
                )}
                {step === 2 && (
                    <div>
                        <label className="block mb-1">Select Subscription Plan</label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="basic"
                                    checked={plan === 'basic'}
                                    onChange={(e) => setPlan(e.target.value)}
                                    className="mr-2"
                                />
                                Basic Plan
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="premium"
                                    checked={plan === 'premium'}
                                    onChange={(e) => setPlan(e.target.value)}
                                    className="mr-2"
                                />
                                Premium Plan
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="vip"
                                    checked={plan === 'vip'}
                                    onChange={(e) => setPlan(e.target.value)}
                                    className="mr-2"
                                />
                                VIP Plan
                            </label>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h3 className="text-xl font-bold mb-2">Confirm Your Details</h3>
                        <p>Email: {email}</p>
                        <p>Subscription Plan: {plan}</p>
                    </div>
                )}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    {step < 3 ? 'Next' : 'Sign Up'}
                </button>
            </form>
        {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="mt-2 text-blue-600 hover:underline">
                Back
            </button>
        )}
        <p className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>

        {step === 2 && <SubscriptionPlanComparison/>}
    </div>
  );
};

export default Signup;

