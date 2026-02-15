'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Calendar, Users, Search, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';

interface HeroSearchProps {
    lang: string;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ lang }) => {
    const t = useTranslations('HeroSearch');
    const router = useRouter();
    const containerRef = useRef(null);
    const datePickerRef = useRef<HTMLDivElement>(null);
    const travelersPickerRef = useRef<HTMLDivElement>(null);

    // Use Booking Context
    const { travelers, setTravelers, selectedDate, setSelectedDate } = useBooking();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTravelersPicker, setShowTravelersPicker] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setShowDatePicker(false);
            }
            if (travelersPickerRef.current && !travelersPickerRef.current.contains(event.target as Node)) {
                setShowTravelersPicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (selectedDate) params.set('date', selectedDate);
        if (travelers) params.set('travelers', travelers.toString());
        router.push(`/${lang}/tours?${params.toString()}`);
    };

    // Format date for display
    const formatDate = (dateStr: string) => {
        if (!dateStr) return t('pickDate');
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
        setShowTravelersPicker(false);
    };

    const toggleTravelersPicker = () => {
        setShowTravelersPicker(!showTravelersPicker);
        setShowDatePicker(false);
    };

    return (
        <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-dark flex flex-col items-center justify-center">
            {/* Background Image */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-20" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/hero-image.jpg)' }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 font-poppins tracking-tight leading-[1.1]">
                        {t('title1')} <br />
                        <span className="text-white/90">{t('title2')}</span>
                    </h1>
                    <p className="text-white/70 text-base md:text-lg font-light mb-10 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Booking Widget - Desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 hidden md:flex items-center justify-between shadow-xl"
                >
                    {/* Date Picker */}
                    <div ref={datePickerRef} className="flex-1 px-4 border-r border-white/10 relative">
                        <button
                            type="button"
                            onClick={toggleDatePicker}
                            className="w-full flex items-center gap-2 cursor-pointer group"
                        >
                            <Calendar className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                            <span className="text-white text-xs font-medium">{formatDate(selectedDate)}</span>
                        </button>

                        {/* Date Dropdown */}
                        <AnimatePresence>
                            {showDatePicker && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl p-4 z-50 min-w-[240px]"
                                >
                                    <label className="block text-neutral-dark text-xs font-medium mb-2">{t('selectTravelDate')}</label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => { setSelectedDate(e.target.value); setShowDatePicker(false); }}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full p-3 border border-neutral-200 rounded-xl text-neutral-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Travelers Picker */}
                    <div ref={travelersPickerRef} className="flex-1 px-4 relative">
                        <button
                            type="button"
                            onClick={toggleTravelersPicker}
                            className="w-full flex items-center gap-2 cursor-pointer group"
                        >
                            <Users className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                            <span className="text-white text-xs font-medium">{travelers} {travelers === 1 ? t('traveler') : t('travelers')}</span>
                        </button>

                        {/* Travelers Dropdown */}
                        <AnimatePresence>
                            {showTravelersPicker && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl p-4 z-50 min-w-[200px]"
                                >
                                    <label className="block text-neutral-dark text-xs font-medium mb-3">{t('numberOfTravelers')}</label>
                                    <div className="flex items-center justify-between gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setTravelers(Math.max(1, travelers - 1))}
                                            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-dark hover:bg-neutral-100 transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-2xl font-semibold text-neutral-dark">{travelers}</span>
                                        <button
                                            type="button"
                                            onClick={() => setTravelers(Math.min(20, travelers + 1))}
                                            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-dark hover:bg-neutral-100 transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Search Button */}
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="bg-white text-neutral-dark hover:bg-neutral-100 transition-colors px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-md"
                    >
                        <Search className="w-4 h-4" />
                        <span>{t('search')}</span>
                    </button>
                </motion.div>

                {/* Mobile Booking Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="md:hidden w-full max-w-sm space-y-3"
                >
                    {/* Date Input */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-white/70" />
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="flex-1 bg-transparent text-white text-sm focus:outline-none [color-scheme:dark]"
                            placeholder="Pick a date"
                        />
                    </div>

                    {/* Travelers Input */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-white/70" />
                            <span className="text-white text-sm">{travelers} {travelers === 1 ? t('traveler') : t('travelers')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setTravelers(Math.min(20, travelers + 1))}
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="w-full bg-white text-neutral-dark hover:bg-neutral-100 transition-colors px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg"
                    >
                        <Search className="w-5 h-5" />
                        <span>{t('findMyTrip')}</span>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};
