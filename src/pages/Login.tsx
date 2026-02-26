import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // MVP: Navigate to profile on submit
        window.location.href = '/profile';
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
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
                    Welcome Back
                </h2>
                <p className="mt-2 text-center text-sm text-text-light font-medium">
                    Please sign in to access your Flivan account.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="bg-white py-10 px-4 shadow-2xl shadow-primary/5 sm:rounded-3xl sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
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

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-text-light cursor-pointer">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-bold text-accent hover:text-primary transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-lg shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all active:scale-95"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm text-text-light font-medium flex items-center justify-center gap-2">
                        Don't have an account?
                        <Link to="/signup" className="font-bold text-primary hover:text-accent transition-colors border-b border-transparent hover:border-accent">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
