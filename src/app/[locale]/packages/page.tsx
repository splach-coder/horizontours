'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getSiteData } from '@/data/getSiteData';
import { ArrowRight, Clock, Star, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default function PackagesPage({ params }: PageProps) {
    const { locale } = React.use(params);
    const t = useTranslations('ListingPage');
    const searchParams = useSearchParams();
    const query = searchParams.get('search') || searchParams.get('destination');
    const data = getSiteData(locale);
    const allPackages = data.packages || [];

    const packages = React.useMemo(() => {
        if (!query) return allPackages;
        const q = query.toLowerCase();
        return allPackages.filter((p: any) =>
            p.name.toLowerCase().includes(q) ||
            (p.location && p.location.toLowerCase().includes(q))
        );
    }, [allPackages, query]);

    return (
        <div className="min-h-screen bg-neutral-100">
            {/* Full Page Hero */}
            <section className="relative h-screen w-full">
                <div className="absolute inset-0">
                    <Image
                        src="/images/essaouira/rigel-ibisQEDxODo-unsplash.jpg"
                        alt="Morocco Packages"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6">
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
                                {locale === 'fr' ? 'Forfaits' : 'Curated'} <span className="italic">{locale === 'fr' ? 'Complets' : 'Packages'}</span>
                            </h1>
                            <p className="text-white/80 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                                {t('packagesSubtitle')}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </motion.div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-medium text-neutral-dark font-poppins mb-2">
                                {locale === 'fr' ? 'Tous les Forfaits' : 'All Packages'}
                            </h2>
                            <p className="text-neutral-500">{packages.length} {locale === 'fr' ? 'forfaits disponibles' : 'packages available'}</p>
                        </div>
                        <Link
                            href={`/${locale}/services`}
                            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                        >
                            {locale === 'fr' ? 'Voir tous les services' : 'View all services'}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {packages.map((item: any, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Link href={`/${locale}/packages/${item.id}`} className="block group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                                        <div className="relative h-[220px] overflow-hidden">
                                            <Image
                                                src={item.image || '/images/hero-marrakech.jpg'}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                                                <Clock className="w-3 h-3 text-primary" />
                                                {locale === 'fr' ? 'Journée complète' : 'Full day'}
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                4.9
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h3 className="text-lg font-medium text-neutral-dark mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                                {item.desc || (locale === 'fr' ? 'Découvrez le meilleur du Maroc avec ce forfait complet.' : 'Experience the best of Morocco with this curated package.')}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                                <div>
                                                    <span className="text-neutral-400 text-xs">{locale === 'fr' ? 'À partir de' : 'From'}</span>
                                                    <span className="block text-xl font-bold text-primary">€{item.price}</span>
                                                </div>
                                                <span className="inline-flex items-center gap-1.5 text-neutral-dark text-sm font-medium group-hover:text-primary transition-colors">
                                                    {locale === 'fr' ? 'Détails' : 'Details'}
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
