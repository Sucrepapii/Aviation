import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [pastTrips, setPastTrips] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('flivan_token');
                if (!token) {
                    navigate('/login');
                    return;
                }

                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                const [userRes, bookingsRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/auth/me', config),
                    axios.get('http://localhost:5000/api/bookings', config)
                ]);

                setUser(userRes.data);
                setPastTrips(bookingsRes.data);
            } catch (err: any) {
                console.error("Profile fetch error", err);
                if (err.response?.status === 401) {
                    localStorage.removeItem('flivan_token');
                    navigate('/login');
                } else {
                    setError('Failed to load profile data.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem('flivan_token');
        navigate('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <i className="ri-loader-4-line text-6xl text-primary animate-spin"></i>
                    <p className="text-xl font-bold text-primary tracking-tight">Loading Profile...</p>
                </div>
            </div>
        );
    }

    if (error || !user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
                    <i className="ri-error-warning-line text-6xl text-red-500 mb-4 inline-block"></i>
                    <h2 className="text-2xl font-black text-primary mb-2">Error Loading Profile</h2>
                    <p className="text-text-light mb-6">{error || 'Unable to fetch user data.'}</p>
                    <button onClick={handleSignOut} className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all">
                        Return to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Dashboard Header */}
            <div className="bg-primary text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50"></div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent/10 to-transparent skew-x-12 transform pointer-events-none"></div>

                <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-accent text-primary flex items-center justify-center text-4xl font-black shadow-xl shadow-accent/20 border-4 border-white/10">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-4xl font-black tracking-tighter mb-1">{user.name}</h1>
                            <p className="text-gray-400 font-medium flex items-center gap-2">
                                <i className="ri-mail-line"></i> {user.email}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/settings" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all flex items-center gap-2 backdrop-blur-md">
                            <i className="ri-settings-4-line text-lg"></i>
                            Settings
                        </Link>
                        <button onClick={handleSignOut} className="px-6 py-3 bg-accent text-primary font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg flex items-center gap-2">
                            <i className="ri-logout-circle-r-line text-lg"></i>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Membership Card */}
                    <div className="bg-linear-to-br from-gray-900 to-primary-dark rounded-3xl p-8 shadow-2xl border border-gray-800 text-white flex flex-col justify-between overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all"></div>

                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                    <h2 className="text-2xl font-black text-accent">{user.memberTier || 'Silver Elite'}</h2>
                                </div>
                                <i className="ri-vip-crown-2-fill text-3xl text-accent/50"></i>
                            </div>

                            <div className="mb-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Available Points</p>
                                <h3 className="text-4xl font-black tracking-tighter">{user.points.toLocaleString()}</h3>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center text-sm font-bold text-gray-400">
                            <span>Member since {new Date(user.memberSince).getFullYear()}</span>
                            <a href="#" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                                View Benefits <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>

                    {/* Stats Overview */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-gray-100 flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center text-2xl mb-4">
                                <i className="ri-flight-takeoff-line"></i>
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-1">{user.upcomingTrips}</h3>
                            <p className="text-text-light font-bold uppercase tracking-wider text-xs">Upcoming Flights</p>
                            <button className="mt-6 text-sm font-bold text-primary border-b-2 border-primary hover:text-accent hover:border-accent transition-all pb-1">
                                Manage Bookings
                            </button>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-gray-100 flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mb-4">
                                <i className="ri-history-line"></i>
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-1">{pastTrips.length}</h3>
                            <p className="text-text-light font-bold uppercase tracking-wider text-xs">Past Flights</p>
                            <button className="mt-6 text-sm font-bold text-primary border-b-2 border-primary hover:text-accent hover:border-accent transition-all pb-1">
                                View All History
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trip History Section */}
                <div className="mt-12 bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-primary tracking-tight">Recent Flight History</h2>
                            <p className="text-text-light font-medium mt-1">Review your past journeys and request receipts.</p>
                        </div>
                        <button className="px-6 py-2.5 bg-gray-50 text-primary font-bold rounded-xl border border-gray-200 hover:bg-primary hover:text-white transition-all text-sm">
                            <i className="ri-download-2-line mr-2"></i> Export Data
                        </button>
                    </div>

                    <div className="overflow-x-auto pb-4">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="py-4 px-4 text-xs font-black text-primary uppercase tracking-widest whitespace-nowrap">Flight Ref</th>
                                    <th className="py-4 px-4 text-xs font-black text-primary uppercase tracking-widest whitespace-nowrap">Date</th>
                                    <th className="py-4 px-4 text-xs font-black text-primary uppercase tracking-widest whitespace-nowrap">Route</th>
                                    <th className="py-4 px-4 text-xs font-black text-primary uppercase tracking-widest whitespace-nowrap">Cabin Class</th>
                                    <th className="py-4 px-4 text-xs font-black text-primary uppercase tracking-widest whitespace-nowrap text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pastTrips.map((trip: any, index: number) => (
                                    <tr key={trip.id || index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                                        <td className="py-5 px-4 font-bold text-primary whitespace-nowrap">{trip.flightNo}</td>
                                        <td className="py-5 px-4 text-text-light font-medium whitespace-nowrap">{trip.date}</td>
                                        <td className="py-5 px-4 font-bold text-primary whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                {trip.route}
                                            </div>
                                        </td>
                                        <td className="py-5 px-4 text-text-light font-medium whitespace-nowrap">{trip.class}</td>
                                        <td className="py-5 px-4 text-right whitespace-nowrap">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                                                <i className="ri-check-line mr-1"></i> {trip.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
