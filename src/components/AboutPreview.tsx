'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Star } from 'lucide-react';
import Image from 'next/image';

export const AboutPreview = ({ locale, dict }: { locale: string, dict: any }) => {
    return (
        <section className="py-12 bg-neutral-100">
            <div className="container mx-auto px-6 md:px-4">

                {/* Main Grid - Items stretch to same height */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                    {/* Left: Image with Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] lg:h-auto"
                    >
                        {/* Main Image - Full height */}
                        <div className="relative rounded-3xl overflow-hidden h-full shadow-2xl">
                            <Image
                                src="/images/marrakech/marrakech5.jpg"
                                alt="Morocco Desert Experience"
                                fill
                                className="object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl shadow-xl p-5 min-w-[180px]"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                </div>
                                <div>
                                    <span className="block text-xl font-bold text-neutral-dark">4.9</span>
                                    <span className="text-xs text-neutral-400">Avg Rating</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-neutral-500">
                                <Users className="w-3 h-3" />
                                <span>500+ Travelers</span>
                            </div>
                        </motion.div>

                        {/* Location Badge */}
                        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
                            <MapPin className="w-3 h-3 text-primary" />
                            <span className="text-xs font-medium text-neutral-dark">Morocco</span>
                        </div>
                    </motion.div>

                    {/* Right: Content - Flexbox to distribute content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Tag */}
                        <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 bg-primary/10 px-3 py-1 rounded-full w-fit">
                            {dict.title}
                        </span>

                        {/* Headline */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-dark font-poppins leading-tight mb-4">
                            {dict.headlinePart1}
                            <span className="text-primary"> {dict.headlinePart2}</span>
                        </h2>

                        {/* Description - Condensed */}
                        <p className="text-neutral-500 leading-relaxed mb-6 line-clamp-4">
                            {dict.text1}
                        </p>

                        {/* Stats Row - Compact */}
                        <div className="flex items-center gap-6 mb-8 pb-6 border-b border-neutral-200">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-neutral-dark">98%</span>
                                <span className="text-xs text-neutral-400 uppercase tracking-wider">{dict.stats.recommend}</span>
                            </div>
                            <div className="w-px h-10 bg-neutral-200" />
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-neutral-dark">10+</span>
                                <span className="text-xs text-neutral-400 uppercase tracking-wider">{dict.stats.itineraries}</span>
                            </div>
                            <div className="w-px h-10 bg-neutral-200" />
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-neutral-dark">24/7</span>
                                <span className="text-xs text-neutral-400 uppercase tracking-wider">Support</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href={`/${locale}/about`}
                            className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl group w-fit"
                        >
                            <span>{dict.readMore}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
