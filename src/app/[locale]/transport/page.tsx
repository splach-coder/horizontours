'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getSiteData } from '@/data/getSiteData';
import { Plane, Car, Sun, Moon, MapPin, Users, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default function TransportPage({ params }: PageProps) {
    const { locale } = React.use(params);
    const data = getSiteData(locale);
    const isFr = locale === 'fr';

    const airport = data.transport.find((t: any) => t.id === 'airport');
    const privateT = data.transport.find((t: any) => t.id === 'private');

    return (
        <div className="min-h-screen bg-[#F8F7F4] font-poppins text-neutral-dark">

            {/* ── HERO ── */}
            <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden">
                <Image
                    src="/images/transport/private-transport.jpeg"
                    alt="Morocco Transport"
                    fill className="object-cover" priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
                <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-flex items-center gap-2 text-primary bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Car className="w-4 h-4" />
                                {isFr ? 'Transferts & Transport' : 'Transfers & Transport'}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-medium text-white mb-4 leading-[1.05]">
                                {isFr ? <><span className="italic">Services de</span> Transport</> : <><span className="italic">Transport</span> Services</>}
                            </h1>
                            <p className="text-white/70 text-lg md:text-xl max-w-xl font-light">
                                {isFr
                                    ? 'Véhicules privés climatisés, chauffeurs professionnels — pour tous vos déplacements au Maroc.'
                                    : 'Private air-conditioned vehicles with professional drivers — for all your journeys in Morocco.'}
                            </p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-7 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown className="w-7 h-7 text-white/50" />
                </motion.div>
            </section>

            {/* ── CARDS ── */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-medium mb-3">
                            {isFr ? 'Nos Options de Transport' : 'Our Transport Options'}
                        </h2>
                        <p className="text-neutral-500 max-w-md mx-auto">
                            {isFr
                                ? 'Choisissez le service qui correspond à votre besoin pour voir les tarifs détaillés.'
                                : 'Choose the service that fits your need to see detailed rates.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Airport Card */}
                        {airport && (
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link href={`/${locale}/transport/airport`} className="group block h-full">
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-neutral-100 h-full flex flex-col">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={airport.image || '/images/hero-marrakech.jpg'}
                                                alt={airport.name} fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-neutral-dark">
                                                <Plane className="w-3.5 h-3.5 text-primary" />
                                                {isFr ? 'Aéroport' : 'Airport'}
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="p-7 flex flex-col flex-1">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                                {airport.name}
                                            </h3>
                                            <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">
                                                {airport.description}
                                            </p>

                                            {/* Rate Preview */}
                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                <div className="bg-amber-50 rounded-2xl p-4 text-center">
                                                    <Sun className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                                                    <p className="text-xs text-neutral-500 mb-0.5">{isFr ? 'Jour' : 'Day'}</p>
                                                    <p className="font-bold text-neutral-dark text-lg">{airport.dayRate} <span className="text-xs font-normal text-neutral-400">MAD</span></p>
                                                </div>
                                                <div className="bg-neutral-900 rounded-2xl p-4 text-center">
                                                    <Moon className="w-5 h-5 text-primary mx-auto mb-1" />
                                                    <p className="text-xs text-white/40 mb-0.5">{isFr ? 'Nuit' : 'Night'}</p>
                                                    <p className="font-bold text-white text-lg">{airport.nightRate} <span className="text-xs font-normal text-white/40">MAD</span></p>
                                                </div>
                                            </div>

                                            <span className="inline-flex items-center gap-2 font-medium text-sm group-hover:text-primary transition-colors">
                                                {isFr ? 'Voir les détails' : 'See details'}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Private Transfers Card */}
                        {privateT && (
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link href={`/${locale}/transport/private`} className="group block h-full">
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-neutral-100 h-full flex flex-col">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={privateT.image || '/images/hero-marrakech.jpg'}
                                                alt={privateT.name} fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-neutral-dark">
                                                <Car className="w-3.5 h-3.5 text-primary" />
                                                {isFr ? 'Privé' : 'Private'}
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="p-7 flex flex-col flex-1">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                                {privateT.name}
                                            </h3>
                                            <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">
                                                {privateT.description}
                                            </p>

                                            {/* Destination Preview */}
                                            <div className="bg-neutral-50 rounded-2xl p-4 mb-6 space-y-2">
                                                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 pb-2 border-b border-neutral-100">
                                                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 1–7</span>
                                                    <span className="font-medium text-neutral-500">{isFr ? 'Exemples de tarifs' : 'Sample rates'}</span>
                                                    <span className="flex items-center gap-1">7+ <Users className="w-3 h-3" /></span>
                                                </div>
                                                {privateT.destinations?.slice(0, 4).map((d: any) => (
                                                    <div key={d.name} className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center gap-1.5 text-neutral-600">
                                                            <MapPin className="w-3 h-3 text-primary shrink-0" />
                                                            {d.name}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-neutral-800">{d.price1to7.toLocaleString()}</span>
                                                            <span className="text-neutral-300">|</span>
                                                            <span className="font-semibold text-primary">{d.price7plus.toLocaleString()}</span>
                                                            <span className="text-xs text-neutral-400">MAD</span>
                                                        </div>
                                                    </div>
                                                ))}
                                                <p className="text-xs text-neutral-400 text-center pt-1">
                                                    +{(privateT.destinations?.length || 0) - 4} {isFr ? 'autres destinations →' : 'more destinations →'}
                                                </p>
                                            </div>

                                            <span className="inline-flex items-center gap-2 font-medium text-sm group-hover:text-primary transition-colors">
                                                {isFr ? 'Voir tous les tarifs' : 'See all rates'}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
