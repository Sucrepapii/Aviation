import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

interface CookieCategory {
    id: string;
    icon: string;
    title: string;
    description: string;
    essential: boolean;
    examples: string[];
    duration: string;
}

const cookieCategories: CookieCategory[] = [
    {
        id: 'essential',
        icon: 'ri-shield-keyhole-line',
        title: 'Strictly Necessary',
        description: 'These cookies are essential for the website to function and cannot be disabled. They are set in response to actions you take, such as logging in, completing a booking, or adjusting your privacy settings. They do not store personally identifiable information.',
        essential: true,
        examples: ['Session authentication token', 'CSRF protection token', 'Cookie consent preference', 'Shopping cart / booking state', 'Load balancer session affinity'],
        duration: 'Session / Up to 24 hours',
    },
    {
        id: 'functional',
        icon: 'ri-settings-3-line',
        title: 'Functional',
        description: 'Functional cookies enable enhanced features and personalisation. They remember your preferences such as language, currency, preferred airports, and seat configuration. Disabling these cookies may impact the quality of your experience.',
        essential: false,
        examples: ['Language & locale preference', 'Currency display preference', 'Recently searched airports', 'Seat selection preferences', 'Notification preferences'],
        duration: 'Up to 12 months',
    },
    {
        id: 'analytics',
        icon: 'ri-bar-chart-2-line',
        title: 'Analytics & Performance',
        description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. The insights allow us to improve page load times, identify broken features, and understand which parts of the site are most useful.',
        essential: false,
        examples: ['Page view and session duration', 'Traffic source attribution', 'Error and crash reporting', 'Feature usage heatmaps', 'A/B test cohort assignment'],
        duration: 'Up to 24 months',
    },
    {
        id: 'marketing',
        icon: 'ri-megaphone-line',
        title: 'Marketing & Targeting',
        description: 'Marketing cookies are used to deliver advertisements and promotional content that is relevant to your interests, both on our website and on third-party platforms. They track your browsing activity across sites to build a profile of your interests. You may opt out at any time.',
        essential: false,
        examples: ['Retargeting pixel (Meta, Google)', 'Conversion tracking', 'Interest-based audience segmentation', 'Affiliate tracking', 'Social media sharing integration'],
        duration: 'Up to 13 months',
    },
];

const CookiePolicy: React.FC = () => {
    const [consents, setConsents] = useState<Record<string, boolean>>({
        essential: true,
        functional: true,
        analytics: false,
        marketing: false,
    });
    const [saved, setSaved] = useState(false);

    const toggleConsent = (id: string) => {
        if (id === 'essential') return;
        setConsents(prev => ({ ...prev, [id]: !prev[id] }));
        setSaved(false);
    };

    const acceptAll = () => {
        setConsents({ essential: true, functional: true, analytics: true, marketing: true });
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const savePreferences = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="bg-white">
            <PageHeader
                title="Cookie Policy"
                subtitle="How Flivan Aviation uses cookies and similar technologies, and how you can control them."
            />

            {/* Intro */}
            <div className="bg-primary-mid py-10 px-6">
                <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                        <i className="ri-cookie-line text-2xl text-accent"></i>
                    </div>
                    <p className="text-white/80 text-base leading-relaxed font-medium">
                        Cookies are small text files stored on your device when you visit our website. We use them to
                        make Flivan.com work properly, remember your preferences, and — with your consent — deliver
                        personalised content and measure how our site performs. You are in control.
                    </p>
                </div>
            </div>

            {/* Interactive Preference Manager */}
            <div className="max-w-[860px] mx-auto px-6 py-16">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-12">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                        <div>
                            <h2 className="text-2xl font-black text-primary tracking-tight">Manage Your Preferences</h2>
                            <p className="text-text-light text-sm mt-1">Your choices apply to this browser and device. Last updated: February 2026.</p>
                        </div>
                        {saved && (
                            <span className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-sm font-bold rounded-full border border-green-200 animate-fade-in">
                                <i className="ri-check-line"></i> Preferences saved
                            </span>
                        )}
                    </div>

                    <div className="space-y-4">
                        {cookieCategories.map(category => (
                            <div key={category.id} className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-5">
                                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <i className={`${category.icon} text-lg text-accent`}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <h3 className="font-black text-primary">{category.title}</h3>
                                        <button
                                            onClick={() => toggleConsent(category.id)}
                                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 shrink-0 ${consents[category.id] ? 'bg-primary' : 'bg-gray-200'
                                                } ${category.essential ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                                            disabled={category.essential}
                                            aria-label={`Toggle ${category.title} cookies`}
                                        >
                                            <span
                                                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${consents[category.id] ? 'left-7' : 'left-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    {category.essential && (
                                        <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/10 px-2 py-0.5 rounded-full inline-block mb-2">Always Active</span>
                                    )}
                                    <p className="text-text-light text-[13px] leading-relaxed mb-3">{category.description}</p>
                                    <div className="flex items-center gap-2 text-[11px] text-text-light">
                                        <i className="ri-time-line shrink-0"></i>
                                        <span className="font-bold">Retention:</span> {category.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-8 flex-wrap">
                        <button
                            onClick={acceptAll}
                            className="btn-gold font-bold px-8 py-3.5 rounded-full text-sm"
                        >
                            Accept All Cookies
                        </button>
                        <button
                            onClick={savePreferences}
                            className="px-8 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all text-sm"
                        >
                            Save My Preferences
                        </button>
                    </div>
                </div>

                {/* What are cookies */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-black text-primary mb-4 tracking-tight">What Are Cookies?</h2>
                        <p className="text-text-light leading-relaxed">
                            Cookies are small data files that websites place on your device when you visit them.
                            They allow sites to remember information about your visit — such as your login state,
                            language preference, or shopping basket contents — so that the site works correctly
                            and efficiently on your next visit.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black text-primary mb-4 tracking-tight">Third-Party Cookies</h2>
                        <p className="text-text-light leading-relaxed mb-4">
                            Some cookies on our site are set by third-party services that appear on our pages.
                            These include analytics providers (e.g. Google Analytics), social media platforms
                            (e.g. Meta Pixel), payment processors, and advertising networks.
                            We do not control these third-party technologies and they are subject to the privacy
                            policies of those services.
                        </p>
                        <p className="text-text-light leading-relaxed">
                            A full list of third-party cookie providers used on flivan.com is available on
                            request from <a href="mailto:privacy@flivan.com" className="text-accent font-bold underline underline-offset-4 hover:text-accent-dark transition-colors">privacy@flivan.com</a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black text-primary mb-4 tracking-tight">How to Control Cookies in Your Browser</h2>
                        <p className="text-text-light leading-relaxed mb-4">
                            In addition to the controls above, you can manage or delete cookies directly through your browser settings.
                            Note that blocking certain cookies may affect the functionality of our site. Instructions for major browsers:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {['Chrome', 'Firefox', 'Safari', 'Edge'].map(browser => (
                                <a
                                    key={browser}
                                    href="#"
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-primary hover:border-accent hover:text-accent transition-all"
                                >
                                    <i className="ri-external-link-line"></i> {browser}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black text-primary mb-4 tracking-tight">Changes to This Policy</h2>
                        <p className="text-text-light leading-relaxed">
                            We may update this Cookie Policy periodically as we change the technologies we use or as
                            regulations evolve. We will notify you of material changes via a notice on our website.
                            We encourage you to review this policy regularly. This version was last updated in February 2026.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
