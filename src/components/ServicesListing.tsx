'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getSiteData } from '@/data/getSiteData';
import { ArrowRight, Clock, Star, Map, Compass, Palmtree, Car, ChevronDown, Grid } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicesListingProps {
    locale: string;
}

export const ServicesListing = ({ locale }: ServicesListingProps) => {
    const t = useTranslations('ServicesPage');
    const [activeCategory, setActiveCategory] = useState('all');
    const data = getSiteData(locale);

    const categories = [
        {
            id: 'all',
            label: 'All Services',
            icon: Grid,
            route: 'services',
            description: 'Browse all our offerings',
            data: () => {
                // Combine all services
                const tours = data.tours;
                const activities = data.activities.experiences || [];
                const groupedActivities = activities.reduce((acc: any, curr: any) => {
                    const type = curr.type;
                    if (!acc[type]) {
                        acc[type] = {
                            ...curr,
                            id: curr.type,
                            name: `${curr.type} Adventures`,
                            desc: `Experience our exclusive ${curr.type} activities.`,
                        };
                    }
                    if (curr.price < acc[type].price) {
                        acc[type].price = curr.price;
                    }
                    return acc;
                }, {});
                const activitiesArray = Object.values(groupedActivities);
                const packages = data.packages;
                const transport = data.transport;

                return [...tours, ...activitiesArray, ...packages, ...transport];
            }
        },
        {
            id: 'tours',
            label: 'Cultural Tours',
            icon: Map,
            route: 'tours',
            description: 'Immerse yourself in Morocco\'s rich heritage',
            data: () => data.tours
        },
        {
            id: 'activities',
            label: 'Adventures',
            icon: Compass,
            route: 'activities',
            description: 'Thrilling experiences await',
            data: () => {
                const experiences = data.activities.experiences || [];
                const grouped = experiences.reduce((acc: any, curr: any) => {
                    const type = curr.type;
                    if (!acc[type]) {
                        acc[type] = {
                            ...curr,
                            id: curr.type,
                            name: `${curr.type} Adventures`,
                            desc: `Experience our exclusive ${curr.type} activities.`,
                        };
                    }
                    if (curr.price < acc[type].price) {
                        acc[type].price = curr.price;
                    }
                    return acc;
                }, {});
                return Object.values(grouped);
            }
        },
        {
            id: 'packages',
            label: 'Curated Packs',
            icon: Palmtree,
            route: 'packages',
            description: 'Complete travel experiences',
            data: () => data.packages
        },
        {
            id: 'transport',
            label: 'Transport',
            icon: Car,
            route: 'transport',
            description: 'Travel in comfort',
            data: () => data.transport
        },
    ];

    // Helper function to get translated category labels
    const getCategoryLabel = (categoryId: string) => {
        switch (categoryId) {
            case 'all': return t('allServices');
            case 'tours': return t('culturalTours');
            case 'activities': return t('adventures');
            case 'packages': return t('curatedPacks');
            case 'transport': return t('transport');
            default: return categoryId;
        }
    };

    // Helper function to get translated category descriptions
    const getCategoryDescription = (categoryId: string) => {
        switch (categoryId) {
            case 'all': return t('allServicesDesc');
            case 'tours': return 'Immerse yourself in Morocco\'s rich heritage';
            case 'activities': return 'Thrilling experiences await';
            case 'packages': return 'Complete travel experiences';
            case 'transport': return 'Travel in comfort';
            default: return '';
        }
    };

    // Helper function to determine the correct route for an item
    const getItemRoute = (item: any) => {
        // Check if item has pricing array (tours)
        if (item.pricing && Array.isArray(item.pricing)) {
            return 'tours';
        }
        // Check if item has type property (activities)
        if (item.type && typeof item.type === 'string') {
            return 'activities';
        }
        // Check if item has included/excluded arrays (packages)
        if (item.included || item.excluded) {
            return 'packages';
        }
        // Check if item has capacity (transport)
        if (item.capacity) {
            return 'transport';
        }
        // Fallback to active category route
        return categories.find(c => c.id === activeCategory)?.route || 'services';
    };

    const renderPrice = (item: any, categoryId: string) => {
        if (categoryId === 'tours' && item.pricing && item.pricing[0]) {
            const p = item.pricing[0] as any;
            return p.totalPrice ? `€${p.totalPrice}` : `€${p.pricePerPerson}/p`;
        }
        if (categoryId === 'packages' || categoryId === 'activities') {
            return item.price ? `€${item.price}` : t('onRequest');
        }
        return t('onRequest');
    };

    const activeItems = categories.find(c => c.id === activeCategory)?.data() || [];

    return (
        <div className="min-h-screen bg-neutral-100">
            {/* Full Page Hero */}
            <section className="relative h-screen w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/marrakech/marrakech1.jpg"
                        alt="Morocco Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-4">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="inline-block text-primary bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                                {t('tag')}
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white font-poppins mb-6 leading-[1.1]">
                                {t('titlePart1')} <span className="italic">{t('titlePart2')}</span>
                            </h1>
                            <p className="text-white/80 text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-8">
                                {t('subtitle')}
                            </p>

                            {/* Category Pills */}
                            <div className="flex flex-wrap gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === cat.id
                                            ? 'bg-white text-neutral-dark'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        <cat.icon className="w-4 h-4" />
                                        {getCategoryLabel(cat.id)}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </motion.div>
                </div>
            </section>

            {/* Services Content */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">

                    {/* Active Category Header */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-medium text-neutral-dark font-poppins mb-2">
                                    {getCategoryLabel(activeCategory)}
                                </h2>
                                <p className="text-neutral-500">
                                    {getCategoryDescription(activeCategory)}
                                </p>
                            </div>
                            <Link
                                href={`/${locale}/${categories.find(c => c.id === activeCategory)?.route}`}
                                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                            >
                                {t('viewAll')}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {activeItems.slice(0, 6).map((item: any, idx: number) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={`/${locale}/${getItemRoute(item)}/${item.id}`}
                                        className="block group"
                                    >
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                                            {/* Image */}
                                            <div className="relative h-[220px] overflow-hidden">
                                                <Image
                                                    src={item.image || '/images/hero-marrakech.jpg'}
                                                    alt={item.name || item.type}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {/* Duration Badge */}
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                                                    <Clock className="w-3 h-3 text-primary" />
                                                    {activeCategory === 'tours' && item.duration
                                                        ? item.duration.replace('_', ' ')
                                                        : activeCategory === 'activities' ? '2-4 hours'
                                                            : activeCategory === 'packages' ? 'Full day'
                                                                : 'Flexible'}
                                                </div>
                                                {/* Rating */}
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                    4.9
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5">
                                                <h3 className="text-lg font-medium text-neutral-dark mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                                    {item.name || item.type}
                                                </h3>
                                                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                                    {item.desc || item.description || `Experience the best of Morocco.`}
                                                </p>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                                    <div>
                                                        <span className="text-neutral-400 text-xs">{t('startingFrom')}</span>
                                                        <span className="block text-xl font-bold text-primary">
                                                            {renderPrice(item, activeCategory)}
                                                        </span>
                                                    </div>
                                                    <span className="inline-flex items-center gap-1.5 text-neutral-dark text-sm font-medium group-hover:text-primary transition-colors">
                                                        {t('details')}
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <Link
                            href={`/${locale}/${categories.find(c => c.id === activeCategory)?.route}`}
                            className="inline-flex items-center gap-2 bg-neutral-dark text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors group"
                        >
                            {t('viewAll')} {getCategoryLabel(activeCategory)}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <div className="bg-neutral-dark rounded-3xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-medium text-white font-poppins mb-4">
                            {t('ctaTitle')}
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                            {t('ctaDescription')}
                        </p>
                        <Link
                            href={`/${locale}/contact`}
                            className="inline-flex items-center gap-2 bg-white text-neutral-dark px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors group"
                        >
                            {t('contactUs')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
