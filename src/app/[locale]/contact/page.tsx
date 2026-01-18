'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';
import Image from 'next/image';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const locale = useLocale();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-neutral-100">
            {/* Full Page Hero */}
            <section className="relative h-[70vh] min-h-[500px] w-full">
                <div className="absolute inset-0">
                    <Image
                        src="/images/marrakech/marrakech3.jpg"
                        alt="Contact Horizon Tours"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="inline-block text-primary bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                                Get in touch
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white font-poppins mb-6 leading-[1.1]">
                                Contact <span className="italic">Us</span>
                            </h1>
                            <p className="text-white/80 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                                {t('heroSubtitle')}
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

            {/* Contact Section */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Left: Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            {/* WhatsApp Card */}
                            <a
                                href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="flex-grow">
                                    <span className="block text-neutral-dark font-medium text-lg">{t('callWhatsapp')}</span>
                                    <span className="text-neutral-500">{siteInfo.contact.whatsapp}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </a>

                            {/* Email Card */}
                            <a
                                href={`mailto:${siteInfo.contact.email}`}
                                className="group bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <span className="block text-neutral-dark font-medium text-lg">{t('emailUs')}</span>
                                    <span className="text-neutral-500">{siteInfo.contact.email}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </a>

                            {/* Location Card */}
                            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
                                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-neutral-dark" />
                                </div>
                                <div>
                                    <span className="block text-neutral-dark font-medium text-lg">{t('location')}</span>
                                    <span className="text-neutral-500">{siteInfo.contact.address}</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <span className="block text-neutral-dark font-medium mb-4">Follow Us</span>
                                <div className="flex items-center gap-4">
                                    <a
                                        href={siteInfo.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                                <h2 className="text-2xl font-medium text-neutral-dark font-poppins mb-2">
                                    {t('sendInquiry')}
                                </h2>
                                <p className="text-neutral-500 mb-8">{t('fillForm')}</p>

                                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            placeholder={t('fullName')}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            placeholder={t('emailAddr')}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            rows={5}
                                            required
                                            placeholder={t('tripPlans')}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-all group"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        {t('chatWhatsapp')}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
