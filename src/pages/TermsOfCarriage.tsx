import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const clauses = [
    {
        number: '01',
        icon: 'ri-ticket-2-line',
        title: 'Tickets & Reservations',
        items: [
            {
                subtitle: 'Validity of Ticket',
                text: 'A Flivan ticket is valid for travel on the date, flight number, and cabin class specified thereon. Tickets are non-transferable and may only be used by the passenger named on the booking. Any attempt to transfer a ticket to another person will render it void without refund.',
            },
            {
                subtitle: 'Booking Confirmation',
                text: 'Your booking is confirmed upon receipt of our written confirmation email and payment in full. Flivan reserves the right to cancel unconfirmed reservations where payment has not been received within the time stipulated at the time of booking.',
            },
            {
                subtitle: 'Name Corrections',
                text: 'Minor name corrections (up to three characters) may be made free of charge up to 48 hours before departure. Significant name changes constitute a rebooking and will incur the applicable change fee plus any fare difference.',
            },
        ],
    },
    {
        number: '02',
        icon: 'ri-refund-2-line',
        title: 'Changes & Cancellations',
        items: [
            {
                subtitle: 'Voluntary Changes',
                text: 'Passengers may change their flight date, time, or route subject to seat availability and payment of the applicable change fee. Fare differences apply. Changes must be made no later than 2 hours before the original scheduled departure. Changes to the named passenger are not permitted; a new booking is required.',
            },
            {
                subtitle: 'Cancellations by Passenger',
                text: 'Cancellations made more than 72 hours before departure are eligible for a refund to the original payment method, less an administration fee. Cancellations within 72 hours of departure are non-refundable unless the passenger holds a Flexible or Business fare. No-shows forfeit the full ticket value.',
            },
            {
                subtitle: 'Flight Cancellation by Flivan',
                text: 'In the event Flivan cancels a flight for any reason, passengers are entitled to a full refund of the unused ticket value, rebooking on the next available Flivan service at no additional charge, or a travel voucher equivalent to 110% of the ticket value. Compensation for extraordinary circumstances is subject to applicable regulations in the jurisdiction of departure.',
            },
            {
                subtitle: 'Significant Schedule Changes',
                text: 'Where Flivan changes a departure time by more than 3 hours, passengers may request an alternative flight or a full refund without penalty. Notification will be provided by email and SMS to the contact details provided at booking.',
            },
        ],
    },
    {
        number: '03',
        icon: 'ri-luggage-cart-line',
        title: 'Baggage',
        items: [
            {
                subtitle: 'Checked Baggage Allowance',
                text: 'Economy passengers are entitled to one checked bag up to 23 kg. Business Class passengers are entitled to two checked bags up to 32 kg each. First Class and Private Jet passengers enjoy a generous allowance of three bags at 32 kg each. Excess baggage charges apply per kilogram beyond the allowance and must be settled before check-in is complete.',
            },
            {
                subtitle: 'Cabin Baggage',
                text: 'One cabin bag (maximum 56 × 45 × 25 cm, 10 kg) and one personal item (handbag, laptop bag) per passenger are permitted in the cabin. Items exceeding these dimensions will be placed in the hold and applicable charges will apply.',
            },
            {
                subtitle: 'Prohibited & Restricted Items',
                text: 'Dangerous goods as defined by IATA regulations are strictly prohibited. This includes but is not limited to: explosive devices, flammable liquids, compressed gases, and lithium batteries above 100Wh. Passengers are responsible for ensuring their luggage complies with all applicable regulations; Flivan accepts no liability for confiscation of prohibited items by security or customs authorities.',
            },
            {
                subtitle: 'Damaged or Lost Baggage',
                text: 'Flivan\'s liability for checked baggage is limited to the applicable conventions (Montreal or Warsaw) unless a higher value is declared and an excess valuation charge is paid at check-in. Claims for lost or damaged baggage must be filed within 7 days of arrival at destination. Flivan will make every reasonable effort to locate and return lost items.',
            },
        ],
    },
    {
        number: '04',
        icon: 'ri-walk-line',
        title: 'Passenger Conduct',
        items: [
            {
                subtitle: 'Check-In & Boarding',
                text: 'Passengers must complete check-in no later than 60 minutes before departure for domestic flights and 90 minutes for international flights. The boarding gate closes 20 minutes before departure. Flivan will not accept passengers after these times and no refund will be provided for missed flights due to late arrival.',
            },
            {
                subtitle: 'Fitness to Fly',
                text: 'Flivan reserves the right to refuse travel to any passenger who, in the reasonable opinion of the Captain or our ground staff, is not fit to fly. This includes passengers who are intoxicated, behave in a disruptive manner, or present a safety risk to other passengers and crew.',
            },
            {
                subtitle: 'Disruptive Behaviour',
                text: 'Any passenger engaging in unruly, abusive, or threatening behaviour aboard a Flivan aircraft may be removed from the flight, reported to law enforcement authorities, and permanently banned from future travel with Flivan. Civil aviation law makes disruptive passenger behaviour a criminal offence in most jurisdictions.',
            },
        ],
    },
    {
        number: '05',
        icon: 'ri-scales-3-line',
        title: 'Liability & Governing Law',
        items: [
            {
                subtitle: 'Limitation of Liability',
                text: 'Flivan Aviation Group\'s liability for passenger injury or death, and for delays, is governed by the Montreal Convention 1999 where applicable. For routes not covered by the Montreal Convention, the Warsaw Convention as amended applies. Liability for delays is limited unless Flivan acted with intent to cause damage or recklessly with knowledge that damage would probably result.',
            },
            {
                subtitle: 'Force Majeure',
                text: 'Flivan shall not be liable for failure to perform any obligation under these Terms where such failure results from circumstances beyond our reasonable control, including but not limited to acts of God, war, civil unrest, epidemics, pandemics, government action, or air traffic control restrictions.',
            },
            {
                subtitle: 'Governing Law & Jurisdiction',
                text: 'These Terms of Carriage are governed by and construed in accordance with the laws of England and Wales. Any dispute arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the English courts, without prejudice to the rights of passengers under mandatory consumer protection laws in their country of residence.',
            },
        ],
    },
];

const TermsOfCarriage: React.FC = () => {
    const [openClause, setOpenClause] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <PageHeader
                title="Terms of Carriage"
                subtitle="The conditions of contract under which Flivan Aviation Group provides air travel services. Last updated: February 2026."
            />

            {/* Intro */}
            <div className="bg-primary-mid py-10 px-6">
                <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                        <i className="ri-file-list-3-line text-2xl text-accent"></i>
                    </div>
                    <p className="text-white/80 text-base leading-relaxed font-medium">
                        By purchasing a Flivan ticket, you agree to these Terms of Carriage. Please read them carefully
                        before completing your booking. These terms form a binding contract between you and Flivan Aviation Group
                        and supplement any specific fare conditions attached to your ticket.
                    </p>
                </div>
            </div>

            {/* Clause Accordion */}
            <div className="max-w-[860px] mx-auto px-6 py-16 space-y-4">
                {clauses.map((clause, index) => (
                    <div
                        key={index}
                        className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <button
                            onClick={() => setOpenClause(openClause === index ? null : index)}
                            className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                        >
                            <div className="flex items-center gap-5">
                                <span className="text-4xl font-black text-primary/8 leading-none tabular-nums">{clause.number}</span>
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                    <i className={`${clause.icon} text-lg text-accent`}></i>
                                </div>
                                <span className="text-lg font-black text-primary tracking-tight">{clause.title}</span>
                            </div>
                            <i className={`ri-arrow-down-s-line text-xl text-text-light transition-transform duration-300 ${openClause === index ? 'rotate-180' : ''}`}></i>
                        </button>

                        {openClause === index && (
                            <div className="px-8 pb-8 space-y-6 border-t border-gray-100 pt-6 animate-fade-in">
                                {clause.items.map((item, i) => (
                                    <div key={i} className="pl-4 border-l-2 border-accent/30">
                                        <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-2">{item.subtitle}</h3>
                                        <p className="text-text-light leading-relaxed text-[15px]">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Support Strip */}
            <div className="bg-gray-50 border-t border-gray-100 py-12 px-6">
                <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-black text-primary mb-1">Need help with a booking?</h3>
                        <p className="text-text-light text-sm">Our 24/7 concierge team is ready to assist.</p>
                    </div>
                    <a
                        href="tel:+1800354826"
                        className="flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-md text-sm"
                    >
                        <i className="ri-customer-service-2-line"></i> +1 800 FLIVAN
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TermsOfCarriage;
