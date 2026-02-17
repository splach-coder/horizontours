module.exports = [
"[project]/src/data/siteData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteData",
    ()=>siteData
]);
const siteData = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        {
            id: "circuit-5-days-south",
            name: "5 Days Circuit - The Great South & Desert",
            duration: "5_days",
            image: "/images/merzouga/merzouga1.jpg",
            gallery: [
                "/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/merzouga/merzouga2.jpg",
                "/images/merzouga/merzouga3.jpg",
                "/images/Zagoura/kristijan-nikodinovski-RfK4AQchykw-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 690
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 495
                }
            ],
            includes: [
                "Private air-conditioned van with French/English speaking driver",
                "Camel ride",
                "Guide in Ait Ben Haddou",
                "Accommodation in Half Board (Ouarzazate, Tinghir, Merzouga Camp, Zagora)"
            ],
            excludes: [
                "Lunches",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Ouarzazate",
                    description: "Departure from Marrakech around 8am. Visit Kasbah Ait Ben Haddou, Cinema Studio in Ouarzazate, and Kasbah Taourirt. Overnight in Ouarzazate (Half Board)."
                },
                {
                    day: 2,
                    title: "Ouarzazate - Tinghir",
                    description: "Departure from Ouarzazate around 8am. Arrival at Boumalne Dades, visit Dades Gorges. Drive to Tinghir, lunch, visit Todra Gorges and Draa Palm Grove. Overnight in Tinghir (Half Board)."
                },
                {
                    day: 3,
                    title: "Tinghir - Merzouga",
                    description: "Departure around 8:30am via Arfoud. Arrival in Merzouga, camel ride, overnight in a desert camp."
                },
                {
                    day: 4,
                    title: "Merzouga - Zagora",
                    description: "Return to the inn by camel for breakfast. Departure to Zagora via Alnif, Nkob, Tazarine. Overnight in Zagora."
                },
                {
                    day: 5,
                    title: "Zagora - Marrakech",
                    description: "Return trip to Marrakech."
                }
            ]
        },
        {
            id: "circuit-3-days-merzouga",
            name: "3 Days Circuit - Merzouga Desert",
            duration: "3_days",
            image: "/images/merzouga/merzouga4.jpg",
            gallery: [
                "/images/ouarzazate/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
                "/images/merzouga/merzouga5.jpg",
                "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 380
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 263
                } // "De 5 per a ......"
            ],
            includes: [
                "Private air-conditioned van with chauffeur",
                "Camel ride",
                "Guide in Ait Ben Haddou",
                "Accommodation"
            ],
            excludes: [
                "Lunches",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Boumalne Dades",
                    description: "Departure from Marrakech via Tichka Pass (2260m). Lunch at Ait Ben Haddou, visit the Kasbah with local guide. Continue via Ouarzazate to Boumalne Dades. Overnight in hotel (Half Board)."
                },
                {
                    day: 2,
                    title: "Boumalne Dades - Merzouga",
                    description: "Visit Dades Gorges. Arrival at Tinghir, visit Todra Gorges. Lunch on the way to Arfoud. Arrival in Merzouga, camel ride to the camp. Overnight in camp."
                },
                {
                    day: 3,
                    title: "Merzouga - Marrakech",
                    description: "Return by camel to the inn for breakfast. Return to Marrakech, arriving around 8pm."
                }
            ]
        },
        {
            id: "circuit-8-days-imperial",
            name: "8 Days Circuit - Desert & Imperial Cities",
            duration: "8_days",
            image: "/images/fes/hazy-momo-YSTtLgsvRa8-unsplash.jpg",
            gallery: [
                "/images/merzouga/merzouga1.jpg",
                "/images/fes/mauro-lima-mPD9BJ_QGXw-unsplash.jpg",
                "/images/rabat/niklas-VqouWpsuziE-unsplash.jpg",
                "/images/casablanca/oussama-rahib-NNECQHl9bJc-unsplash.jpg",
                "/images/marrakech/marrakech1.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 1650
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 1380
                }
            ],
            includes: [
                "Private van transport with driver",
                "Local guides",
                "Camel ride in Merzouga",
                "Accommodation Half Board"
            ],
            excludes: [
                "Monument entrance fees",
                "Lunches",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Ouarzazate",
                    description: "Departure from Marrakech at 9am via Tichka Pass (2260m). Visit Kasbah Ait Ben Haddou with local guide, lunch. Continue to Ouarzazate. Overnight in hotel (Half Board)."
                },
                {
                    day: 2,
                    title: "Ouarzazate - Tinghir",
                    description: "Ouarzazate to Valley of Roses. Arrive at Dades Gorges, visit. Continue to Tinghir, lunch, visit Todra Gorges and Draa Palm Grove. Overnight in Tinghir (Half Board)."
                },
                {
                    day: 3,
                    title: "Tinghir - Merzouga",
                    description: "Tinghir to Arfoud, lunch on the way. Arrival in Merzouga, welcome tea, camel ride to bivouac. Overnight."
                },
                {
                    day: 4,
                    title: "Merzouga - Fes",
                    description: "Merzouga to Fes via Midelt, Ifrane. Overnight in hotel (Half Board)."
                },
                {
                    day: 5,
                    title: "Fes Visit",
                    description: "Full day visit of Fes (exterior and Medina) with local guide. Overnight in hotel (Half Board)."
                },
                {
                    day: 6,
                    title: "Fes - Rabat",
                    description: "Fes to Rabat. Visit Volubilis and Moulay Idriss. Visit Meknes with local guide, lunch in Meknes. Overnight in Rabat (Half Board)."
                },
                {
                    day: 7,
                    title: "Rabat - Marrakech",
                    description: "Rabat to Marrakech. Visit Rabat (Chellah, Kasbah des Oudayas, huge avenues). Arrival in Casablanca, lunch, visit Hassan II Mosque, Corniche. Drive to Marrakech. Overnight in Marrakech."
                },
                {
                    day: 8,
                    title: "Marrakech & Agafay",
                    description: "Visit of Marrakech. Dinner show in Agafay desert. Return around 10pm."
                }
            ]
        },
        {
            id: "circuit-3-days-taliouine",
            name: "3 Days Circuit - Taliouine Saffron Capital",
            duration: "3_days",
            image: "/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
            gallery: [
                "/images/ouarzazate/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
                "/images/ouarzazate/hassan-ouajbir-INcADDyMwwo-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 350
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 258
                }
            ],
            includes: [
                "Air-conditioned van transport",
                "Accommodation (Half Board) in Taliouine & Ait Ben Haddou",
                "Guide in Ait Ben Haddou"
            ],
            excludes: [
                "Lunches",
                "Entrance fees (Studio/Kasbah)",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Taliouine",
                    description: "Departure via Lake Lalla Takerkoust, Kik Plateau, Moulay Brahim, and Asni. Lunch at Tizi n'Test. Overnight in Taliouine (Half Board)."
                },
                {
                    day: 2,
                    title: "Taliouine - Ait Ben Haddou",
                    description: "Travel via Taznakht. Visit Ouarzazate Cinema Studio and Kasbah. Overnight in Ait Ben Haddou (Half Board)."
                },
                {
                    day: 3,
                    title: "Ait Ben Haddou - Marrakech",
                    description: "Visit UNESCO Heritage Kasbah Ait Ben Haddou. Route to Telouet for lunch. Return to Marrakech via Tichka Pass (2260m)."
                }
            ]
        },
        {
            id: "day-trip-three-valleys",
            name: "Day Trip - Three Valleys & Atlas Waterfalls",
            duration: "1_day",
            image: "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
            gallery: [
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 69
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 48
                }
            ],
            includes: [
                "Private transport",
                "Local Guide",
                "Meal (Lunch)",
                "Tea at a local home"
            ],
            excludes: [
                "Tips",
                "Drinks"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Three Valleys Excursion",
                    description: "Departure 8:30am. Visit Lake Lalla Takerkoust, Kik Plateau, Moulay Brahim, Asni. Afternoon in Ourika Valley, visit Berber house. Lunch by the river. 1h guided walk to waterfalls. Return around 5:30pm."
                }
            ]
        },
        {
            id: "circuit-3-days-coast",
            name: "3 Days Circuit - Essaouira, Agadir & Taroudant",
            duration: "3_days",
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [
                "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg",
                "/images/essaouira/youssef-aboutaleb-ad1FM2Xj0QQ-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 467
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 320
                }
            ],
            includes: [
                "Private transport",
                "Guide in Essaouira",
                "Guide in Taroudant",
                "Accommodation (Half Board)"
            ],
            excludes: [
                "Lunches",
                "Drinks",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Essaouira",
                    description: "Departure 8:30am. Arrive in Essaouira, lunch, 3h guided city tour. Overnight in Essaouira (Half Board)."
                },
                {
                    day: 2,
                    title: "Essaouira - Agadir",
                    description: "Scenic coastal drive to Agadir. Lunch. Visit Agadir Oufella, Souk El Had, and the coast. Overnight in Agadir (Half Board)."
                },
                {
                    day: 3,
                    title: "Agadir - Taroudant - Marrakech",
                    description: "Travel to Taroudant, visit ancient city. Lunch. Return to Marrakech via Tizi n'Test."
                }
            ]
        }
    ],
    activities: {
        timeSlots: [
            {
                id: "morning",
                from: "09:00",
                to: "12:30"
            },
            {
                id: "afternoon",
                from: "14:00",
                to: "18:00"
            }
        ],
        experiences: [
            /* Keeping generic experiences as placeholder/filler */ {
                id: "quad-agafay",
                type: "quad",
                location: "Agafay",
                price: 50,
                duration: "2_hours",
                image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/mayar-zidan-LVNcykwlDEg-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "camel-agafay",
                type: "camel",
                location: "Agafay",
                price: 25,
                duration: "1_hour",
                image: "/images/camel-riding/camel-ride-sunset.jpeg",
                gallery: [
                    "/images/camel-riding/camel-ride-sunset.jpeg",
                    "/images/camel-riding/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                    "/images/camel-riding/sheila-c-KuXu8rx_1-8-unsplash.jpg"
                ]
            },
            {
                id: "balloon-sunrise",
                type: "balloon",
                location: "Marrakech",
                price: 155,
                duration: "morning",
                image: "/images/airballon/balloon-flight-1.jpeg",
                gallery: [
                    "/images/airballon/balloon-flight-2.jpeg",
                    "/images/airballon/balloon-flight-1.jpeg",
                    "/images/airballon/danai-tsoutreli-3NAlBV5PlmE-unsplash.jpg"
                ]
            }
        ],
        addons: [
            {
                id: "dinner",
                name: "Dinner",
                pricePerPerson: 25,
                availableFrom: "15:00",
                availableTo: "21:00"
            }
        ]
    },
    transport: [
        {
            id: "private",
            name: "Private Transport",
            image: "/images/transport/private-transport.jpeg",
            description: "Comfortable private vehicle with professional driver",
            price: 50
        },
        {
            id: "airport",
            name: "Airport Transport",
            image: "/images/transport/airport-transport.jpeg",
            description: "Reliable airport transfers, meet & greet service",
            price: 30
        }
    ],
    packages: [],
    reviews: {
        scale: 5,
        items: [
            {
                id: "rev-1",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Sarah Johnson",
                rating: 5,
                comment: "An absolutely incredible experience! Our guide was knowledgeable and passionate about Moroccan culture. The desert tour exceeded all expectations. Highly recommend Trust Drivers for anyone visiting Morocco!",
                date: "2 weeks ago"
            },
            {
                id: "rev-2",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Mohammed Al-Rashid",
                rating: 5,
                comment: "Professional service from start to finish. The driver was punctual, the vehicle was spotless, and the entire trip was seamless. Trust Drivers made our family vacation unforgettable!",
                date: "1 month ago"
            },
            {
                id: "rev-3",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Emma Martinez",
                rating: 5,
                comment: "Best tour company in Marrakech! They customized our itinerary perfectly and showed us hidden gems we never would have found on our own. The Atlas Mountains tour was breathtaking!",
                date: "3 weeks ago"
            },
            {
                id: "rev-4",
                targetType: "general",
                targetId: "trust-drivers",
                author: "David Chen",
                rating: 5,
                comment: "Exceptional service and attention to detail. Our driver spoke perfect English and shared fascinating stories about Morocco's history. The Sahara desert experience was a once-in-a-lifetime adventure!",
                date: "1 week ago"
            },
            {
                id: "rev-5",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Fatima Benali",
                rating: 5,
                comment: "I've used many tour services, but Trust Drivers stands out. They're reliable, professional, and truly care about creating memorable experiences. The coastal tour to Essaouira was magical!",
                date: "2 months ago"
            },
            {
                id: "rev-6",
                targetType: "general",
                targetId: "trust-drivers",
                author: "James Wilson",
                rating: 5,
                comment: "From booking to the end of our trip, everything was perfect. The guides were friendly and knowledgeable. We felt safe and well taken care of throughout our entire journey. Five stars!",
                date: "3 weeks ago"
            },
            {
                id: "rev-7",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Aisha Rahman",
                rating: 5,
                comment: "Trust Drivers provided an authentic Moroccan experience. They took us to local markets, traditional restaurants, and beautiful landscapes. Our family will treasure these memories forever!",
                date: "1 month ago"
            },
            {
                id: "rev-8",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Pierre Dubois",
                rating: 5,
                comment: "Magnifique! The professionalism and warmth of the Trust Drivers team made our honeymoon extraordinary. The private tour was worth every penny. We'll definitely be back!",
                date: "2 weeks ago"
            },
            {
                id: "rev-9",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Lisa Anderson",
                rating: 5,
                comment: "I was traveling solo and felt completely safe with Trust Drivers. They were respectful, accommodating, and went above and beyond to ensure I had an amazing experience. Highly recommended!",
                date: "4 weeks ago"
            },
            {
                id: "rev-10",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Omar Hassan",
                rating: 5,
                comment: "Outstanding service! The attention to detail, comfortable vehicles, and expert guides made this the best tour experience I've ever had. Trust Drivers truly lives up to their name!",
                date: "1 week ago"
            }
        ]
    }
};
}),
"[project]/src/data/siteDataFr.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteDataFr",
    ()=>siteDataFr
]);
const siteDataFr = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        {
            id: "circuit-5-days-south",
            name: "Circuit 5 jours 4 nuit a l'extérieur - Le Grand Sud",
            duration: "5_days",
            image: "/images/merzouga/merzouga1.jpg",
            gallery: [
                "/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/merzouga/merzouga2.jpg",
                "/images/merzouga/merzouga3.jpg",
                "/images/Zagoura/kristijan-nikodinovski-RfK4AQchykw-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 690
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 495
                }
            ],
            includes: [
                "Transport en privé van climatisé avec chauffeur parle français ou anglais",
                "Balade Dromadaire",
                "Guide a ait ben hadou",
                "Accommodation en Demi pension (Ouarzazate, Tinghir, Merzouga, Zagora)"
            ],
            excludes: [
                "Déjeuner",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Ouarzazate",
                    description: "Départ de Marrakech le premier jour vers 8h, visite du kasbah ait ben hadou et studio de cinéma a Ouarzazate kasbah taourirt. Passez la nuit a Ouarzazate hôtel en Demi pension."
                },
                {
                    day: 2,
                    title: "Ouarzazate - Tinghir",
                    description: "Départ de Ouarzazate vers 8h. Arrivé a boumalne dedes visite du gourge dades. Prends la route vers tinghir déjeuner et visite du gorge et palmeraie du draa. La nuit a tinghir en demi pension."
                },
                {
                    day: 3,
                    title: "Tinghir - Merzouga",
                    description: "Le 3 ème jour prendre la route vers 8h30 Via arfoud. Arrivé a merzouga prend les Dromadaire nuit dans un camp."
                },
                {
                    day: 4,
                    title: "Merzouga - Zagora",
                    description: "Le lendemain retour a l auberge en dos de dromadaire déjeuner et départ vers zagoura via alnif nkob tazarine. Passé la nuit a zagoura."
                },
                {
                    day: 5,
                    title: "Zagora - Marrakech",
                    description: "Retour a Marrakech."
                }
            ]
        },
        {
            id: "circuit-3-days-merzouga",
            name: "Les trois jours Merzouga 2 nuit a l'extérieur",
            duration: "3_days",
            image: "/images/merzouga/merzouga4.jpg",
            gallery: [
                "/images/ouarzazate/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
                "/images/merzouga/merzouga5.jpg",
                "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 380
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 263
                }
            ],
            includes: [
                "Transport en privé van climatisé avec chauffeur",
                "Balade Dromadaire",
                "Guide a ait ben hadou",
                "Accommodation"
            ],
            excludes: [
                "Déjeuner",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Boumalne Dades",
                    description: "Départ de Marrakech via le col de tichka 2260 m. Déjeuner a ait ben hadou visite du kasbah avec un guide local. Après midi prend la route via Ouarzazate arrive a boumalne dades nuit dans un hôtel en demi pension."
                },
                {
                    day: 2,
                    title: "Boumalne Dades - Merzouga",
                    description: "Visite du gorge dades. Arrivé a tinghir visite du gorge todgha. L après midi déjeuner pendant le chemin vers arfoud. Arrivé a merzouga prend le Dromadaire pour aller dormir dans un camp."
                },
                {
                    day: 3,
                    title: "Merzouga - Marrakech",
                    description: "Retour en Dromadaire vers l auberge prendre le petit déjeuner. Et retour a Marrakech. Vers 20h."
                }
            ]
        },
        {
            id: "circuit-8-days-imperial",
            name: "Circuit désert et Villes impérials 8j 6 nuits",
            duration: "8_days",
            image: "/images/fes/hazy-momo-YSTtLgsvRa8-unsplash.jpg",
            gallery: [
                "/images/merzouga/merzouga1.jpg",
                "/images/fes/mauro-lima-mPD9BJ_QGXw-unsplash.jpg",
                "/images/rabat/niklas-VqouWpsuziE-unsplash.jpg",
                "/images/casablanca/oussama-rahib-NNECQHl9bJc-unsplash.jpg",
                "/images/marrakech/marrakech1.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 1650
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 1380
                }
            ],
            includes: [
                "Transport en privé van avec chauffeur",
                "Guide locaux",
                "Balade Dromadaire a merzouga"
            ],
            excludes: [
                "Entrés de monuments",
                "Déjeuner",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Ouarzazate",
                    description: "Départ de Marrakech vers 9h vers ait ben hadou via col de tichka 2260m. Visite du kasbah avec un guide Local, déjeuner et continue vers Ouarzazate nuit et hôtel en demi pension."
                },
                {
                    day: 2,
                    title: "Ouarzazate - Tinghir",
                    description: "Ouarzazate vers la vallée du roses. Arrive au gorge dades visite et continue vers tinghir déjeuner et visite du gorge todgha et palmeraie du draa. Nuit a tinghir hôtel en demi pension."
                },
                {
                    day: 3,
                    title: "Tinghir - Merzouga",
                    description: "Tinghir vers arfoud déjeuner pendant le chemin. Arrivé a merzouga après midi the de bienvenu et prends Dromadaire pour aller au bivouac nuit."
                },
                {
                    day: 4,
                    title: "Merzouga - Fes",
                    description: "Merzouga Fes via midelt ifran. Nuit dans un hôtel en demi pension."
                },
                {
                    day: 5,
                    title: "Visite de Fes",
                    description: "Visite de Fes toute la journée extérieur et fameuse médina avec un guide Local. Nuit dans un hôtel en demi pension."
                },
                {
                    day: 6,
                    title: "Fes - Rabat",
                    description: "Fes Rabat. Visite de volubilis et moulay driss. Visite de Meknès avec un guide local. Déjeuner a Meknès. La nuit a rabat dans un hôtel en demi pension."
                },
                {
                    day: 7,
                    title: "Rabat - Marrakech",
                    description: "Rabat Marrakech. Visite de rabat challat kasbah lodaya grandes avenues. Arrivé a casa déjeuner et visite de la mousque hassan 2 la corniche. Prend la route vers Marrakech nuit a Marrakech."
                },
                {
                    day: 8,
                    title: "Marrakech & Agafay",
                    description: "Visite de Marrakech et dîner spectacle au désert d agafay. Retour vers 22h."
                }
            ]
        },
        {
            id: "circuit-3-days-taliouine",
            name: "Circuit 3 Jours - Taliouine et Capitale du Safran",
            duration: "3_days",
            image: "/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
            gallery: [
                "/images/ouarzazate/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
                "/images/ouarzazate/hassan-ouajbir-INcADDyMwwo-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 350
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 258
                }
            ],
            includes: [
                "Transport van climatisé",
                "Hébergement en demi pension (Taliouine, Ait Ben Haddou)",
                "Guide à Ait Ben Haddou"
            ],
            excludes: [
                "Déjeuner",
                "Entré de studio et kasbah",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Taliouine",
                    description: "Départ de Marrakech via le lac Lalla Takerkoust, le plateau de Kik, Moulay Brahim et Asni. Déjeuner à Tizi n'Test. Nuit à Taliouine (Demi pension)."
                },
                {
                    day: 2,
                    title: "Taliouine - Ait Ben Haddou",
                    description: "Taliouine vers Ait Ben Haddou via Taznakhte. Visite de Ouarzazate (Studio et Kasbah). Nuit à Ait Ben Haddou (Demi pension)."
                },
                {
                    day: 3,
                    title: "Ait Ben Haddou - Marrakech",
                    description: "Visite de la Kasbah Ait Ben Haddou (patrimoine mondial de l'UNESCO). Route vers Telouet pour le déjeuner. Retour à Marrakech via le col de Tichka."
                }
            ]
        },
        {
            id: "day-trip-three-valleys",
            name: "Excursion Trois Vallées",
            duration: "1_day",
            image: "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
            gallery: [
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 69
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 48
                }
            ],
            includes: [
                "Transport en privé",
                "Guide Local",
                "Repas",
                "Thé chez l'habitant"
            ],
            excludes: [
                "Pourboires",
                "Boissons"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Les Trois Vallées",
                    description: "Départ vers 8h30, retour vers 17h30. Lac Lalla Takerkoust, plateau de Kik, Moulay Brahim et Asni. Après-midi vallée de l'Ourika, visite maison berbère. Déjeuner au bord de la rivière. Balade d'une heure avec guide local aux cascades."
                }
            ]
        },
        {
            id: "circuit-3-days-coast",
            name: "Circuit 3 Jours - Essaouira, Agadir & Taroudant",
            duration: "3_days",
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [
                "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg",
                "/images/essaouira/youssef-aboutaleb-ad1FM2Xj0QQ-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 467
                },
                {
                    minPeople: 5,
                    maxPeople: 20,
                    pricePerPerson: 320
                }
            ],
            includes: [
                "Transport en privé",
                "Guide à Essaouira",
                "Guide à Taroudant",
                "Hébergement Demi Pension"
            ],
            excludes: [
                "Déjeuner",
                "Boissons",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Essaouira",
                    description: "Départ vers Essaouira vers 8h30. Arrivée, déjeuner, visite de la ville avec guide local (3h). Nuit à Essaouira (Demi pension)."
                },
                {
                    day: 2,
                    title: "Essaouira - Agadir",
                    description: "Départ vers Agadir par la route côtière. Déjeuner. Visite d'Agadir Oufella, Souk El Had, la côte. Nuit à Agadir (Demi pension)."
                },
                {
                    day: 3,
                    title: "Agadir - Taroudant - Marrakech",
                    description: "Départ vers Taroudant, visite de la partie ancienne. Déjeuner. Retour à Marrakech via Tizi n'Test. Fin de service."
                }
            ]
        }
    ],
    activities: {
        timeSlots: [
            {
                id: "morning",
                from: "09:00",
                to: "12:30"
            },
            {
                id: "afternoon",
                from: "14:00",
                to: "18:00"
            }
        ],
        experiences: [
            /* Same as EN */ {
                id: "quad-agafay",
                type: "quad",
                location: "Agafay",
                price: 50,
                duration: "2_hours",
                image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/mayar-zidan-LVNcykwlDEg-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "camel-agafay",
                type: "camel",
                location: "Agafay",
                price: 25,
                duration: "1_hour",
                image: "/images/camel-riding/camel-ride-sunset.jpeg",
                gallery: [
                    "/images/camel-riding/camel-ride-sunset.jpeg",
                    "/images/camel-riding/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                    "/images/camel-riding/sheila-c-KuXu8rx_1-8-unsplash.jpg"
                ]
            },
            {
                id: "balloon-sunrise",
                type: "balloon",
                location: "Marrakech",
                price: 155,
                duration: "matin",
                image: "/images/airballon/balloon-flight-1.jpeg",
                gallery: [
                    "/images/airballon/balloon-flight-2.jpeg",
                    "/images/airballon/balloon-flight-1.jpeg",
                    "/images/airballon/danai-tsoutreli-3NAlBV5PlmE-unsplash.jpg"
                ]
            }
        ],
        addons: [
            {
                id: "dinner",
                name: "Dîner",
                pricePerPerson: 25,
                availableFrom: "15:00",
                availableTo: "21:00"
            }
        ]
    },
    transport: [
        {
            id: "private",
            name: "Transport privé",
            image: "/images/transport/private-transport.jpeg",
            description: "Véhicule privé confortable avec chauffeur professionnel",
            price: 50
        },
        {
            id: "airport",
            name: "Transfert aéroport",
            image: "/images/transport/airport-transport.jpeg",
            description: "Transferts aéroport fiables, service d'accueil",
            price: 30
        }
    ],
    packages: [],
    reviews: {
        scale: 5,
        items: [
            {
                id: "rev-1",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Sarah Johnson",
                rating: 5,
                comment: "Une expérience absolument incroyable ! Notre guide était compétent et passionné par la culture marocaine. Le circuit dans le désert a dépassé toutes les attentes. Je recommande vivement Trust Drivers à tous ceux qui visitent le Maroc !",
                date: "Il y a 2 semaines"
            },
            {
                id: "rev-2",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Mohammed Al-Rashid",
                rating: 5,
                comment: "Service professionnel du début à la fin. Le chauffeur était ponctuel, le véhicule impeccable et tout le voyage s'est déroulé sans accroc. Trust Drivers a rendu nos vacances en famille inoubliables !",
                date: "Il y a 1 mois"
            },
            {
                id: "rev-3",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Emma Martinez",
                rating: 5,
                comment: "Meilleure compagnie de tours à Marrakech ! Ils ont parfaitement personnalisé notre itinéraire et nous ont montré des joyaux cachés que nous n'aurions jamais trouvés seuls. Le tour des montagnes de l'Atlas était à couper le souffle !",
                date: "Il y a 3 semaines"
            },
            {
                id: "rev-4",
                targetType: "general",
                targetId: "trust-drivers",
                author: "David Chen",
                rating: 5,
                comment: "Service exceptionnel et attention aux détails. Notre chauffeur parlait parfaitement anglais et partageait des histoires fascinantes sur l'histoire du Maroc. L'expérience du désert du Sahara était une aventure unique !",
                date: "Il y a 1 semaine"
            },
            {
                id: "rev-5",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Fatima Benali",
                rating: 5,
                comment: "J'ai utilisé de nombreux services de tours, mais Trust Drivers se démarque. Ils sont fiables, professionnels et se soucient vraiment de créer des expériences mémorables. Le tour côtier à Essaouira était magique !",
                date: "Il y a 2 mois"
            },
            {
                id: "rev-6",
                targetType: "general",
                targetId: "trust-drivers",
                author: "James Wilson",
                rating: 5,
                comment: "De la réservation à la fin de notre voyage, tout était parfait. Les guides étaient sympathiques et compétents. Nous nous sommes sentis en sécurité et bien pris en charge tout au long de notre voyage. Cinq étoiles !",
                date: "Il y a 3 semaines"
            },
            {
                id: "rev-7",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Aisha Rahman",
                rating: 5,
                comment: "Trust Drivers a fourni une expérience marocaine authentique. Ils nous ont emmenés dans des marchés locaux, des restaurants traditionnels et de magnifiques paysages. Notre famille chérira ces souvenirs pour toujours !",
                date: "Il y a 1 mois"
            },
            {
                id: "rev-8",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Pierre Dubois",
                rating: 5,
                comment: "Magnifique ! Le professionnalisme et la chaleur de l'équipe Trust Drivers ont rendu notre lune de miel extraordinaire. Le tour privé valait chaque centime. Nous reviendrons certainement !",
                date: "Il y a 2 semaines"
            },
            {
                id: "rev-9",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Lisa Anderson",
                rating: 5,
                comment: "Je voyageais seule et je me suis sentie complètement en sécurité avec Trust Drivers. Ils étaient respectueux, accommodants et ont fait tout leur possible pour que j'aie une expérience incroyable. Hautement recommandé !",
                date: "Il y a 4 semaines"
            },
            {
                id: "rev-10",
                targetType: "general",
                targetId: "trust-drivers",
                author: "Omar Hassan",
                rating: 5,
                comment: "Service exceptionnel ! L'attention aux détails, les véhicules confortables et les guides experts ont fait de cela la meilleure expérience de tour que j'aie jamais eue. Trust Drivers est vraiment à la hauteur de son nom !",
                date: "Il y a 1 semaine"
            }
        ]
    }
};
}),
"[project]/src/data/getSiteData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSiteData",
    ()=>getSiteData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteDataFr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteDataFr.ts [app-ssr] (ecmascript)");
;
;
function getSiteData(locale) {
    return locale === 'fr' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteDataFr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteDataFr"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteData"];
}
}),
"[project]/src/app/[locale]/tours/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToursPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$getSiteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/getSiteData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function ToursPage({ params }) {
    const { locale } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(params);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('ListingPage');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.get('search') || searchParams.get('destination');
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$getSiteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSiteData"])(locale);
    const allTours = data.tours || [];
    const tours = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!query) return allTours;
        const q = query.toLowerCase();
        if (q.includes('atlas')) {
            return allTours.filter((t)=>t.name.toLowerCase().includes('ourika') || t.name.toLowerCase().includes('imlil') || t.name.toLowerCase().includes('ouzoud'));
        }
        return allTours.filter((t)=>t.name.toLowerCase().includes(q));
    }, [
        allTours,
        query
    ]);
    const renderPrice = (item)=>{
        if (item.pricing && item.pricing[0]) {
            const p = item.pricing[0];
            return p.totalPrice ? `€${p.totalPrice}` : `€${p.pricePerPerson}/p`;
        }
        return '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-neutral-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-screen w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/merzouga/merzouga1.jpg",
                                alt: "Morocco Tours",
                                fill: true,
                                className: "object-cover",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/tours/page.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 h-full flex flex-col justify-end pb-24 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 40
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-primary bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6",
                                            children: t('tag')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl md:text-7xl lg:text-8xl font-medium text-white font-poppins mb-6 leading-[1.1]",
                                            children: [
                                                locale === 'fr' ? 'Circuits' : 'Cultural',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic",
                                                    children: locale === 'fr' ? 'Culturels' : 'Tours'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 text-xl md:text-2xl max-w-2xl font-light leading-relaxed",
                                            children: t('toursSubtitle')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        10,
                                        0
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 2
                                },
                                className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-8 h-8 text-white/60"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/tours/page.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/tours/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-neutral-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 md:px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-4xl font-medium text-neutral-dark font-poppins mb-2",
                                            children: locale === 'fr' ? 'Tous les Circuits' : 'All Tours'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-500",
                                            children: [
                                                tours.length,
                                                " ",
                                                locale === 'fr' ? 'circuits disponibles' : 'tours available'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}/services`,
                                    className: "inline-flex items-center gap-2 text-primary font-medium hover:underline",
                                    children: [
                                        locale === 'fr' ? 'Voir tous les services' : 'View all services',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: tours.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: idx * 0.05
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/tours/${item.id}`,
                                        className: "block group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-[220px] overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: item.image || '/images/hero-marrakech.jpg',
                                                            alt: item.name,
                                                            fill: true,
                                                            className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-3 h-3 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 49
                                                                }, this),
                                                                item.duration?.replace('_', ' ') || (locale === 'fr' ? 'Journée complète' : 'Full day')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "w-3 h-3 text-yellow-500 fill-yellow-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 49
                                                                }, this),
                                                                "4.9"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-neutral-dark mb-2 group-hover:text-primary transition-colors line-clamp-1",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4",
                                                            children: locale === 'fr' ? `Découvrez la magie de ${item.name}. Ce circuit organisé vous emmène à travers des lieux emblématiques.` : `Experience the magic of ${item.name}. This curated tour takes you through iconic locations.`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pt-4 border-t border-neutral-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-neutral-400 text-xs",
                                                                            children: locale === 'fr' ? 'À partir de' : 'From'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                                            lineNumber: 149,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "block text-xl font-bold text-primary",
                                                                            children: renderPrice(item)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1.5 text-neutral-dark text-sm font-medium group-hover:text-primary transition-colors",
                                                                    children: [
                                                                        locale === 'fr' ? 'Détails' : 'Details',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                                            lineNumber: 154,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 33
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/tours/page.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[locale]/tours/page.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/tours/page.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/tours/page.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_13431a67._.js.map