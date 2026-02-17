'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { getSiteData } from '@/data/getSiteData';
import { useTranslations } from 'next-intl';

export const PopularDestinations = ({ locale, dict }: { locale: string, dict: any }) => {
    const t = useTranslations('PopularDestinations');
    const data = getSiteData(locale);
    // Only show 3 featured tours
    const featuredTours = [
        data.tours.find(t => t.id === 'circuit-5-days-south'),
        data.tours.find(t => t.id === 'circuit-3-days-merzouga'),
        data.tours.find(t => t.id === 'circuit-8-days-imperial')
    ].filter(Boolean);

    return (
        <section className="py-12 bg-neutral-100">
            <div className="container mx-auto px-4">

                {/* Header - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-neutral-500 text-sm mb-3 block">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-poppins leading-tight mb-4">
                        {t('title')} <span className="italic">{t('titleItalic')}</span>
                    </h2>
                    <p className="text-neutral-500 max-w-xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Responsive Grid - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {featuredTours.map((tour: any, i: number) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Link href={`/${locale}/tours/${tour.id}`} className="block group h-full">
                                <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={tour.image}
                                            alt={tour.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                    </div>

                                    {/* Gradient Overlay - smooth fade for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

                                    {/* Top Content: Badges */}
                                    <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {tour.duration.replace('_', ' ')}
                                        </span>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        {/* Location Tag */}
                                        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{t('morocco')}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-medium text-white font-poppins mb-6 leading-tight group-hover:text-white/90 transition-colors">
                                            {tour.name}
                                        </h3>

                                        {/* CTA Button - uniquely styled */}
                                        <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-2">
                                            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                                                {t('viewAll')}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                                                <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
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
                        {t('exploreAllTours')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
