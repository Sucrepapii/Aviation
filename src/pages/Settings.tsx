import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Settings: React.FC = () => {
    // Removed unused user state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('flivan_token');
                if (!token) {
                    navigate('/login');
                    return;
                }

                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                const res = await axios.get('http://localhost:5000/api/auth/me', config);
                // Removed setUser
                setName(res.data.name);
                setEmail(res.data.email);
            } catch (err: any) {
                console.error("Profile fetch error", err);
                if (err.response?.status === 401) {
                    localStorage.removeItem('flivan_token');
                    navigate('/login');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage({ text: 'Profile update functionality coming soon!', type: 'info' });
        // Set up the UI for future endpoint integration
    };

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage({ text: 'Password update functionality coming soon!', type: 'info' });
        // Set up the UI for future endpoint integration
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24">
                <div className="flex flex-col items-center justify-center gap-4">
                    <i className="ri-loader-4-line text-6xl text-primary animate-spin"></i>
                    <p className="text-xl font-bold text-primary tracking-tight">Loading Settings...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/profile" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-primary hover:bg-primary hover:text-white transition-all">
                        <i className="ri-arrow-left-line"></i>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-primary tracking-tight">Account Settings</h1>
                        <p className="text-text-light font-medium">Manage your personal information and security preferences.</p>
                    </div>
                </div>

                {message.text && (
                    <div className={`mb-8 p-4 rounded-xl border-l-4 text-sm font-medium ${message.type === 'error' ? 'bg-red-50 border-red-500 text-red-700' :
                        message.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' :
                            'bg-blue-50 border-blue-500 text-blue-700'
                        }`}>
                        {message.text}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation Sidebar */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-primary/5 border border-gray-100 sticky top-32">
                            <nav className="space-y-2">
                                <a href="#profile" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-primary font-bold transition-all">
                                    <i className="ri-user-settings-line text-lg"></i>
                                    Profile Info
                                </a>
                                <a href="#security" className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-light font-medium hover:bg-gray-50 hover:text-primary transition-all">
                                    <i className="ri-shield-keyhole-line text-lg"></i>
                                    Security
                                </a>
                                <a href="#notifications" className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-light font-medium hover:bg-gray-50 hover:text-primary transition-all">
                                    <i className="ri-notification-3-line text-lg"></i>
                                    Notifications
                                </a>
                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 font-bold hover:bg-red-50 transition-all">
                                        <i className="ri-delete-bin-line text-lg"></i>
                                        Delete Account
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* Settings Content */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Profile Section */}
                        <div id="profile" className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-gray-100">
                            <h2 className="text-xl font-black text-primary mb-6 flex items-center gap-2">
                                <i className="ri-user-line text-accent"></i> Personal Information
                            </h2>
                            <form onSubmit={handleSaveProfile} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            readOnly
                                            className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                                        />
                                        <p className="mt-1 text-xs text-text-light">Email addresses cannot be changed currently.</p>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4 border-t border-gray-100">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all disabled:opacity-70 flex items-center gap-2"
                                    >
                                        <i className="ri-save-line"></i>
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Security Section */}
                        <div id="security" className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-gray-100">
                            <h2 className="text-xl font-black text-primary mb-6 flex items-center gap-2">
                                <i className="ri-lock-password-line text-accent"></i> Update Password
                            </h2>
                            <form onSubmit={handleUpdatePassword} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="flex justify-end pt-4 border-t border-gray-100">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gray-100 text-primary font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2"
                                    >
                                        <i className="ri-key-line"></i>
                                        Update Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Settings;
