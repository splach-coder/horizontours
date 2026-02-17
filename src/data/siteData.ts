export const siteData = {
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
                { minPeople: 2, maxPeople: 5, pricePerPerson: 690 },
                { minPeople: 6, maxPeople: 20, pricePerPerson: 495 }
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
                { minPeople: 2, maxPeople: 5, pricePerPerson: 380 },
                { minPeople: 6, maxPeople: 20, pricePerPerson: 263 } // "De 5 per a ......"
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
                { minPeople: 2, maxPeople: 4, pricePerPerson: 1650 },
                { minPeople: 5, maxPeople: 20, pricePerPerson: 1380 }
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
                { minPeople: 2, maxPeople: 4, pricePerPerson: 350 },
                { minPeople: 5, maxPeople: 20, pricePerPerson: 258 }
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
                { minPeople: 2, maxPeople: 4, pricePerPerson: 69 },
                { minPeople: 5, maxPeople: 20, pricePerPerson: 48 }
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
                { minPeople: 2, maxPeople: 4, pricePerPerson: 467 },
                { minPeople: 5, maxPeople: 20, pricePerPerson: 320 }
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
            { id: "morning", from: "09:00", to: "12:30" },
            { id: "afternoon", from: "14:00", to: "18:00" }
        ],
        experiences: [ /* Keeping generic experiences as placeholder/filler */
            {
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
    packages: [], // Removing old packages to avoid confusion
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


