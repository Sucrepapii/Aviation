import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Parse redirect params
    const queryParams = new URLSearchParams(location.search);
    const redirectParam = queryParams.get('redirect');
    const flightParam = queryParams.get('flight');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                name,
                email,
                password
            });

            // Save token
            localStorage.setItem('flivan_token', response.data.token);

            // Navigate to profile or booking flow
            if (redirectParam === 'booking' && flightParam) {
                navigate(`/book/${flightParam}`);
            } else {
                navigate('/profile');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to register account.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center pt-24 pb-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-linear-to-r from-accent/20 to-transparent skew-x-12 transform"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-linear-to-l from-primary/10 to-transparent -skew-x-12 transform"></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center mb-6">
                    <Link to="/" className="text-4xl font-black tracking-tighter text-primary">
                        FLIVAN<span className="text-accent">.</span>
                    </Link>
                </div>
                <h2 className="mt-2 text-center text-3xl font-black tracking-tight text-primary">
                    Join Flivan
                </h2>
                <p className="mt-2 text-center text-sm text-text-light font-medium">
                    Create an account to unlock exclusive travel experiences.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 mb-12">
                <div className="bg-white py-10 px-4 shadow-2xl shadow-primary/5 sm:rounded-3xl sm:px-10 border border-gray-100">

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-bold text-primary mb-1 uppercase tracking-wider">
                                Full Name
                            </label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <i className="ri-user-line text-lg"></i>
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-primary mb-1 uppercase tracking-wider">
                                Email Address
                            </label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <i className="ri-mail-line text-lg"></i>
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-primary mb-1 uppercase tracking-wider">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <i className="ri-lock-line text-lg"></i>
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded cursor-pointer mt-1"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-text-light cursor-pointer">
                                    I agree to the <a href="#" className="font-bold text-accent hover:text-primary transition-colors">Terms of Service</a> and <a href="#" className="font-bold text-accent hover:text-primary transition-colors">Privacy Policy</a>.
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-lg shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <i className="ri-loader-4-line animate-spin"></i>
                                        Processing...
                                    </span>
                                ) : 'Register Account'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm text-text-light font-medium flex items-center justify-center gap-2">
                        Already have an account?
                        <Link to={`/login${location.search}`} className="font-bold text-primary hover:text-accent transition-colors border-b border-transparent hover:border-accent">
                            Sign in here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
