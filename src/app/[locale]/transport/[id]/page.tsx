'use client';

import React, { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { getSiteData } from '@/data/getSiteData';
import { motion } from 'framer-motion';
import {
    Plane, Car, Sun, Moon, MapPin, Users, ArrowLeft,
    ChevronDown, MessageCircle, Phone, Check, X
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { siteInfo } from '@/data/siteInfo';

interface PageProps {
    params: Promise<{ id: string; locale: string }>;
}

const fadeUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.04, duration: 0.45 }
    })
};

export default function TransportDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);
    const data = getSiteData(locale);
    const item = data.transport.find((t: any) => t.id === id);

    if (!item) return notFound();

    const isFr = locale === 'fr';

    const whatsappMsg = encodeURIComponent(
        isFr ? 'Bonjour, je souhaite réserver un transfert.' : 'Hello, I would like to book a transfer.'
    );

    return (
        <div className="min-h-screen bg-[#F8F7F4] font-poppins text-neutral-dark">

            {/* ── HERO ── */}
            <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden">
                <Image
                    src={item.image || '/images/hero-marrakech.jpg'}
                    alt={item.name}
                    fill className="object-cover" priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/80" />

                <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link
                                href={`/${locale}/services?cat=transport`}
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                {isFr ? 'Tous les transports' : 'All transport'}
                            </Link>

                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center gap-2 text-primary bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium">
                                    {id === 'airport' ? <Plane className="w-3.5 h-3.5" /> : <Car className="w-3.5 h-3.5" />}
                                    {isFr ? 'Tarifs' : 'Rates'}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-4 leading-[1.05]">
                                {item.name}
                            </h1>
                            <p className="text-white/70 text-lg max-w-xl font-light">
                                {item.description}
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

            {/* ── CONTENT ── */}
            <div className="container mx-auto px-4 py-16 md:py-20">

                {/* ─── AIRPORT ─── */}
                {id === 'airport' && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="text-center mb-10">
                            <span className="inline-flex items-center gap-1.5 text-sm text-neutral-400 mt-2">
                                <MapPin className="w-3.5 h-3.5" /> {item.note}
                            </span>
                        </div>

                        {/* Rate Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-5">
                                    <Sun className="w-7 h-7 text-amber-500" />
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                                    {isFr ? 'Journée' : 'Day Rate'}
                                </p>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl font-bold">{item.dayRate}</span>
                                    <span className="text-xl text-neutral-400">{item.currency}</span>
                                </div>
                                <p className="text-sm text-neutral-400">
                                    {isFr ? 'Par trajet (jour)' : 'Per transfer (day)'}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.18 }}
                                className="bg-neutral-900 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                                    <Moon className="w-7 h-7 text-primary" />
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                                    {isFr ? 'Nuit' : 'Night Rate'}
                                </p>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl font-bold text-white">{item.nightRate}</span>
                                    <span className="text-xl text-white/40">{item.currency}</span>
                                </div>
                                <p className="text-sm text-white/40">
                                    {isFr ? 'Par trajet (nuit)' : 'Per transfer (night)'}
                                </p>
                            </motion.div>
                        </div>

                        {/* Includes / Excludes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                                <h3 className="font-medium text-base mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </span>
                                    {isFr ? 'Inclus' : 'Included'}
                                </h3>
                                <ul className="space-y-2.5 text-sm text-neutral-600">
                                    {(isFr
                                        ? ['Chauffeur professionnel', 'Véhicule climatisé', 'Prise en charge à l\'hôtel', 'Carburant', 'Assurance']
                                        : ['Professional driver', 'A/C vehicle', 'Hotel pickup', 'Fuel', 'Insurance']
                                    ).map((s, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500 shrink-0" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                                <h3 className="font-medium text-base mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                                        <X className="w-4 h-4 text-red-500" />
                                    </span>
                                    {isFr ? 'Non inclus' : 'Not Included'}
                                </h3>
                                <ul className="space-y-2.5 text-sm text-neutral-600">
                                    {(isFr
                                        ? ['Pourboires', 'Arrêts supplémentaires', 'Dépenses personnelles']
                                        : ['Tips', 'Extra stops', 'Personal expenses']
                                    ).map((s, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <X className="w-4 h-4 text-red-400 shrink-0" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Info note */}
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-start gap-3 mb-10">
                            <span className="text-lg mt-0.5">ℹ️</span>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {isFr
                                    ? 'Le tarif nuit s\'applique entre 20h et 8h. Votre chauffeur vous attend à la sortie des arrivées avec un panneau à votre nom.'
                                    : 'Night rate applies between 8pm and 8am. Your driver will meet you at the arrivals exit with a sign bearing your name.'}
                            </p>
                        </div>

                        <BookCTA isFr={isFr} whatsappMsg={whatsappMsg} />
                    </motion.div>
                )}

                {/* ─── PRIVATE TRANSFERS ─── */}
                {id === 'private' && item.destinations && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    >
                        {/* Group Legend */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            <div className="flex items-center gap-2 bg-white border border-neutral-100 rounded-full px-4 py-2 shadow-sm">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">
                                    {isFr ? 'Transfert de 1 à 7 personnes' : '1 to 7 people'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-neutral-900 rounded-full px-4 py-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-white">
                                    {isFr ? 'De 7 à 17 personnes' : '7 to 17 people'}
                                </span>
                            </div>
                        </div>

                        {/* Destination Table */}
                        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-neutral-100 max-w-3xl mx-auto mb-10">
                            {/* Header */}
                            <div className="grid grid-cols-3 px-6 py-4 bg-neutral-50 border-b border-neutral-100">
                                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                                    {isFr ? 'Destination' : 'Destination'}
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-right">
                                    {isFr ? '1 à 7 pers.' : '1–7 pax'}
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-right">
                                    {isFr ? '7 à 17 pers.' : '7–17 pax'}
                                </span>
                            </div>

                            {/* Rows */}
                            {item.destinations.map((dest: any, i: number) => (
                                <motion.div
                                    key={dest.name}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="grid grid-cols-3 px-6 py-4 border-b border-neutral-50 last:border-0 hover:bg-primary/[0.03] transition-colors group"
                                >
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                                        <span className="font-medium text-sm md:text-base text-neutral-800 group-hover:text-primary transition-colors">
                                            {dest.name}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-semibold text-sm md:text-base text-neutral-dark">
                                            {dest.price1to7.toLocaleString()}
                                        </span>
                                        <span className="text-xs text-neutral-400 ml-1">MAD</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-semibold text-sm md:text-base text-primary">
                                            {dest.price7plus.toLocaleString()}
                                        </span>
                                        <span className="text-xs text-neutral-400 ml-1">MAD</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Includes / Excludes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-10">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                                <h3 className="font-medium text-base mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </span>
                                    {isFr ? 'Inclus' : 'Included'}
                                </h3>
                                <ul className="space-y-2.5 text-sm text-neutral-600">
                                    {(isFr
                                        ? ['Chauffeur professionnel', 'Van climatisé', 'Prise en charge à l\'hôtel', 'Carburant', 'Assurance']
                                        : ['Professional driver', 'A/C van', 'Hotel pickup', 'Fuel', 'Insurance']
                                    ).map((s, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500 shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                                <h3 className="font-medium text-base mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                                        <X className="w-4 h-4 text-red-500" /></span>
                                    {isFr ? 'Non inclus' : 'Not Included'}
                                </h3>
                                <ul className="space-y-2.5 text-sm text-neutral-600">
                                    {(isFr
                                        ? ['Pourboires', 'Arrêts supplémentaires', 'Dépenses personnelles']
                                        : ['Tips', 'Extra stops', 'Personal expenses']
                                    ).map((s, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <X className="w-4 h-4 text-red-400 shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Info note */}
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-start gap-3 mb-10 max-w-3xl mx-auto">
                            <span className="text-lg mt-0.5">ℹ️</span>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {isFr
                                    ? 'Tous les tarifs s\'entendent par véhicule, aller simple, au départ de Marrakech. Prise en charge à votre hôtel ou riad.'
                                    : 'All rates are per vehicle, one way, departing from Marrakech. Pickup from your hotel or riad.'}
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <BookCTA isFr={isFr} whatsappMsg={whatsappMsg} />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* ── BOTTOM BANNER ── */}
            <section className="bg-neutral-900 py-16 px-6 mt-4">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                        {isFr ? 'Besoin d\'un trajet sur mesure ?' : 'Need a custom route?'}
                    </h3>
                    <p className="text-white/50 mb-7 max-w-md mx-auto text-sm">
                        {isFr
                            ? 'Contactez-nous pour tout trajet non listé ou pour des groupes de grande taille.'
                            : 'Contact us for any unlisted route or large group bookings.'}
                    </p>
                    <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-neutral-dark font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                    >
                        {isFr ? 'Nous contacter' : 'Contact Us'}
                    </Link>
                </div>
            </section>
        </div>
    );
}

function BookCTA({ isFr, whatsappMsg }: { isFr: boolean; whatsappMsg: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div>
                <h4 className="text-2xl font-medium text-white mb-1">
                    {isFr ? 'Réserver votre transfert' : 'Book your transfer'}
                </h4>
                <p className="text-white/50 text-sm">
                    {isFr ? 'Confirmation rapide par WhatsApp ou téléphone.' : 'Quick confirmation via WhatsApp or phone.'}
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                    href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
                >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                    href={`tel:${siteInfo.contact.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/20"
                >
                    <Phone className="w-4 h-4" />
                    {isFr ? 'Appeler' : 'Call Us'}
                </a>
            </div>
        </motion.div>
    );
}
