'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

import { siteConfig } from '@/config/site';

// Google "G" Icon
const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

interface ReviewsSliderProps {
    reviews: Review[];
}

export const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ reviews }) => {
    // Calculate average rating
    const avgRating = reviews.length > 0
        ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
        : '5.0';

    return (
        <section className="py-12 overflow-hidden bg-neutral-100">
            <div className="container mx-auto px-6 md:px-4">

                {/* Google Reviews Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-neutral-200"
                >
                    {/* Left: Google Branding */}
                    <div className="flex items-center gap-4">
                        <GoogleIcon className="w-10 h-10" />
                        <div>
                            <h3 className="text-xl font-medium text-neutral-dark">Google Reviews</h3>
                            <p className="text-sm text-neutral-500">See what travelers say about us</p>
                        </div>
                    </div>

                    {/* Right: Rating Summary */}
                    <div className="flex items-center gap-6">
                        <div className="text-center">
                            <span className="block text-4xl font-bold text-neutral-dark">{avgRating}</span>
                            <div className="flex items-center gap-0.5 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.round(Number(avgRating)) ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="text-left">
                            <span className="block text-2xl font-bold text-neutral-dark">{reviews.length}+</span>
                            <span className="text-sm text-neutral-500">Reviews</span>
                        </div>
                    </div>
                </motion.div>

                {/* Reviews Grid/Slider */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1.5, centeredSlides: true },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full !pb-14"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={review.id} className="h-full py-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 h-full flex flex-col hover:shadow-lg transition-all duration-300"
                            >
                                {/* Header: Author + Google Icon */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* Avatar */}
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm">
                                            {review.author.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-neutral-dark">{review.author}</p>
                                            <p className="text-xs text-neutral-400">{review.date}</p>
                                        </div>
                                    </div>
                                    <GoogleIcon className="w-5 h-5" />
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-0.5 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'}`}
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
                                    {review.comment}
                                </p>

                                {/* Posted on Google */}
                                <div className="mt-4 pt-3 border-t border-neutral-100">
                                    <span className="text-xs text-neutral-400">Posted on Google</span>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Write a Review CTA */}
                <div className="text-center mt-8">
                    <a
                        href={siteConfig.googleReviews}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <GoogleIcon className="w-4 h-4" />
                        Write a review on Google
                    </a>
                </div>
            </div>
        </section>
    );
};
