'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    ArrowLeft, Share2, Heart, Star, Clock, MapPin,
    Calendar, ChevronRight, Check, X, Info
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BookingForm } from '@/components/BookingForm';
import { ServiceDetailProps } from './ServiceDetailContent';

export const ServiceDetailMobile = ({
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
    const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'details'>('overview');
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Combine main image with gallery for the slider
    const allImages = [image, ...gallery].filter(Boolean);

    // Scroll handling for sticky tabs and header
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ container: containerRef });

    const headerOpacity = useTransform(scrollY, [0, 200], [0, 1]);
    const imageScale = useTransform(scrollY, [0, 200], [1, 1.1]);
    const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);

    const renderDuration = (d: string) => d?.replace('_', ' ') || 'Flexible';

    const handleShare = async () => {
        const shareData = {
            title: title,
            text: description,
            url: window.location.href,
        };

        // Try Native Share
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share(shareData);
                return;
            } catch (error) {
                console.log('Error sharing:', error);
                // Continue to clipboard fallback if share failed/cancelled
            }
        }

        // Fallback: Clipboard
        const copyToClipboard = async (text: string) => {
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                    alert('Link copied to clipboard!');
                } else {
                    // Legacy fallback for non-secure contexts (http://locahost on phone)
                    const textArea = document.createElement("textarea");
                    textArea.value = text;
                    textArea.style.position = "fixed";
                    textArea.style.left = "-9999px";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        alert('Link copied to clipboard!');
                    } catch (err) {
                        console.error('Fallback: Oops, unable to copy', err);
                        alert('Failed to copy link.');
                    }
                    document.body.removeChild(textArea);
                }
            } catch (err) {
                console.error('Failed to copy keys', err);
                alert('Failed to copy link.');
            }
        };

        copyToClipboard(window.location.href);
    };

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] overflow-y-auto bg-neutral-50 pb-24 hide-scrollbar">

            {/* Sticky Header */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-between items-center"
                style={{ backgroundColor: `rgba(255, 255, 255, ${headerOpacity.get()})` }}
            >
                {/* Background for visibility when scrolled */}
                <motion.div
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm border-b border-neutral-100 shadow-sm"
                    style={{ opacity: headerOpacity }}
                />

                <Link
                    href={`/${locale}/services`}
                    className="relative z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
                >
                    <ArrowLeft className="w-5 h-5 text-neutral-800" />
                </Link>

                <div className="relative z-10 flex gap-3">
                    <button
                        onClick={handleShare}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
                    >
                        <Share2 className="w-5 h-5 text-neutral-800" />
                    </button>
                    {/* Heart button removed */}
                </div>
            </motion.div>

            {/* Hero Image Slider */}
            <div className="relative h-[45vh] w-full overflow-hidden">
                <motion.div
                    className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                    style={{ scale: imageScale, opacity: imageOpacity }}
                    onScroll={(e) => {
                        const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
                        const width = (e.target as HTMLDivElement).offsetWidth;
                        const index = Math.round(scrollLeft / width);
                        setCurrentImageIndex(index);
                    }}
                    ref={sliderRef}
                >
                    {allImages.map((img, idx) => (
                        <div key={idx} className="relative w-full h-full flex-shrink-0 snap-center">
                            <Image
                                src={img}
                                alt={`${title} - ${idx + 1}`}
                                fill
                                className="object-cover"
                                priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    ))}
                </motion.div>

                {/* Image Dots */}
                {allImages.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {allImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentImageIndex(idx);
                                    if (sliderRef.current) {
                                        sliderRef.current.scrollTo({
                                            left: idx * sliderRef.current.offsetWidth,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-6 left-4 z-10">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {type}
                    </span>
                </div>
            </div>

            {/* Content Sheet */}
            <div className="relative -mt-4 bg-neutral-50 rounded-t-3xl px-5 pt-8 pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] min-h-[60vh]">

                {/* Drag Handle */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-neutral-200 rounded-full" />

                {/* Header Info */}
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <h1 className="text-2xl font-bold text-neutral-dark font-poppins leading-tight max-w-[80%]">
                            {title}
                        </h1>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                <Star className="w-4 h-4 fill-yellow-500" />
                                <span>4.9</span>
                            </div>
                            <span className="text-xs text-neutral-400">(120)</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4 overflow-x-auto hide-scrollbar pb-2">
                        {location && (
                            <div className="flex items-center gap-1.5 whitespace-nowrap bg-white px-3 py-1.5 rounded-full border border-neutral-100 shadow-sm">
                                <MapPin className="w-3.5 h-3.5 text-primary" />
                                {location}
                            </div>
                        )}
                        {duration && (
                            <div className="flex items-center gap-1.5 whitespace-nowrap bg-white px-3 py-1.5 rounded-full border border-neutral-100 shadow-sm">
                                <Clock className="w-3.5 h-3.5 text-primary" />
                                {renderDuration(duration)}
                            </div>
                        )}
                    </div>
                </div>

                {/* Tabs */}
                <div className="sticky top-16 z-40 bg-neutral-50 pb-4 border-b border-neutral-100 mb-6 flex gap-4 overflow-x-auto hide-scrollbar">
                    {['overview', 'itinerary', 'details'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`pb-2 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-primary' : 'text-neutral-400'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTabMobile"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
                                <h3 className="font-bold text-neutral-dark mb-3">About this experience</h3>
                                <p className={`text-neutral-600 text-sm leading-relaxed ${isDescriptionExpanded ? '' : 'line-clamp-3'}`}>
                                    {description}
                                </p>
                                <button
                                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                                    className="text-primary text-sm font-medium mt-2"
                                >
                                    {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                                </button>
                            </div>

                            {/* Highlights / Quick Stats Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm flex flex-col items-center text-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs text-neutral-400 uppercase font-bold tracking-wider">Availability</span>
                                    <span className="text-sm font-medium text-neutral-dark">Daily</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm flex flex-col items-center text-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                                        <Info className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs text-neutral-400 uppercase font-bold tracking-wider">Guide</span>
                                    <span className="text-sm font-medium text-neutral-dark">English / French</span>
                                </div>
                            </div>

                            {/* Sub Items */}
                            {subItems.length > 0 && (
                                <div>
                                    <h3 className="font-bold text-neutral-dark mb-3">Options</h3>
                                    <div className="space-y-3">
                                        {subItems.map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm flex justify-between items-center group active:scale-[0.98] transition-transform">
                                                <div>
                                                    <span className="block font-medium text-neutral-dark">{item.location || item.type}</span>
                                                    <span className="text-xs text-neutral-500">{renderDuration(item.duration || duration || '')}</span>
                                                </div>
                                                <div className="bg-neutral-50 px-3 py-1.5 rounded-lg text-primary font-bold text-sm">
                                                    €{item.price}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {activeTab === 'itinerary' && (
                        <motion.div
                            key="itinerary"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            {itinerary.length > 0 ? (
                                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-0 before:w-0.5 before:bg-neutral-200">
                                    {itinerary.map((day, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-neutral-50 z-10" />
                                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
                                                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Day {day.day}</span>
                                                <h3 className="font-bold text-neutral-dark mb-2">{day.title}</h3>
                                                <p className="text-neutral-600 text-sm leading-relaxed">{day.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10 text-neutral-500">
                                    No detailed itinerary available.
                                </div>
                            )}
                        </motion.div>
                    )}

                    {activeTab === 'details' && (
                        <motion.div
                            key="details"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
                                <h3 className="font-bold text-neutral-dark mb-4 text-green-600 flex items-center gap-2">
                                    <Check className="w-5 h-5" /> Included
                                </h3>
                                <ul className="space-y-3">
                                    {included.map((inc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                            {inc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
                                <h3 className="font-bold text-neutral-dark mb-4 text-red-500 flex items-center gap-2">
                                    <X className="w-5 h-5" /> Not Included
                                </h3>
                                <ul className="space-y-3">
                                    {excluded.map((exc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                            {exc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer Spacer */}
                <div className="h-24" />
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 p-4 pb-6 flex items-center gap-4 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <div className="flex-1">
                    <span className="text-neutral-400 text-xs uppercase font-bold tracking-wider">Total Price</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-neutral-dark">€{price}</span>
                        <span className="text-sm text-neutral-500 font-medium">/ person</span>
                    </div>
                </div>
                <button
                    onClick={() => setIsBookingOpen(true)}
                    className="flex-1 bg-primary text-white font-medium text-lg py-3 rounded-full hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/30"
                >
                    Book Now
                </button>
            </div>

            {/* Booking Sheet/Modal */}
            <AnimatePresence>
                {isBookingOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsBookingOpen(false)}
                            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[90vh] overflow-y-auto"
                        >
                            <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-neutral-100 flex justify-between items-center rounded-t-3xl">
                                <h2 className="text-xl font-bold text-neutral-dark">Select Dates</h2>
                                <button
                                    onClick={() => setIsBookingOpen(false)}
                                    className="p-2 bg-neutral-100 rounded-full text-neutral-500 hover:bg-neutral-200"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6 pb-12">
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
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
