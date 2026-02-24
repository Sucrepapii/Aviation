import React from 'react';
import Travellers from '../components/Travellers';
import PageHeader from '../components/PageHeader';

const Destinations: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Our Network"
                subtitle="Explore our ever-expanding map of the world's most desirable and exclusive locations."
            />
            <Travellers />
        </div>
    );
};

export default Destinations;
