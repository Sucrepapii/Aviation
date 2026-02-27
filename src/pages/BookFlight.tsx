import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Flight {
    id: string;
    flightNumber: string;
    originIata: string;
    originCity: string;
    destinationIata: string;
    destinationCity: string;
    departureTime: string;
    arrivalTime: string;
    basePrice: number;
    travelClass: string;
    airline: string;
}

const BookFlight: React.FC = () => {
    const { flightId } = useParams();
    const navigate = useNavigate();

    const [flight, setFlight] = useState<Flight | null>(null);
    const [loading, setLoading] = useState(true);
    const [bookingState, setBookingState] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchFlightDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/flights/${flightId}`);
                setFlight(res.data);
            } catch (err) {
                console.error("Flight fetch error:", err);
                setErrorMsg("Unable to retrieve flight details. The flight may no longer exist.");
                setBookingState('error');
            } finally {
                setLoading(false);
            }
        };

        fetchFlightDetails();
    }, [flightId]);

    const handleConfirmBooking = async () => {
        setBookingState('processing');
        setErrorMsg('');

        try {
            const token = localStorage.getItem('flivan_token');
            if (!token) {
                // Failsafe, should be authenticated to reach here via UI but just in case
                navigate(`/login?redirect=booking&flight=${flightId}`);
                return;
            }

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const payload = {
                flightNo: flight?.flightNumber,
                date: new Date(flight?.departureTime || '').toISOString().split('T')[0],
                route: `${flight?.originIata} - ${flight?.destinationIata}`,
                travelClass: flight?.travelClass
            };

            await axios.post('http://localhost:5000/api/bookings', payload, config);

            setBookingState('success');

            // Redirect to profile after short delay to show success
            setTimeout(() => {
                navigate('/profile');
            }, 3000);

        } catch (err: any) {
            console.error("Booking error:", err);
            setBookingState('error');
            setErrorMsg(err.response?.data?.message || "Failed to process booking. Please try again.");
        }
    };

    const formatTime = (isoString: string) => {
        return new Date(isoString).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (isoString: string) => {
        return new Date(isoString).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24">
                <i className="ri-loader-4-line text-6xl text-primary animate-spin"></i>
            </div>
        );
    }

    if (bookingState === 'success') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 px-6">
                <div className="bg-white rounded-4xl p-12 shadow-2xl shadow-primary/5 text-center max-w-lg w-full border border-gray-100 animate-fade-in">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-[8px] border-green-500/10">
                        <i className="ri-check-line text-5xl text-green-500"></i>
                    </div>
                    <h2 className="text-3xl font-black text-primary tracking-tight mb-4">Booking Confirmed!</h2>
                    <p className="text-text-light font-medium mb-8">
                        Your reservation for {flight?.originCity} to {flight?.destinationCity} is complete. We've added 1,500 miles to your account.
                    </p>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest animate-pulse">Redirecting to Profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-[1000px] mx-auto px-6 relative z-10">

                <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight mb-2">
                    Review & <span className="text-accent italic font-light">Confirm</span>
                </h1>
                <p className="text-text-light font-medium mb-12">Please verify your flight details before completing the reservation.</p>

                {bookingState === 'error' && (
                    <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-xl text-red-700 flex items-start gap-4">
                        <i className="ri-error-warning-fill text-2xl"></i>
                        <div>
                            <h3 className="font-bold text-lg">Transaction Failed</h3>
                            <p className="font-medium text-sm mt-1">{errorMsg}</p>
                        </div>
                    </div>
                )}

                {!flight && bookingState !== 'error' ? (
                    <div className="text-center py-20 text-text-light font-medium">Flight data not found.</div>
                ) : flight && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column: Itinerary */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Ticket Card */}
                            <div className="bg-white rounded-4xl p-8 sm:p-10 shadow-xl shadow-primary/5 border border-gray-100 relative overflow-hidden">
                                {/* Decorative Pattern */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                                <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                                    <h3 className="text-xl font-black text-primary flex items-center gap-3">
                                        <i className="ri-plane-fill text-accent"></i> Departure
                                    </h3>
                                    <div className="flex gap-2">
                                        <span className="px-4 py-2 bg-primary/5 text-primary text-xs font-black uppercase tracking-widest rounded-lg">
                                            {flight.airline}
                                        </span>
                                        <span className="px-4 py-2 bg-primary/5 text-primary text-xs font-black uppercase tracking-widest rounded-lg">
                                            {flight.flightNumber}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 items-center gap-4 relative z-10">
                                    <div className="text-left">
                                        <p className="text-4xl sm:text-5xl font-black text-primary tracking-tighter mb-2">{formatTime(flight.departureTime)}</p>
                                        <p className="text-xl font-bold text-primary mb-1">{flight.originIata}</p>
                                        <p className="text-sm font-medium text-text-light">{flight.originCity}</p>
                                    </div>

                                    <div className="flex flex-col items-center justify-center px-4">
                                        <div className="w-full flex items-center justify-center gap-2 text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-current"></div>
                                            <div className="flex-1 h-px bg-current border-t border-dashed -mx-1"></div>
                                            <i className="ri-flight-takeoff-line text-2xl text-accent"></i>
                                            <div className="flex-1 h-px bg-current border-t border-dashed -mx-1"></div>
                                            <div className="w-2 h-2 rounded-full bg-current"></div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-4xl sm:text-5xl font-black text-primary tracking-tighter mb-2">{formatTime(flight.arrivalTime)}</p>
                                        <p className="text-xl font-bold text-primary mb-1">{flight.destinationIata}</p>
                                        <p className="text-sm font-medium text-text-light">{flight.destinationCity}</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6 relative z-10">
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Date</p>
                                        <p className="font-bold text-primary">{formatDate(flight.departureTime)}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Cabin Class</p>
                                        <p className="font-bold text-primary">{flight.travelClass}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Checkout */}
                        <div className="lg:col-span-1">
                            <div className="bg-primary text-white rounded-4xl p-8 shadow-2xl shadow-primary/20 sticky top-32">
                                <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-6">Payment Summary</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-white/80 font-medium">
                                        <span>Base Fare</span>
                                        <span>${flight.basePrice.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-white/80 font-medium">
                                        <span>Taxes & Fees</span>
                                        <span>${(flight.basePrice * 0.15).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end border-t border-white/10 pt-6 mb-8">
                                    <span className="text-sm font-bold uppercase tracking-widest text-accent">Total</span>
                                    <span className="text-4xl font-black tracking-tighter">
                                        <sup className="text-xl mr-1 text-white/50">$</sup>
                                        {(flight.basePrice * 1.15).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </span>
                                </div>

                                <button
                                    onClick={handleConfirmBooking}
                                    disabled={bookingState === 'processing'}
                                    className="w-full py-5 bg-white text-primary text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-gray-100 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {bookingState === 'processing' ? (
                                        <><i className="ri-loader-4-line animate-spin text-xl"></i> Processing</>
                                    ) : (
                                        <><i className="ri-secure-payment-line text-xl"></i> Confirm & Pay</>
                                    )}
                                </button>

                                <p className="text-center text-[10px] text-white/50 mt-6 font-medium">
                                    By confirming, you agree to our Terms of Service and Cancellation Policies.
                                </p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default BookFlight;
