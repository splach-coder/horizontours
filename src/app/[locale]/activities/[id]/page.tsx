'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getSiteData } from '@/data/getSiteData';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';

interface PageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export default function ActivityDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const data = getSiteData(locale);
    // Logic to find activity or GROUP of activities
    const experiences = data.activities.experiences;

    // 1. Check if ID matches a Type (e.g., "quad")
    const groupedItems = experiences.filter(item => item.type === id);
    const isGroup = groupedItems.length > 0;

    // 2. Check if ID matches a Specific Item
    const specificItem = experiences.find(item => item.id === id);

    if (!isGroup && !specificItem) {
        return notFound();
    }

    const item = isGroup ? groupedItems[0] : specificItem;

    if (!item) return notFound();

    // Prepare data
    // We should probably Map type to a nice name or translations if needed, 
    // but for now we rely on the data or simple capitalization
    const itemType = item.type || 'Activity';
    const displayTitle = (isGroup ? `${itemType} Adventures` : `${itemType} in ${item.location}`).toUpperCase();

    const description = isGroup
        ? (locale === 'fr'
            ? `Profitez au maximum de votre temps à Marrakech avec nos expériences premium de ${itemType}. Que vous préfériez la brise matinale ou la lumière dorée du coucher de soleil, nous avons l'aventure parfaite pour vous. Roulez à travers la palmeraie ou le désert d'Agafay avec des guides professionnels.`
            : `Make the most of your time in Marrakech with our premium ${itemType} experiences. Whether you prefer the morning breeze or the golden sunset light, we have the perfect adventure for you. Ride through the palm groves or the Agafay desert with professional guides.`)
        : (locale === 'fr'
            ? `Profitez d'une expérience palpitante de ${itemType} à ${item.location}. Cette activité offre un moyen unique d'explorer le paysage.`
            : `Enjoy a thrilling ${itemType} experience in ${item.location}. This activity offers a unique way to explore the landscape.`);

    const subItems = isGroup ? groupedItems.map(g => ({
        id: g.id,
        type: g.type,
        location: g.location,
        price: g.price,
        duration: g.duration // Use actual duration from data
    })) : [];

    const price = isGroup
        ? Math.min(...groupedItems.map(i => i.price))
        : (item.price || 0);

    // Gather gallery images from grouped items or specific item
    const galleryImages = isGroup
        ? groupedItems.flatMap(g => g.gallery || []).concat(groupedItems.map(g => g.image).filter(Boolean) as string[])
        : (item.gallery || []);

    const inclusions = locale === 'fr'
        ? ['Guide Professionnel', 'Équipement de Sécurité', 'Pause Thé']
        : ['Professional Guide', 'Safety Equipment', 'Tea Break'];

    const exclusions = locale === 'fr'
        ? ['Pourboires', 'Dépenses Personnelles']
        : ['Tips', 'Personal Expenses'];

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="activity"
            title={displayTitle}
            description={description}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={price}
            duration={item.duration || "2_hours"}
            location={isGroup ? (locale === 'fr' ? 'Divers Emplacements' : 'Various Locations') : item.location}
            subItems={subItems}
            included={inclusions}
            excluded={exclusions}
            gallery={galleryImages}
        />
    );
}
