'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getSiteData } from '@/data/getSiteData';
import {
    ArrowRight, Clock, Star, Map, Compass, Palmtree, Car,
    ChevronDown, Grid, Plane, Sun, Moon, MapPin, Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicesListingProps {
    locale: string;
}

const isFrLocale = (locale: string) => locale === 'fr';

export const ServicesListing = ({ locale }: ServicesListingProps) => {
    const t = useTranslations('ServicesPage');
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('cat') || 'all';
    const isFr = isFrLocale(locale);

    const data = getSiteData(locale);

    const setCategory = (cat: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (cat === 'all') {
            params.delete('cat');
        } else {
            params.set('cat', cat);
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    // ── Category definitions ────────────────────────────────────────────────
    const categories = [
        { id: 'all',        icon: Grid,     labelFr: 'Tous les services',  labelEn: 'All Services' },
        { id: 'tours',      icon: Map,      labelFr: 'Circuits & Tours',   labelEn: 'Tours & Circuits' },
        { id: 'activities', icon: Compass,  labelFr: 'Aventures',          labelEn: 'Adventures' },
        { id: 'packages',   icon: Palmtree, labelFr: 'Packages',           labelEn: 'Packages' },
        { id: 'transport',  icon: Car,      labelFr: 'Transport',          labelEn: 'Transport' },
    ];

    const getCatLabel = (id: string) => {
        const cat = categories.find(c => c.id === id);
        return cat ? (isFr ? cat.labelFr : cat.labelEn) : id;
    };

    // ── Items for each category ──────────────────────────────────────────────
    const getItems = () => {
        const buildActivities = (exps: any[]) => {
            const grouped = exps.reduce((acc: any, curr: any) => {
                if (!acc[curr.type]) {
                    acc[curr.type] = { ...curr, id: curr.type, name: `${curr.type} Adventures`, desc: `Experience our exclusive ${curr.type} activities.` };
                }
                if (curr.price < acc[curr.type].price) acc[curr.type].price = curr.price;
                return acc;
            }, {});
            return Object.values(grouped);
        };

        switch (activeCategory) {
            case 'tours':       return data.tours;
            case 'packages':    return data.packages;
            case 'transport':   return data.transport;
            case 'activities':  return buildActivities(data.activities.experiences || []);
            default: {
                const acts = buildActivities(data.activities.experiences || []);
                return [...data.tours, ...acts, ...(data.packages || [])];
            }
        }
    };

    const items = getItems();

    // ── Price display ────────────────────────────────────────────────────────
    const renderPrice = (item: any) => {
        if (item.pricing?.length) {
            const p = item.pricing[0];
            return p.totalPrice ? `€${p.totalPrice}` : `€${p.pricePerPerson}/p`;
        }
        if (item.price) return `€${item.price}`;
        return t('onRequest');
    };

    // ── Smart route for "all" view ───────────────────────────────────────────
    const getItemRoute = (item: any) => {
        if (data.tours.some((t: any) => t.id === item.id)) return 'tours';
        if (data.transport.some((t: any) => t.id === item.id)) return 'transport';
        if (item.type && typeof item.type === 'string') return 'activities';
        if (data.packages?.some((p: any) => p.id === item.id)) return 'packages';
        return 'services';
    };

    const activeItemRoute = activeCategory === 'all' ? null : (
        activeCategory === 'activities' ? 'activities' : activeCategory
    );

    // ── Whether to show transport special layout ─────────────────────────────
    const isTransport = activeCategory === 'transport';

    const airport = data.transport.find((t: any) => t.id === 'airport');
    const privateT = data.transport.find((t: any) => t.id === 'private');

    return (
        <div className="min-h-screen bg-[#F8F7F4] font-poppins text-neutral-dark">

            {/* ── HERO ── */}
            <section className="relative h-screen w-full">
                <div className="absolute inset-0">
                    <Image src="/images/marrakech/marrakech1.jpg" alt="Morocco Services" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-4">
                    <div className="container mx-auto">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
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
                                        onClick={() => setCategory(cat.id)}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                                            activeCategory === cat.id
                                                ? 'bg-white text-neutral-dark'
                                                : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                    >
                                        <cat.icon className="w-4 h-4" />
                                        {getCatLabel(cat.id)}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </motion.div>
                </div>
            </section>

            {/* ── CONTENT SECTION ── */}
            <section className="py-16 bg-[#F8F7F4]">
                <div className="container mx-auto px-4">

                    {/* Section header */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory + '-header'}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-10"
                        >
                            <h2 className="text-3xl md:text-4xl font-medium text-neutral-dark mb-2">
                                {getCatLabel(activeCategory)}
                            </h2>
                            <p className="text-neutral-500">
                                {isTransport
                                    ? (isFr ? 'Véhicules privés climatisés pour tous vos déplacements.' : 'Private A/C vehicles for all your journeys.')
                                    : (isFr ? `${items.length} offres disponibles` : `${items.length} offerings available`)}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* ── TRANSPORT SPECIAL LAYOUT ── */}
                    <AnimatePresence mode="wait">
                        {isTransport ? (
                            <motion.div
                                key="transport"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
                            >
                                {/* Airport Card */}
                                {airport && (
                                    <Link href={`/${locale}/transport/airport`} className="group block h-full">
                                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 h-full flex flex-col">
                                            <div className="relative h-52 overflow-hidden">
                                                <Image src={airport.image || '/images/hero-marrakech.jpg'} alt={airport.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                                                    <Plane className="w-3.5 h-3.5 text-primary" />
                                                    {isFr ? 'Aéroport' : 'Airport'}
                                                </div>
                                            </div>
                                            <div className="p-7 flex flex-col flex-1">
                                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{airport.name}</h3>
                                                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">{airport.description}</p>
                                                <div className="grid grid-cols-2 gap-3 mb-6">
                                                    <div className="bg-amber-50 rounded-2xl p-4 text-center">
                                                        <Sun className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                                                        <p className="text-xs text-neutral-500 mb-0.5">{isFr ? 'Jour' : 'Day'}</p>
                                                        <p className="font-bold text-lg">{airport.dayRate} <span className="text-xs font-normal text-neutral-400">MAD</span></p>
                                                    </div>
                                                    <div className="bg-neutral-900 rounded-2xl p-4 text-center">
                                                        <Moon className="w-5 h-5 text-primary mx-auto mb-1" />
                                                        <p className="text-xs text-white/40 mb-0.5">{isFr ? 'Nuit' : 'Night'}</p>
                                                        <p className="font-bold text-white text-lg">{airport.nightRate} <span className="text-xs font-normal text-white/40">MAD</span></p>
                                                    </div>
                                                </div>
                                                <span className="inline-flex items-center gap-2 font-medium text-sm group-hover:text-primary transition-colors">
                                                    {isFr ? 'Voir les tarifs' : 'See rates'}
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                                {/* Private Transfers Card */}
                                {privateT && (
                                    <Link href={`/${locale}/transport/private`} className="group block h-full">
                                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 h-full flex flex-col">
                                            <div className="relative h-52 overflow-hidden">
                                                <Image src={privateT.image || '/images/hero-marrakech.jpg'} alt={privateT.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                                                    <Car className="w-3.5 h-3.5 text-primary" />
                                                    {isFr ? 'Privé' : 'Private'}
                                                </div>
                                            </div>
                                            <div className="p-7 flex flex-col flex-1">
                                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{privateT.name}</h3>
                                                <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">{privateT.description}</p>

                                                {/* Mini destination preview */}
                                                <div className="bg-neutral-50 rounded-2xl p-4 mb-5 space-y-2">
                                                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 pb-2 border-b border-neutral-100">
                                                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 1–7</span>
                                                        <span className="font-medium text-neutral-500">{isFr ? 'Exemples' : 'Sample rates'}</span>
                                                        <span className="flex items-center gap-1">7+ <Users className="w-3 h-3" /></span>
                                                    </div>
                                                    {privateT.destinations?.slice(0, 4).map((d: any) => (
                                                        <div key={d.name} className="flex items-center justify-between text-sm">
                                                            <div className="flex items-center gap-1.5 text-neutral-600">
                                                                <MapPin className="w-3 h-3 text-primary shrink-0" />{d.name}
                                                            </div>
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="font-medium text-neutral-800">{d.price1to7.toLocaleString()}</span>
                                                                <span className="text-neutral-300">|</span>
                                                                <span className="font-semibold text-primary">{d.price7plus.toLocaleString()}</span>
                                                                <span className="text-xs text-neutral-400">MAD</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <p className="text-xs text-neutral-400 text-center pt-1">
                                                        +{(privateT.destinations?.length || 0) - 4} {isFr ? 'destinations →' : 'more →'}
                                                    </p>
                                                </div>

                                                <span className="inline-flex items-center gap-2 font-medium text-sm group-hover:text-primary transition-colors">
                                                    {isFr ? 'Voir tous les tarifs' : 'See all rates'}
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </motion.div>
                        ) : (
                            /* ── STANDARD GRID ── */
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {items.map((item: any, idx: number) => {
                                    const route = activeItemRoute || getItemRoute(item);
                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.04 }}
                                        >
                                            <Link href={`/${locale}/${route}/${item.id}`} className="block group">
                                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                                                    <div className="relative h-[220px] overflow-hidden">
                                                        <Image
                                                            src={item.image || '/images/hero-marrakech.jpg'}
                                                            alt={item.name || item.type}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                                                            <Clock className="w-3 h-3 text-primary" />
                                                            {item.duration
                                                                ? item.duration.replace('_', ' ')
                                                                : item.price ? '2–4 hrs' : 'Flexible'}
                                                        </div>
                                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                                                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                            4.9
                                                        </div>
                                                    </div>
                                                    <div className="p-5">
                                                        <h3 className="text-lg font-medium text-neutral-dark mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                                            {item.name || item.type}
                                                        </h3>
                                                        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                                            {item.desc || item.description || 'Experience the best of Morocco.'}
                                                        </p>
                                                        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                                            <div>
                                                                <span className="text-neutral-400 text-xs">{t('startingFrom')}</span>
                                                                <span className="block text-xl font-bold text-primary">{renderPrice(item)}</span>
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
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── BOTTOM CTA ── */}
            <section className="py-16 bg-[#F8F7F4]">
                <div className="container mx-auto px-4">
                    <div className="bg-neutral-dark rounded-3xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-medium text-white font-poppins mb-4">{t('ctaTitle')}</h2>
                        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">{t('ctaDescription')}</p>
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
