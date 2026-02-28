import React from 'react';
import PageHeader from '../components/PageHeader';

const services = [
    {
        icon: 'ri-wheelchair-line',
        title: 'Mobility Assistance',
        description: 'We provide full wheelchair assistance from kerb to seat. This includes help at check-in, security, through the terminal, during boarding via jet bridge or ambulift, and on arrival. Airport wheelchairs are available without pre-booking; however, we recommend requesting assistance at least 48 hours in advance to guarantee a seamless experience.',
        details: ['Kerb-to-seat escort service', 'Ambulift for step-free boarding', 'Aisle wheelchairs on all wide-body aircraft', 'Priority boarding for all mobility aid users'],
    },
    {
        icon: 'ri-eye-off-line',
        title: 'Visual Impairment',
        description: 'Flivan welcomes blind and partially sighted passengers and their guide dogs on all routes. Our cabin crew are trained to provide full orientation of the aircraft, including seat location, lavatories, emergency exits, and the in-flight entertainment system. Safety briefings are available in audio format.',
        details: ['Guide dogs accepted in cabin on all routes', 'Audio safety briefings', 'Braille menus in all cabin classes', 'Tactile seat indicators for emergency exits'],
    },
    {
        icon: 'ri-deaf-line',
        title: 'Hearing Impairment',
        description: 'We are committed to ensuring passengers who are deaf or hard of hearing receive all essential flight information. Our crew provide written communication assistance and all safety demonstrations include clear visual components. In-flight entertainment headphones are compatible with hearing loop systems.',
        details: ['Written communication support available from crew', 'All safety demonstrations fully visual', 'Subtitled in-flight entertainment', 'Priority departures gate notifications via SMS'],
    },
    {
        icon: 'ri-mental-health-line',
        title: 'Cognitive & Invisible Disabilities',
        description: 'We recognise that many disabilities are not immediately visible. Passengers with cognitive disabilities, autism spectrum conditions, severe anxiety, or other hidden disabilities are welcome to request a dedicated crew member as a point of contact throughout their journey, and may board during pre-boarding even without visible mobility aids.',
        details: ['Sunflower lanyard recognised on all Flivan flights', 'Pre-boarding available on request', 'Quiet zone seating on selected aircraft', 'Journey support information available before travel'],
    },
    {
        icon: 'ri-heart-pulse-line',
        title: 'Medical Needs',
        description: 'Passengers with medical conditions requiring oxygen, stretcher accommodation, or specific medical equipment onboard must notify Flivan at least 72 hours before departure. All Flivan aircraft carry a comprehensive medical kit and AED devices. A Medical Information Form (MEDIF) may be required for certain conditions.',
        details: ['Supplemental oxygen available on request (charge applies)', 'Stretcher accommodation on widebody aircraft', 'CPAP power outlets at all seats in Business & First', 'Sharps disposal kits available on request'],
    },
    {
        icon: 'ri-baby-line',
        title: 'Travelling with Infants & Children',
        description: 'We go above and beyond to make travel with young children comfortable and safe. Bassinets are available for infants under 10 kg on long-haul routes and must be pre-booked. Children travelling alone (Unaccompanied Minors) receive a dedicated escorted service from check-in to collection at destination.',
        details: ['Bassinets available on long-haul routes', 'Unaccompanied Minor service for ages 5–15', 'Priority boarding for families', 'Child-friendly meals available on request'],
    },
];

const webAccessibility = [
    { icon: 'ri-contrast-2-line', label: 'WCAG 2.1 AA Compliant', desc: 'Our website and booking platform meet Web Content Accessibility Guidelines Level AA.' },
    { icon: 'ri-keyboard-line', label: 'Keyboard Navigation', desc: 'Every function on flivan.com can be completed using keyboard navigation alone.' },
    { icon: 'ri-text-resize', label: 'Scalable Text', desc: 'All text resizes correctly up to 200% without loss of functionality or content.' },
    { icon: 'ri-contrast-drop-line', label: 'High Contrast Mode', desc: 'Our colour palette meets a minimum 4.5:1 contrast ratio for all body text.' },
    { icon: 'ri-braces-line', label: 'Screen Reader Optimised', desc: 'Semantic HTML and full ARIA labelling ensure compatibility with leading screen readers.' },
    { icon: 'ri-movie-2-line', label: 'Video Captions', desc: 'All video content includes accurate closed captions and audio description tracks.' },
];

const Accessibility: React.FC = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Accessibility"
                subtitle="Flivan is committed to making air travel inclusive for every passenger. Here's how we support you."
            />

            {/* Statement */}
            <div className="bg-primary-mid py-12 px-6">
                <div className="max-w-[1000px] mx-auto text-center space-y-4">
                    <p className="text-white/85 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                        Air travel should be accessible to everyone. Flivan Aviation Group is committed to providing a dignified,
                        comfortable, and safe journey for passengers of all abilities. Our accessibility services are provided
                        at no additional charge unless explicitly stated.
                    </p>
                    <p className="text-accent font-bold text-sm uppercase tracking-widest">
                        To arrange assistance, call +1 800 FLIVAN or email access@flivan.com at least 48 hours before departure.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-[1100px] mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <span className="text-accent font-black uppercase tracking-[0.3em] text-xs block mb-3">Our Commitment</span>
                    <h2 className="text-4xl font-black text-primary tracking-tight">Accessibility Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-13 h-13 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors w-14 h-14">
                                    <i className={`${service.icon} text-2xl text-accent`}></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-primary mb-2 tracking-tight">{service.title}</h3>
                                    <p className="text-text-light text-[14px] leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                            <ul className="space-y-2 pl-2">
                                {service.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-text-mid font-medium">
                                        <i className="ri-check-line text-accent mt-0.5 shrink-0"></i>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Digital / Web Accessibility */}
            <div className="bg-gray-50/70 py-20 px-6 border-t border-gray-100">
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-xs block mb-3">Inclusive Design</span>
                        <h2 className="text-4xl font-black text-primary tracking-tight">Digital Accessibility</h2>
                        <p className="text-text-light mt-4 max-w-2xl mx-auto">Our website and mobile platforms are designed and tested to work for everyone.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {webAccessibility.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                                    <i className={`${item.icon} text-lg text-primary`}></i>
                                </div>
                                <h4 className="font-black text-primary text-sm mb-1">{item.label}</h4>
                                <p className="text-text-light text-[13px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feedback & Contact */}
            <div className="py-16 px-6 bg-primary text-white">
                <div className="max-w-[860px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Help Us Improve</h3>
                        <p className="text-white/70 max-w-lg leading-relaxed text-sm">
                            We continuously strive to improve our accessibility standards. If you experienced a barrier
                            during your journey with us, or have suggestions for improvement, we genuinely want to hear from you.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 shrink-0">
                        <a href="mailto:access@flivan.com" className="flex items-center gap-2 px-8 py-3.5 btn-gold font-bold rounded-full text-sm whitespace-nowrap">
                            <i className="ri-mail-send-line"></i> access@flivan.com
                        </a>
                        <a href="tel:+1800354826" className="flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all text-sm whitespace-nowrap text-center justify-center">
                            <i className="ri-phone-line"></i> +1 800 FLIVAN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessibility;
