'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { siteData, siteDataFr } from '@/data/siteData';

export const PopularDestinations = ({ locale, dict }: { locale: string, dict: any }) => {
    const data = locale === 'fr' ? siteDataFr : siteData;
    const featuredTours = [
        data.tours.find(t => t.id === 'circuit-5-days-south'),
        data.tours.find(t => t.id === 'circuit-3-days-merzouga'),
        data.tours.find(t => t.id === 'circuit-8-days-imperial'),
        data.tours.find(t => t.id === 'circuit-4-days-fes')
    ].filter(Boolean);

    return (
        <section className="py-12 bg-neutral-100">
            <div className="container mx-auto px-6 md:px-4">

                {/* Header - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-neutral-500 text-sm mb-3 block">
                        {dict?.subtitle || "Discover Morocco"}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-poppins leading-tight mb-4">
                        Popular <span className="italic">Destinations</span>
                    </h2>
                    <p className="text-neutral-500 max-w-xl mx-auto">
                        Handpicked experiences for unforgettable adventures across Morocco
                    </p>
                </motion.div>

                {/* Horizontal Scroll Cards */}
                <div className="relative -mx-6 md:mx-0">
                    <div className="flex gap-5 overflow-x-auto pb-6 px-6 md:px-0 snap-x snap-mandatory scrollbar-hide">
                        {featuredTours.map((tour: any, i: number) => (
                            <motion.div
                                key={tour.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
                            >
                                <Link href={`/${locale}/tours/${tour.id}`} className="block group">
                                    <div className="relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden">
                                        {/* Background Image */}
                                        <Image
                                            src={tour.image}
                                            alt={tour.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                        {/* Top Badge */}
                                        <div className="absolute top-5 left-5 flex items-center gap-2">
                                            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {tour.duration.replace('_', ' ')}
                                            </span>
                                        </div>

                                        {/* Bottom Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            {/* Location */}
                                            <div className="flex items-center gap-1.5 text-white/70 text-sm mb-2">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span>Morocco</span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl md:text-2xl font-medium text-white font-poppins mb-4 leading-tight">
                                                {tour.name}
                                            </h3>

                                            {/* Price & CTA */}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-white/60 text-xs block">From</span>
                                                    <span className="text-white text-2xl font-bold">€{tour.price}</span>
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                                    <ArrowRight className="w-5 h-5 text-neutral-dark group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Gradient Fade - Right */}
                    <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-neutral-100 to-transparent pointer-events-none hidden md:block" />
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <Link
                        href={`/${locale}/tours`}
                        className="inline-flex items-center gap-2 bg-neutral-dark text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors group"
                    >
                        Explore All Tours
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
