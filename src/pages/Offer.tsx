import React from 'react';
import Memories from '../components/Memories';
import PageHeader from '../components/PageHeader';

const Offer: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Special Offers"
                subtitle="Curated promotions and exclusive travel packages designed for extraordinary experiences."
            />
            <Memories />
        </div>
    );
};

export default Offer;
