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

export default function TransportDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);

    const data = getSiteData(locale);
    const item = data.transport.find(t => t.id === id);

    if (!item) {
        return notFound();
    }

    const description = locale === 'fr'
        ? `Profitez d'un voyage confortable et sûr avec notre ${item.name}. Nos chauffeurs professionnels assurent ponctualité et confort pour tous vos besoins de déplacement à Marrakech et ses environs.`
        : `Enjoy a comfortable and safe journey with our ${item.name}. Our professional drivers ensure punctuality and comfort for all your travel needs in and around Marrakech.`;

    const inclusions = locale === 'fr'
        ? ['Chauffeur Professionnel', 'Véhicule Climatisé', 'Carburant', 'Assurance']
        : ['Professional Driver', 'A/C Vehicle', 'Fuel', 'Insurance'];

    const exclusions = locale === 'fr'
        ? ['Pourboires', 'Arrêts Supplémentaires']
        : ['Tips', 'Extra Stops'];

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="transport"
            title={item.name}
            description={description}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={item.price || 0}
            duration={locale === 'fr' ? "Flexible" : "Flexible"}
            location="Marrakech"
            included={inclusions}
            excluded={exclusions}
            subItems={[]}
            gallery={[]}
        />
    );
}
