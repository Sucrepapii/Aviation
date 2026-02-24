import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout: React.FC = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="animate-fade-in">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
