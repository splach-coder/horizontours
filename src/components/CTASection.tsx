'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteInfo } from '@/data/siteInfo';

// CTA - Modern split design with beige background
export const CTASection = ({ locale, dict }: { locale: string, dict: any }) => {
    const t = useTranslations('CTASection');

    return (
        <section className="py-12 bg-neutral-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem]"
                    style={{ backgroundColor: '#F5F0E8' }}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                    </div>

                    {/* Content Grid */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">

                        {/* Left: Text Content */}
                        <div className="flex flex-col justify-center">
                            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
                                {t('readyToExplore')}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-poppins mb-6 leading-tight">
                                {t('heading1')} <br />
                                <span className="text-primary">{t('heading2')}</span> {t('heading2Highlight')}
                            </h2>
                            <p className="text-neutral-600 text-lg mb-8 max-w-md leading-relaxed">
                                {t('description')}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${locale}/contact`}
                                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors group"
                                >
                                    {t('bookYourTrip')}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href={`/${locale}/tours`}
                                    className="inline-flex items-center justify-center gap-2 bg-neutral-dark text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors"
                                >
                                    {t('browseTours')}
                                </Link>
                            </div>
                        </div>

                        {/* Right: Contact Cards */}
                        <div className="flex flex-col justify-center gap-4">
                            {/* WhatsApp Card */}
                            <a
                                href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\+/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white hover:bg-white/80 border border-neutral-200 rounded-2xl p-4 md:p-6 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                            >
                                <div className="min-w-10 min-h-10 md:min-w-14 md:min-h-14 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                                </div>
                                <div>
                                    <span className="block text-neutral-dark font-medium text-md md:text-lg">{t('whatsappUs')}</span>
                                    <span className="text-neutral-500 text-xs md:text-sm">{siteInfo.contact.whatsapp}</span>
                                </div>
                                <ArrowRight className="min-w-5 min-h-5 md:min-w-6 md:min-h-6 text-neutral-400 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </a>

                            {/* Email Card */}
                            <a
                                href={`mailto:${siteInfo.contact.email}`}
                                className="group bg-white hover:bg-white/80 border border-neutral-200 rounded-2xl p-4 md:p-6 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                            >
                                <div className="min-w-10 min-h-10 md:min-w-14 md:min-h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </div>
                                <div>
                                    <span className="block text-neutral-dark font-medium text-md md:text-lg">{t('emailUs')}</span>
                                    <span className="text-neutral-500 text-xs md:text-sm">{siteInfo.contact.email}</span>
                                </div>
                                <ArrowRight className="min-w-5 min-h-5 md:min-w-6 md:min-h-6 text-neutral-400 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </a>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div className="text-center">
                                    <span className="block text-2xl md:text-3xl font-bold text-neutral-dark">500+</span>
                                    <span className="text-neutral-500 text-xs uppercase tracking-wider">{t('travelers')}</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-2xl md:text-3xl font-bold text-neutral-dark">10+</span>
                                    <span className="text-neutral-500 text-xs uppercase tracking-wider">{t('years')}</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-2xl md:text-3xl font-bold text-neutral-dark">4.9</span>
                                    <span className="text-neutral-500 text-xs uppercase tracking-wider">{t('rating')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
