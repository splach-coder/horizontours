'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingForm } from '@/components/BookingForm';
import { Clock, MapPin, Check, X, Star, ArrowLeft, ChevronDown, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface SubItem {
    id: string;
    type: string;
    location?: string;
    price: number;
    duration?: string;
}

export interface ServiceDetailProps {
    id: string;
    type: 'tour' | 'activity' | 'package' | 'transport';
    title: string;
    description: string;
    image: string;
    price: number | string;
    duration?: string;
    location?: string;
    included?: string[];
    excluded?: string[];
    itinerary?: {
        day: number;
        title: string;
        description: string;
    }[];
    minPeople?: number;
    subItems?: SubItem[];
    locale: string;
    gallery?: string[];
}

import { ServiceDetailMobile } from '@/components/ServiceDetailMobile';

export const ServiceDetailContent = ({
    type,
    title,
    description,
    image,
    price,
    duration,
    location,
    included = [],
    excluded = [],
    itinerary = [],
    subItems = [],
    locale,
    gallery = []
}: ServiceDetailProps) => {
    const [activeDay, setActiveDay] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const renderDuration = (d: string) => d?.replace('_', ' ') || 'Flexible';

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <>
            <div className="md:hidden">
                <ServiceDetailMobile
                    type={type}
                    title={title}
                    description={description}
                    image={image}
                    price={price}
                    duration={duration}
                    location={location}
                    included={included}
                    excluded={excluded}
                    itinerary={itinerary}
                    subItems={subItems}
                    locale={locale}
                    gallery={gallery}
                    id=""
                />
            </div>
            <div className="hidden md:block min-h-screen bg-neutral-100 font-poppins text-neutral-dark pb-20">
                {/* Full Screen Hero */}
                <section className="relative h-screen w-full">
                    <div className="absolute inset-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6">
                        <div className="container mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
                                    <ArrowLeft className="w-4 h-4" /> Back to Services
                                </Link>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white font-poppins mb-6 leading-[1.1]">{title}</h1>

                                <div className="flex flex-wrap items-center gap-6 text-white/90">
                                    {location && (
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span>{location}</span>
                                        </div>
                                    )}
                                    {duration && (
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span>{renderDuration(duration)}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span>4.9 (120 reviews)</span>
                                    </div>
                                </div>
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

                {/* Main Content */}
                <div className="container mx-auto px-6 md:px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Overview Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl shadow-sm p-8 md:p-10"
                            >
                                <h2 className="text-2xl md:text-3xl font-medium text-neutral-dark mb-6">Overview</h2>
                                <p className="text-neutral-600 leading-relaxed text-lg whitespace-pre-line">
                                    {description}
                                </p>
                            </motion.div>

                            {/* Creative Itinerary */}
                            {itinerary && itinerary.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-3xl shadow-sm overflow-hidden"
                                >
                                    <div className="p-8 md:p-10 pb-0">
                                        <h2 className="text-2xl md:text-3xl font-medium text-neutral-dark mb-2">Your Journey</h2>
                                        <p className="text-neutral-500 mb-8">Day by day breakdown of your adventure</p>
                                    </div>

                                    {/* Day Tabs */}
                                    <div className="px-8 md:px-10">
                                        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                                            {itinerary.map((day, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActiveDay(idx)}
                                                    className={`flex-shrink-0 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeDay === idx
                                                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                                        }`}
                                                >
                                                    Day {day.day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Active Day Content */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeDay}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-8 md:p-10"
                                        >
                                            <div className="flex items-start gap-6">
                                                {/* Day Number Visual */}
                                                <div className="hidden md:flex flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 items-center justify-center">
                                                    <span className="text-3xl font-bold text-white">{itinerary[activeDay].day}</span>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-grow">
                                                    <h3 className="text-xl md:text-2xl font-medium text-neutral-dark mb-3">
                                                        {itinerary[activeDay].title}
                                                    </h3>
                                                    <p className="text-neutral-600 leading-relaxed">
                                                        {itinerary[activeDay].description}
                                                    </p>

                                                    {/* Progress Indicator */}
                                                    <div className="mt-6 flex items-center gap-2">
                                                        {itinerary.map((_, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeDay
                                                                    ? 'bg-primary w-8'
                                                                    : idx < activeDay
                                                                        ? 'bg-primary/40 w-4'
                                                                        : 'bg-neutral-200 w-4'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.div>
                            )}

                            {/* Creative Gallery */}
                            {gallery && gallery.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-medium text-neutral-dark">Gallery</h2>
                                            <p className="text-neutral-500">{gallery.length} photos from this experience</p>
                                        </div>
                                    </div>

                                    {/* Bento-style Gallery */}
                                    <div className="grid grid-cols-4 gap-3 md:gap-4">
                                        {gallery.slice(0, 5).map((imgSrc, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                onClick={() => openLightbox(idx)}
                                                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${idx === 0 ? 'col-span-2 row-span-2 aspect-square' : 'col-span-1 aspect-square'
                                                    }`}
                                            >
                                                <Image
                                                    src={imgSrc}
                                                    alt={`Gallery ${idx + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>

                                                {/* Show count on last visible image if more exist */}
                                                {idx === 4 && gallery.length > 5 && (
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                        <span className="text-white text-2xl font-bold">+{gallery.length - 5}</span>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Sub Items - Available Options */}
                            {subItems.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-3xl shadow-sm p-8 md:p-10"
                                >
                                    <h2 className="text-2xl md:text-3xl font-medium text-neutral-dark mb-6">Available Options</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {subItems.map((item) => (
                                            <div key={item.id} className="border border-neutral-200 rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all cursor-pointer group bg-neutral-50">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium text-lg capitalize group-hover:text-primary transition-colors">{item.location || item.type}</h3>
                                                    <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">
                                                        €{item.price}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-neutral-500">Experience the thrill in {item.location}.</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Inclusions / Exclusions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-3xl shadow-sm p-8"
                                >
                                    <h3 className="font-medium text-xl mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-5 h-5 text-green-600" />
                                        </span>
                                        What's Included
                                    </h3>
                                    <ul className="space-y-4">
                                        {(included.length > 0 ? included : ['Hotel Pickup & Drop-off', 'Professional Guide', 'Transport A/C']).map((inc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-neutral-600">
                                                <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                <span>{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white rounded-3xl shadow-sm p-8"
                                >
                                    <h3 className="font-medium text-xl mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                            <X className="w-5 h-5 text-red-500" />
                                        </span>
                                        Not Included
                                    </h3>
                                    <ul className="space-y-4">
                                        {(excluded.length > 0 ? excluded : ['Personal Expenses', 'Tips']).map((exc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-neutral-600">
                                                <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                                <span>{exc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Custom Plan CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
                            >
                                <div>
                                    <h4 className="font-medium text-2xl mb-2 text-white">Need a Custom Plan?</h4>
                                    <p className="text-white/70">We can customize this experience for large groups or special events.</p>
                                </div>
                                <Link
                                    href={`/${locale}/contact`}
                                    className="px-8 py-4 rounded-full bg-white text-neutral-dark font-medium hover:bg-neutral-100 transition-colors whitespace-nowrap"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>

                        </div>

                        {/* Right Column: Booking */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <BookingForm
                                    serviceName={title}
                                    serviceType={type}
                                    basePrice={price}
                                    variants={subItems.map(item => ({
                                        id: item.id,
                                        name: item.type,
                                        location: item.location,
                                        price: item.price,
                                        duration: item.duration
                                    }))}
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {lightboxOpen && gallery.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                            onClick={() => setLightboxOpen(false)}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setLightboxOpen(false)}
                                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 bg-white/10 rounded-full z-50"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Navigation */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 md:left-8 text-white/80 hover:text-white p-3 bg-white/10 rounded-full z-50"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 md:right-8 text-white/80 hover:text-white p-3 bg-white/10 rounded-full z-50"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image */}
                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative max-w-5xl w-full h-[70vh] rounded-2xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={gallery[lightboxIndex]}
                                    alt={`Gallery ${lightboxIndex + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Counter */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-white/10 px-4 py-2 rounded-full">
                                {lightboxIndex + 1} / {gallery.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
