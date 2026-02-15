export const siteConfig = {
    // Brand
    name: 'Trust Drivers',
    shortName: 'Trust Drivers',
    description: 'Discover Morocco with Trust Drivers - Premium private tours, desert adventures, and luxury transport in Marrakech. Explore the Sahara, Atlas Mountains, and Imperial Cities with expert local guides.',

    // URLs
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://trustdrivers.tours',

    // Localization
    defaultLocale: 'en',
    locales: ['en', 'fr'],

    // Contact
    contact: {
        phone: '+212606912396',
        whatsapp: '+212606912396',
        email: 'contact@trustdrivers.tours'
    },

    // SEO Keywords
    keywords: [
        'Morocco tours',
        'Marrakech tours',
        'Desert tours Morocco',
        'Sahara desert experience',
        'Atlas Mountains tour',
        'Merzouga desert camp',
        'Private tours Morocco',
        'Morocco travel agency',
        'Luxury tours Marrakech',
        'Fes tour',
        'Essaouira day trip',
        'Agafay desert',
        'Camel riding Morocco',
        'Quad biking Marrakech',
        'Morocco honeymoon',
        'Family tours Morocco',
        'Cultural tours Morocco',
        'Morocco excursions'
    ],

    // SEO / Social
    ogImage: '/images/og-trust-drivers.png',
    twitterHandle: '@trustdrivers',
    creator: 'Trust Drivers',

    // Business Info (for structured data)
    business: {
        type: 'TravelAgency',
        priceRange: '$$',
        address: {
            streetAddress: 'Marrakech Medina',
            addressLocality: 'Marrakech',
            addressRegion: 'Marrakech-Safi',
            postalCode: '40000',
            addressCountry: 'MA'
        },
        geo: {
            latitude: 31.6295,
            longitude: -7.9811
        },
        openingHours: 'Mo-Su 08:00-20:00'
    }
};

export type SiteConfig = typeof siteConfig;