import React from 'react';
import Lounge from '../components/Lounge';
import PageHeader from '../components/PageHeader';

const Seats: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Seat Selection"
                subtitle="Choose your perfect vantage point in the sky. Uncompromising comfort in every class."
            />
            <Lounge />
        </div>
    );
};

export default Seats;
