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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {featuredTours.map((tour: any, i: number) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Link href={`/${locale}/tours/${tour.id}`} className="block group">
                                <div className="relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
                                            <span>{t('morocco')}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-medium text-white font-poppins mb-4 leading-tight">
                                            {tour.name}
                                        </h3>

                                        {/* Price & CTA */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-white/60 text-xs block">{t('from')}</span>
                                                <span className="text-white text-2xl font-bold">€{tour.pricing ? Math.min(...tour.pricing.map((p: any) => p.pricePerPerson)) : tour.price}</span>
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
