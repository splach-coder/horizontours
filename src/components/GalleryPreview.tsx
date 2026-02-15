'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface GalleryMoment {
    id: string;
    image: string;
    name: string;
    quote: string;
}

const galleryMoments: GalleryMoment[] = [
    {
        id: '1',
        image: '/images/marrakech/marrakech1.jpg',
        name: 'Maria Carolina',
        quote: 'Balloon ride was magical!'
    },
    {
        id: '2',
        image: '/images/merzouga/merzouga1.jpg',
        name: 'Alessia Marika',
        quote: 'The desert was incredible.'
    },
    {
        id: '3',
        image: '/images/essaouira/rigel-ibisQEDxODo-unsplash.jpg',
        name: 'Aisha Davina',
        quote: 'Every sunset felt like home.'
    },
    {
        id: '4',
        image: '/images/fes/hazy-momo-YSTtLgsvRa8-unsplash.jpg',
        name: 'Dino Kenji',
        quote: 'Everything was perfect.'
    },
    {
        id: '5',
        image: '/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg',
        name: 'Ben Philips',
        quote: 'Best time of my life!'
    },
    {
        id: '6',
        image: '/images/ouzoud/sergio-teixeira-svdabxVg7-4-unsplash.jpg',
        name: 'Sophie Laurent',
        quote: 'Unforgettable memories.'
    },
    {
        id: '7',
        image: '/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg',
        name: 'James Wilson',
        quote: 'Highly recommended!'
    }
];

// Random rotations for vintage feel
const rotations = [-8, 5, -3, 7, -5, 4, -6];
// Fixed tape rotations to avoid hydration mismatch
const tapeRotations = [-1, 2, -2, 1, 0, -1, 2];

interface GalleryPreviewProps {
    locale: string;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ locale }) => {
    const t = useTranslations('GalleryPreview');

    return (
        <section className="py-12 bg-neutral-100 overflow-hidden">
            <div className="container mx-auto px-6 md:px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neutral-500 text-sm mb-4 block">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-poppins leading-tight">
                        {t('title')}<br />
                        <span className="italic">{t('titleItalic')}</span>
                    </h2>
                </motion.div>
            </div>

            {/* Polaroid Gallery - Single row, overlapping vintage style */}
            <div className="relative overflow-x-auto pb-8 scrollbar-hide">
                <div className="flex justify-center items-center flex-nowrap px-8 py-4">
                    {galleryMoments.map((moment, index) => (
                        <motion.div
                            key={moment.id}
                            initial={{ opacity: 0, scale: 0.8, rotate: rotations[index] }}
                            whileInView={{ opacity: 1, scale: 1, rotate: rotations[index] }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 50,
                                transition: { duration: 0.3 }
                            }}
                            className="relative -mx-3 -my-2 cursor-pointer"
                            style={{
                                zIndex: index,
                            }}
                        >
                            {/* Polaroid Card - Old Camera Style */}
                            <div className="bg-[#f8f6f1] p-2 pb-12 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                                style={{
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15), inset 0 0 30px rgba(0,0,0,0.02)',
                                }}
                            >
                                {/* Image with vintage filter */}
                                <div className="relative w-[180px] h-[220px] overflow-hidden">
                                    <Image
                                        src={moment.image}
                                        alt={moment.name}
                                        fill
                                        className="object-cover"
                                        style={{
                                            filter: 'sepia(10%) contrast(1.05) saturate(0.95)',
                                        }}
                                    />
                                    {/* Vintage overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/10 via-transparent to-black/10" />
                                    {/* Light leak effect */}
                                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-200/20 to-transparent" />
                                </div>

                                {/* Handwritten-style text */}
                                <div className="absolute bottom-2 left-2 right-2 text-center">
                                    <p className="text-neutral-600 text-sm font-medium"
                                        style={{ fontFamily: 'Georgia, serif' }}>
                                        {moment.name}
                                    </p>
                                </div>
                            </div>

                            {/* Tape effect */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-amber-100/80 opacity-60"
                                style={{
                                    transform: `translateX(-50%) rotate(${tapeRotations[index]}deg)`,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-16"
            >
                <Link
                    href={`/${locale}/gallery`}
                    className="inline-flex items-center gap-2 bg-neutral-dark text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-lg"
                >
                    {t('seeMore')}
                </Link>
            </motion.div>
        </section>
    );
};
