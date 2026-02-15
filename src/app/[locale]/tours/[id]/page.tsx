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

export default function TourDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const data = getSiteData(locale);
    const item = data.tours.find(t => t.id === id);

    if (!item) {
        return notFound();
    }

    // formatting price
    let price: number | string = 0;
    if (item.pricing && item.pricing[0]) {
        const p = item.pricing[0] as any;
        price = p.totalPrice || p.pricePerPerson || 0;
    }

    // Static descriptions if not in DB (siteData seems sparse)
    const description = locale === 'fr'
        ? `Découvrez la magie de ${item.name}. Ce circuit organisé vous emmène à travers les lieux les plus emblématiques, offrant un mélange d'histoire, de culture et de paysages à couper le souffle. Nos guides professionnels veillent à ce que vous ne manquiez aucun joyau caché.`
        : `Experience the magic of ${item.name}. This curated tour takes you through the most iconic locations, offering a blend of history, culture, and breathtaking scenery. Our professional guides ensure you don't miss any hidden gems.`;

    const fallbackIncludes = locale === 'fr'
        ? ['Prise en charge à l\'hôtel', 'Transport Climatisé', 'Guide Local']
        : ['Hotel Pickup', 'Transport A/C', 'Local Guide'];

    const fallbackExcludes = locale === 'fr'
        ? ['Déjeuner', 'Frais d\'entrée', 'Pourboires']
        : ['Lunch', 'Entrance Fees', 'Tips'];

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="tour"
            title={item.name}
            description={description}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={price}
            duration={item.duration}
            location="Marrakech Region"
            included={item.includes || fallbackIncludes}
            excluded={item.excludes || fallbackExcludes}
            itinerary={item.itinerary}
            subItems={[]}
            gallery={item.gallery || []}
        />
    );
}
