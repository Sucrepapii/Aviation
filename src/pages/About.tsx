import React from 'react';
import TravelSupport from '../components/TravelSupport';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Help Center"
                subtitle="Comprehensive support and guidance for every stage of your journey with Flivan."
            />
            <TravelSupport />
        </div>
    );
};

export default About;
