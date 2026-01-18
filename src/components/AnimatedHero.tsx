'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface AnimatedHeroProps {
    lang: string;
}

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ lang }) => {
    const t = useTranslations('HomePage');
    const containerRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set slow motion playback speed (0.5 = half speed)
        video.playbackRate = 0.5;

        // Play video only after it's fully loaded
        const handleCanPlayThrough = () => {
            setIsVideoLoaded(true);
            video.play().then(() => {
                setIsVideoPlaying(true);
            }).catch((error) => {
                console.error('Video autoplay prevented:', error);
            });
        };

        const videoEl = video;
        videoEl.addEventListener('canplaythrough', handleCanPlayThrough);

        // Force load
        videoEl.load();

        return () => {
            videoEl.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-dark flex flex-col justify-center">
            {/* Video Background with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Video Element with Zoom Animation */}
                <motion.video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isVideoPlaying ? 1 : 1.1 }}
                    transition={{ duration: 8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    aria-label="Background video showcasing Marrakech, Morocco"
                    style={{
                        opacity: isVideoLoaded ? 1 : 0,
                        zIndex: isVideoLoaded ? 10 : 0
                    }}
                >
                    <source src="/videos/159727-819369000.mp4" type="video/mp4" />
                </motion.video>

                {/* Fallback image while video loads */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2070)',
                        opacity: isVideoLoaded ? 0 : 1,
                        zIndex: 5
                    }}
                />

                {/* Overlays - Above video */}
                <div className="absolute inset-0 bg-black/30 z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20" />
            </motion.div>

            {/* Central Content */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
                        {t('heroTag')}
                    </span>
                </motion.div>

                <motion.h1
                    className="max-w-4xl mx-auto text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 font-poppins tracking-tight leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Horizon <br /> <span className="font-serif italic bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">Tours</span>
                </motion.h1>

                <motion.p
                    className="max-w-xl text-white/70 text-lg font-light leading-relaxed mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    {t('heroFooter')}
                </motion.p>
            </div>

            {/* Bottom Footer Info */}

        </section>
    );
};
