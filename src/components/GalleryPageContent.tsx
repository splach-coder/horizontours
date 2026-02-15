'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { getSiteData } from '@/data/getSiteData';
import { useTranslations } from 'next-intl';

export const GalleryPageContent = ({ locale }: { locale: string }) => {
    const t = useTranslations('GalleryPage');
    const data = getSiteData(locale);

    // Dynamically generate gallery items from siteData tours
    const allTourImages = data.tours.reduce((acc: any[], tour) => {
        acc.push({
            id: `${tour.id}-main`,
            src: tour.image,
            category: 'Tour',
            title: tour.name,
            size: acc.length % 3 === 0 ? 'large' : acc.length % 3 === 1 ? 'medium' : 'small'
        });

        if (tour.gallery && tour.gallery.length > 0) {
            tour.gallery.forEach((img, idx) => {
                acc.push({
                    id: `${tour.id}-gal-${idx}`,
                    src: img,
                    category: 'Experience',
                    title: `${tour.name} View`,
                    size: (acc.length + idx) % 3 === 0 ? 'medium' : (acc.length + idx) % 3 === 1 ? 'small' : 'large'
                });
            });
        }
        return acc;
    }, []);

    const galleryImages = allTourImages.slice(0, 24);
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <div className="min-h-screen bg-neutral-100">
            {/* Full Page Hero */}
            <section className="relative h-screen w-full">
                <div className="absolute inset-0">
                    <Image
                        src="/images/ouzoud/sergio-teixeira-svdabxVg7-4-unsplash.jpg"
                        alt="Morocco Gallery"
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
                                {t('title')} <span className="italic">Moments</span>
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

            {/* Gallery Grid */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-medium text-neutral-dark font-poppins mb-2">
                            Our Gallery
                        </h2>
                        <p className="text-neutral-500">{galleryImages.length} photos from our adventures</p>
                    </div>

                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="break-inside-avoid"
                            >
                                <div
                                    className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className={`relative w-full ${img.size === 'large' ? 'h-[400px]' :
                                        img.size === 'medium' ? 'h-[300px]' : 'h-[220px]'
                                        }`}>
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                                        {/* Zoom Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                                                <ZoomIn className="w-6 h-6" />
                                            </div>
                                        </div>

                                        {/* Info Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="text-white font-medium text-lg line-clamp-1">{img.title}</h3>
                                            <p className="text-white/70 text-sm capitalize">{img.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[70vh]">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain bg-neutral-900"
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-center">
                                <h2 className="text-xl md:text-2xl font-medium text-white mb-1">{selectedImage.title}</h2>
                                <p className="text-white/70 text-sm capitalize">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
