'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Can I change or cancel my trip after booking?",
        answer: "Yes! We understand plans can change. You can easily modify or cancel your trip by contacting us directly via WhatsApp or email. Just make sure to check the flexible date options before confirming your booking."
    },
    {
        question: "Does Horizon Tours offer group travel options?",
        answer: "Absolutely! We offer both private tours for intimate experiences and group tours for those who want to meet fellow travelers. Our group sizes are kept small (max 12 people) to ensure quality and personalized attention."
    },
    {
        question: "How do I get travel support during my trip?",
        answer: "We provide 24/7 support throughout your journey. You'll have a dedicated WhatsApp line to reach our team anytime. Our local guides are also available to assist you during all activities and excursions."
    },
    {
        question: "What's included in the tour price?",
        answer: "Our tour prices typically include accommodation, private transportation, professional guides, and specified meals (usually half-board). Specific inclusions are detailed on each tour page. Flights, tips, and personal expenses are generally not included."
    },
    {
        question: "What is the best time to visit Morocco?",
        answer: "The best time to visit Morocco is during spring (March to May) or autumn (September to November) when temperatures are pleasant. Summer can be hot in the desert, while winter is ideal for the southern regions."
    }
];

export const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-12 bg-neutral-100">
            <div className="container mx-auto px-6 md:px-4 max-w-3xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-poppins mb-4">
                        Frequently Asked <span className="italic">Questions</span>
                    </h2>
                    <p className="text-neutral-500 max-w-xl mx-auto">
                        Got questions before your next trip? We've got you covered — here's everything you need to know about traveling with Horizon Tours.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div
                                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-medium text-neutral-dark text-lg pr-4">
                                        {item.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-neutral-dark text-white rotate-180'
                                        : 'bg-neutral-100 text-neutral-400'
                                        }`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-6 pb-6">
                                                <p className="text-neutral-500 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
