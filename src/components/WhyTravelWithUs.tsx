'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhyTravelWithUs = ({ dict }: { dict: any }) => {
    return (
        <section className="py-12 bg-neutral-100">
            <div className="container mx-auto px-6 md:px-4">
                {/* Top Divider with Title */}
                <div className="flex items-center justify-end mb-16">
                    <div className="h-[1px] bg-gray-200 w-full max-w-4xl mr-8"></div>
                    <span className="font-poppins font-semibold text-primary text-lg italic whitespace-nowrap">{dict.title}</span>
                </div>

                {/* Main Headline */}
                <div className="max-w-5xl mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight font-poppins">
                        <span className="text-neutral-dark">{dict.headlinePart1}</span>
                        <span className="text-primary/80">{dict.headlinePart2}</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Item 01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="mb-6 border-b border-neutral-200 pb-6 group-hover:border-primary transition-colors duration-500">
                            <span className="text-5xl font-light text-neutral-300 group-hover:text-primary transition-colors font-poppins">01</span>
                        </div>
                        <h3 className="text-xl font-medium text-neutral-dark mb-4 group-hover:text-primary transition-colors">{dict.authenticity}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed font-light">
                            {dict.authenticityDesc}
                        </p>
                    </motion.div>

                    {/* Item 02 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <div className="mb-6 border-b border-neutral-200 pb-6 group-hover:border-primary transition-colors duration-500">
                            <span className="text-5xl font-light text-neutral-300 group-hover:text-primary transition-colors font-poppins">02</span>
                        </div>
                        <h3 className="text-xl font-medium text-neutral-dark mb-4 group-hover:text-primary transition-colors">{dict.expertKnowledge}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed font-light">
                            {dict.expertKnowledgeDesc}
                        </p>
                    </motion.div>

                    {/* Item 03 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group"
                    >
                        <div className="mb-6 border-b border-neutral-200 pb-6 group-hover:border-primary transition-colors duration-500">
                            <span className="text-5xl font-light text-neutral-300 group-hover:text-primary transition-colors font-poppins">03</span>
                        </div>
                        <h3 className="text-xl font-medium text-neutral-dark mb-4 group-hover:text-primary transition-colors">{dict.personalized}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed font-light">
                            {dict.personalizedDesc}
                        </p>
                    </motion.div>

                    {/* Item 04 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group"
                    >
                        <div className="mb-6 border-b border-neutral-200 pb-6 group-hover:border-primary transition-colors duration-500">
                            <span className="text-5xl font-light text-neutral-300 group-hover:text-primary transition-colors font-poppins">04</span>
                        </div>
                        <h3 className="text-xl font-medium text-neutral-dark mb-4 group-hover:text-primary transition-colors">{dict.sustainable}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed font-light">
                            {dict.sustainableDesc}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
