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

export default function PackageDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const data = getSiteData(locale);
    const item = (data.packages as any[]).find(p => p.id === id);

    if (!item) {
        return notFound();
    }

    const description = locale === 'fr'
        ? `L'expérience ultime : ${item.name}. Ce forfait combine nos meilleures activités en une aventure fluide. Profitez de ${item.included?.join(', ')} en une seule fois.`
        : `The ultimate experience: ${item.name}. This package combines our best activities into a seamless adventure. Enjoy ${item.included?.join(', ')} all in one go.`;

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="package"
            title={item.name}
            description={description}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={item.price}
            duration="4_hours"
            location={item.location}
            included={item.included || []}
            excluded={[]}
            subItems={[]}
            gallery={item.gallery || []}
        />
    );
}
