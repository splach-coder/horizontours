'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Shield, Star, Heart, ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AnimatedCounter = ({ value, suffix = '', decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-medium font-poppins text-primary inline-block">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

export const AboutPageContent = () => {
    const t = useTranslations('AboutPage');
    const locale = useLocale();

    return (
        <div className="min-h-screen bg-neutral-100">
            {/* Full Page Hero */}
            <section className="relative h-screen w-full">
                <div className="absolute inset-0">
                    <Image
                        src="/images/fes/hazy-momo-YSTtLgsvRa8-unsplash.jpg"
                        alt="About Horizon Tours"
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
                                About <span className="italic">Us</span>
                            </h1>
                            <p className="text-white/80 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                                {t('subtitle')}
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

            {/* Story Section */}
            <section className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
                                {t('storyTag')}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-poppins mb-8 leading-tight">
                                {t('storyTitle')}
                            </h2>
                            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                                <p>{t('storyText')}</p>
                                <p>{t('storyLocal')}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/images/marrakech/marrakech6.jpg"
                                alt="Our Story"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-neutral-50 rounded-2xl p-8 text-center"
                        >
                            <AnimatedCounter value={98} suffix="%" />
                            <p className="text-neutral-500 mt-3 text-lg">{t('statsRecommend')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-neutral-50 rounded-2xl p-8 text-center"
                        >
                            <AnimatedCounter value={100} suffix="+" />
                            <p className="text-neutral-500 mt-3 text-lg">{t('statsItineraries')}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-neutral-50 rounded-2xl p-8 text-center"
                        >
                            <AnimatedCounter value={4.9} suffix="/5" decimals={1} />
                            <p className="text-neutral-500 mt-3 text-lg">{t('statsSatisfaction')}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6 md:px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
                            {t('whyChooseTag')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-neutral-dark font-poppins">
                            {t('valuesTitlePart1')} <span className="italic text-primary">{t('valuesTitlePart2')}</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Value 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                                <Heart className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-medium text-neutral-dark font-poppins mb-3">{t('value1Title')}</h3>
                            <p className="text-neutral-500 leading-relaxed">{t('value1Text')}</p>
                        </motion.div>

                        {/* Value 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                                <Star className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-medium text-neutral-dark font-poppins mb-3">{t('value2Title')}</h3>
                            <p className="text-neutral-500 leading-relaxed">{t('missionText')}</p>
                        </motion.div>

                        {/* Value 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                                <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-medium text-neutral-dark font-poppins mb-3">{t('value3Title')}</h3>
                            <p className="text-neutral-500 leading-relaxed">{t('value3Text')}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="bg-neutral-dark rounded-3xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-medium text-white font-poppins mb-4">
                            Ready to start your journey?
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                            Let us create an unforgettable experience tailored just for you.
                        </p>
                        <Link
                            href={`/${locale}/contact`}
                            className="inline-flex items-center gap-2 bg-white text-neutral-dark px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors group"
                        >
                            Get in Touch
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
