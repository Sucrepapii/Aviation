import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const sections = [
    {
        icon: 'ri-shield-user-line',
        title: 'Information We Collect',
        content: [
            {
                subtitle: 'Personal Identification Data',
                text: 'When you book a flight or create an account with Flivan, we collect information such as your full name, email address, phone number, passport or national ID number, date of birth, and billing details. This data is required to process your reservation, issue travel documents, and comply with international aviation regulations.',
            },
            {
                subtitle: 'Travel & Booking Information',
                text: 'We store records of your flight bookings, seat preferences, meal choices, baggage allowances, frequent flyer details, and any special assistance requests. This allows us to personalise your journey and maintain accurate passenger records as mandated by aviation authorities.',
            },
            {
                subtitle: 'Technical & Usage Data',
                text: 'We automatically collect IP addresses, browser type, device identifiers, pages visited, time spent on the site, and referral URLs. This helps us improve our platform, detect fraud, and ensure the security of your account.',
            },
            {
                subtitle: 'Communication Data',
                text: 'When you contact our customer support team, we retain records of your enquiries, complaints, and correspondence to ensure continuity of service and training quality.',
            },
        ],
    },
    {
        icon: 'ri-eye-line',
        title: 'How We Use Your Data',
        content: [
            {
                subtitle: 'Fulfilment of Travel Services',
                text: 'Your personal data is used to process reservations, issue e-tickets, send booking confirmations, provide check-in notifications, and facilitate airport operations. Without this processing, we cannot provide air travel services.',
            },
            {
                subtitle: 'Regulatory Compliance',
                text: 'International aviation law requires us to share passenger data with border control agencies, immigration authorities, and government bodies in the countries you travel to and from. This includes Advance Passenger Information (API) and Passenger Name Records (PNR). Flivan is legally obligated to comply with these requirements.',
            },
            {
                subtitle: 'Personalisation & Loyalty',
                text: 'We use your travel history and preferences to tailor flight recommendations, offer Executive Club member benefits, and present relevant promotions. You may opt out of personalised marketing at any time via your account settings.',
            },
            {
                subtitle: 'Safety & Fraud Prevention',
                text: 'We analyse patterns in usage data to detect and prevent fraudulent bookings, identity theft, and unauthorised account access. This processing is in our legitimate interest and in the interest of all our passengers.',
            },
        ],
    },
    {
        icon: 'ri-share-line',
        title: 'Data Sharing & Third Parties',
        content: [
            {
                subtitle: 'Service Partners',
                text: 'We share data with carefully vetted third-party service providers including payment processors, airport ground handling partners, catering suppliers, and IT infrastructure providers. All partners are contractually bound to process your data solely on our instructions and in compliance with applicable privacy laws.',
            },
            {
                subtitle: 'Codeshare & Partner Airlines',
                text: 'Where your journey involves a codeshare or interline agreement with a partner airline, relevant booking data will be shared with that carrier to facilitate your travel. We ensure all partner airlines operate under equivalent data protection standards.',
            },
            {
                subtitle: 'No Sale of Personal Data',
                text: 'Flivan does not sell, rent, or trade your personal information to third parties for their own marketing purposes. Your data is used exclusively to provide and improve our services.',
            },
        ],
    },
    {
        icon: 'ri-lock-password-line',
        title: 'Data Security',
        content: [
            {
                subtitle: 'Encryption & Secure Transmission',
                text: 'All data transmitted between your browser and our servers is protected by TLS 1.3 encryption. Payment card data is processed in accordance with PCI-DSS standards and is never stored on our servers.',
            },
            {
                subtitle: 'Access Controls',
                text: 'Access to personal data within Flivan is restricted on a strict need-to-know basis. Our staff undergo regular data protection training, and all internal systems are protected by multi-factor authentication and comprehensive audit logging.',
            },
            {
                subtitle: 'Breach Notification',
                text: 'In the unlikely event of a data breach affecting your personal information, we will notify you and the relevant supervisory authority within 72 hours of becoming aware of the incident, as required by applicable law.',
            },
        ],
    },
    {
        icon: 'ri-user-settings-line',
        title: 'Your Rights',
        content: [
            {
                subtitle: 'Access & Portability',
                text: 'You have the right to request a copy of all personal data we hold about you. We will provide this in a structured, machine-readable format within 30 days of your request.',
            },
            {
                subtitle: 'Correction & Erasure',
                text: 'You may request that we correct inaccurate data or, where there is no legitimate reason for us to retain it, erase your personal information. Note that certain data must be retained for legal, regulatory, or contractual reasons even after a request for erasure.',
            },
            {
                subtitle: 'Objection & Restriction',
                text: 'You may object to processing based on our legitimate interests, or request that we restrict processing whilst a dispute is resolved. Where processing is based on consent, you may withdraw that consent at any time without affecting the lawfulness of prior processing.',
            },
            {
                subtitle: 'How to Exercise Your Rights',
                text: 'To exercise any of the above rights, please contact our Data Protection Officer at privacy@flivan.com. We will respond within the timeframe required by applicable law and at no cost to you.',
            },
        ],
    },
    {
        icon: 'ri-time-line',
        title: 'Retention & Updates',
        content: [
            {
                subtitle: 'Retention Periods',
                text: 'Booking records are retained for seven years to comply with civil aviation and tax regulations. Account data is retained for the duration of your relationship with Flivan and for two years thereafter. Marketing preferences are updated in real time and can be withdrawn at any point.',
            },
            {
                subtitle: 'Policy Updates',
                text: 'We may update this Privacy Policy from time to time to reflect changes in law, our business operations, or the services we offer. Material changes will be communicated via email or a prominent notice on our website at least 30 days before they take effect.',
            },
        ],
    },
];

const PrivacyPolicy: React.FC = () => {
    const [openSection, setOpenSection] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <PageHeader
                title="Privacy Policy"
                subtitle="How Flivan Aviation collects, uses, and protects your personal information. Last updated: February 2026."
            />

            {/* Intro Banner */}
            <div className="bg-primary-mid py-10 px-6">
                <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                        <i className="ri-shield-check-line text-2xl text-accent"></i>
                    </div>
                    <p className="text-white/80 text-base leading-relaxed font-medium">
                        At Flivan Aviation Group, protecting your privacy is a core commitment, not a legal formality.
                        This policy explains clearly what data we collect, why we need it, and the rights you hold.
                        If you have any questions, our Data Protection Officer is always available at{' '}
                        <a href="mailto:privacy@flivan.com" className="text-accent underline underline-offset-4 hover:text-accent-light transition-colors">
                            privacy@flivan.com
                        </a>.
                    </p>
                </div>
            </div>

            {/* Accordion Sections */}
            <div className="max-w-[860px] mx-auto px-6 py-16 space-y-4">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-shadow hover:shadow-md"
                    >
                        <button
                            onClick={() => setOpenSection(openSection === index ? null : index)}
                            className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                    <i className={`${section.icon} text-xl text-accent`}></i>
                                </div>
                                <span className="text-lg font-black text-primary tracking-tight">{section.title}</span>
                            </div>
                            <i className={`ri-arrow-down-s-line text-xl text-text-light transition-transform duration-300 ${openSection === index ? 'rotate-180' : ''}`}></i>
                        </button>

                        {openSection === index && (
                            <div className="px-8 pb-8 space-y-6 border-t border-gray-100 pt-6 animate-fade-in">
                                {section.content.map((item, i) => (
                                    <div key={i}>
                                        <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-2">{item.subtitle}</h3>
                                        <p className="text-text-light leading-relaxed text-[15px]">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Contact Strip */}
            <div className="bg-gray-50 border-t border-gray-100 py-12 px-6">
                <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-black text-primary mb-1">Questions about this policy?</h3>
                        <p className="text-text-light text-sm">Our Data Protection Officer is here to help.</p>
                    </div>
                    <a
                        href="mailto:privacy@flivan.com"
                        className="flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-md text-sm"
                    >
                        <i className="ri-mail-send-line"></i> Contact DPO
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
