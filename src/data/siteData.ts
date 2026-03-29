export const siteData = {
    currency: "EUR",
    location: "Marrakech",

    tours: [
        // ─────────────────────────────────────────────
        // MULTI-DAY CIRCUITS
        // ─────────────────────────────────────────────
        {
            id: "circuit-5-days-south",
            name: "5 Days Circuit - The Great South & Desert",
            duration: "5_days",
            image: "/images/merzouga/merzouga1.jpg",
            gallery: [
                "/images/merzouga/merzouga2.jpg",
                "/images/ouarzazate/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
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
            name: "3 Days Circuit - Merzouga Desert (2 Nights Outside)",
            duration: "3_days",
            image: "/images/merzouga/merzouga4.jpg",
            gallery: [
                "/images/merzouga/merzouga5.jpg",
                "/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg",
                "/images/merzouga/merzouga6.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 3, pricePerPerson: 318 },
                { minPeople: 4, maxPeople: 7, pricePerPerson: 265 },
                { minPeople: 8, maxPeople: 20, pricePerPerson: 165 }
            ],
            includes: [
                "Private air-conditioned van with driver",
                "Camel ride",
                "Guide in Ait Ben Haddou",
                "Accommodation (Half Board)"
            ],
            excludes: [
                "Lunches",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Boumalne Dades",
                    description: "Departure from Marrakech via Tichka Pass (2260m). Lunch at Ait Ben Haddou, visit the Kasbah with a local guide. Continue via Ouarzazate to Boumalne Dades. Overnight in hotel (Half Board)."
                },
                {
                    day: 2,
                    title: "Boumalne Dades - Merzouga",
                    description: "Visit Dades Gorges. Arrival at Tinghir, visit Todra Gorges. Lunch on the way to Arfoud. Arrival in Merzouga, camel ride to the desert camp. Overnight in camp."
                },
                {
                    day: 3,
                    title: "Merzouga - Marrakech",
                    description: "Return by camel to the inn for breakfast. Return trip to Marrakech, arriving around 8pm."
                }
            ]
        },
        {
            id: "circuit-8-days-imperial",
            name: "8 Days Circuit - Desert & Imperial Cities",
            duration: "8_days",
            image: "/images/fes/hazy-momo-YSTtLgsvRa8-unsplash.jpg",
            gallery: [
                "/images/merzouga/merzouga3.jpg",
                "/images/fes/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
                "/images/rabat/niklas-VqouWpsuziE-unsplash.jpg",
                "/images/casablanca/oussama-rahib-NNECQHl9bJc-unsplash.jpg",
                "/images/marrakech/marrakech3.jpg"
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
                    description: "Rabat to Marrakech. Visit Rabat (Chellah, Kasbah des Oudayas, grand avenues). Arrival in Casablanca, lunch, visit Hassan II Mosque and Corniche. Drive to Marrakech. Overnight in Marrakech."
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
            image: "/images/ouarzazate/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
            gallery: [
                "/images/ouarzazate/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
                "/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/ouarzazate/abdou-faiz-lA-P8-vagrI-unsplash.jpg"
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
            id: "circuit-3-days-coast",
            name: "3 Days Circuit - Essaouira, Agadir & Taroudant",
            duration: "3_days",
            image: "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg",
            gallery: [
                "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
                "/images/essaouira/pete-bread-4eZeMUKdV-8-unsplash.jpg",
                "/images/essaouira/rigel-hppgLk1gxho-unsplash.jpg",
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
        },

        // ─────────────────────────────────────────────
        // MARRAKECH STAY PACKS
        // ─────────────────────────────────────────────
        {
            id: "pack-4-days-marrakech",
            name: "4-Day Marrakech Stay Pack",
            duration: "4_days",
            image: "/images/marrakech/marrakech2.jpg",
            gallery: [
                "/images/marrakech/marrakech4.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 5, pricePerPerson: 163 },
                { minPeople: 6, maxPeople: 20, pricePerPerson: 119 }
            ],
            includes: [
                "Airport transfers (arrival & departure)",
                "6h Marrakech city tour by private vehicle (ramparts, palm grove, grand avenues, Majorelle Garden, Menara Garden, Bahia Palace, Saadian Tombs)",
                "Three Valleys & Berber Villages day trip (Kik Plateau, Moulay Brahim, Asni, Ourika Valley, Berber house, Argan cooperative, waterfall walk, riverside lunch)",
                "Agafay Desert afternoon & evening (1h quad, camel ride, dinner show, pool access)",
                "French/English speaking driver",
                "Air-conditioned private van"
            ],
            excludes: [
                "Meals (except riverside lunch at Ourika)",
                "Monument & garden entrance fees",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival & Airport Transfer",
                    description: "Welcome to Marrakech! Private airport transfer to your accommodation. Free time to settle in and explore at your own pace."
                },
                {
                    day: 2,
                    title: "Marrakech City Tour (6h)",
                    description: "Discover Marrakech by private vehicle over 6 hours: tour of the ramparts, circuit of the palm grove, grand avenues, Majorelle Garden, Menara Garden, Bahia Palace and Saadian Tombs. Driver speaks French and English."
                },
                {
                    day: 3,
                    title: "Three Valleys & Berber Villages",
                    description: "Departure at 8:30am. Visit Lake Lalla Takerkoust, Kik Plateau, Moulay Brahim and Asni. Afternoon in the Ourika Valley: visit a Berber house, the Argan cooperative, riverside lunch at Setti Fatma, and a guided walk to the waterfalls. Return around 5:30pm."
                },
                {
                    day: 4,
                    title: "Agafay Desert Afternoon & Airport Transfer",
                    description: "Departure at 2pm for the Agafay Desert: 1h quad biking, camel ride, pool access, sunset, and a spectacular dinner show. Return around 10pm. Private airport transfer for your departure."
                }
            ]
        },
        {
            id: "pack-5-days-marrakech",
            name: "5-Day Marrakech Stay Pack",
            duration: "5_days",
            image: "/images/marrakech/marrakech5.jpg",
            gallery: [
                "/images/marrakech/marrakech7.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 5, pricePerPerson: 195 },
                { minPeople: 6, maxPeople: 20, pricePerPerson: 146 }
            ],
            includes: [
                "Airport transfers (arrival & departure)",
                "6h Marrakech city tour by private vehicle",
                "Agafay Desert afternoon & evening (1h quad, camel ride, dinner show, pool access)",
                "Three Valleys & Berber Villages full day (Kik Plateau, Moulay Brahim, Asni, Ourika Valley, local guide, riverside lunch, Argan cooperative)",
                "Essaouira full day by private van (round trip)",
                "Air-conditioned private van"
            ],
            excludes: [
                "Lunch in Marrakech",
                "Monument & garden entrance fees",
                "Lunch in Essaouira",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival & Airport Transfer",
                    description: "Welcome to Marrakech! Private airport transfer to your accommodation. Free time to explore."
                },
                {
                    day: 2,
                    title: "Marrakech City Tour (6h)",
                    description: "Discover Marrakech by private vehicle over 6 hours: ramparts tour, palm grove circuit, grand avenues, Majorelle Garden, Menara Garden, Bahia Palace and Saadian Tombs."
                },
                {
                    day: 3,
                    title: "Agafay Desert Afternoon & Evening",
                    description: "Departure at 2pm for the Agafay Desert: 1h quad biking, camel ride, pool access, stunning sunset and a spectacular dinner show. Return around 10pm."
                },
                {
                    day: 4,
                    title: "Three Valleys & Berber Villages",
                    description: "Departure at 8:30am. Visit Lake Lalla Takerkoust, Kik Plateau, Moulay Brahim and Asni. Afternoon in the Ourika Valley: visit a Berber house, Argan cooperative, riverside lunch at Setti Fatma, guided waterfall walk. Return around 5:30pm."
                },
                {
                    day: 5,
                    title: "Essaouira Full Day & Airport Transfer",
                    description: "Departure at 8am for the charming blue city of Essaouira. Explore the medina, ramparts and fishing port. Return around 7pm. Private airport transfer for your departure."
                }
            ]
        },

        // ─────────────────────────────────────────────
        // DAY TRIPS & EXCURSIONS
        // ─────────────────────────────────────────────
        {
            id: "day-trip-three-valleys",
            name: "Day Trip - Three Valleys & Berber Villages",
            duration: "1_day",
            image: "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
            gallery: [
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
                "/images/ourika/abderrahman-kamal-MilM52Qj32g-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 3, pricePerPerson: 65 },
                { minPeople: 4, maxPeople: 6, pricePerPerson: 43 },
                { minPeople: 7, maxPeople: 20, pricePerPerson: 32 }
            ],
            includes: [
                "Private air-conditioned van",
                "French/English speaking driver",
                "Local guide (waterfall walk)",
                "Lunch by the riverside (Setti Fatma)",
                "Berber house visit",
                "Argan oil cooperative visit",
                "Tea at a local home"
            ],
            excludes: [
                "Drinks",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Three Valleys & Berber Villages",
                    description: "Departure at 8:30am. Drive via Lake Lalla Takerkoust, Kik Plateau, Moulay Brahim and Asni. Afternoon in the Ourika Valley: visit a Berber house, discover the Argan oil cooperative, enjoy lunch by the river at Setti Fatma, then take a guided walk up to the waterfall. Tea at a local home included. Return to Marrakech around 5:30pm."
                }
            ]
        },
        {
            id: "excursion-ourika-valley",
            name: "Ourika Valley - Full Day with Lunch & Guide",
            duration: "1_day",
            image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
            gallery: [
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/ourika/abderrahman-kamal-MilM52Qj32g-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 3, pricePerPerson: 45 },
                { minPeople: 4, maxPeople: 7, pricePerPerson: 32 },
                { minPeople: 8, maxPeople: 20, pricePerPerson: 20 }
            ],
            includes: [
                "Private transport (air-conditioned van)",
                "Local guide (waterfall walk)",
                "Lunch",
                "Tea at a local home"
            ],
            excludes: [
                "Drinks",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Ourika Valley",
                    description: "Departure at 9am. Drive to the beautiful Ourika Valley. Visit a local Berber home, enjoy a guided walk to discover the impressive waterfalls, and have lunch by the river. Tea at a local home. Return to Marrakech around 4:30pm."
                }
            ]
        },
        {
            id: "excursion-essaouira",
            name: "Essaouira Day Trip - Private Transport",
            duration: "1_day",
            image: "/images/essaouira/pete-bread-4eZeMUKdV-8-unsplash.jpg",
            gallery: [
                "/images/essaouira/rigel-ibisQEDxODo-unsplash.jpg",
                "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
                "/images/essaouira/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg",
                "/images/essaouira/youssef-aboutaleb-ad1FM2Xj0QQ-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 3, pricePerPerson: 57 },
                { minPeople: 4, maxPeople: 20, pricePerPerson: 37 }
            ],
            includes: [
                "Private air-conditioned van (round trip)"
            ],
            excludes: [
                "Lunch",
                "Drinks",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Essaouira",
                    description: "Departure at 8am for the charming blue and white city of Essaouira. Explore the UNESCO-listed medina, the fishing port, the ramparts, and the vibrant art scene at your own pace. Return to Marrakech around 7pm."
                }
            ]
        },
        {
            id: "excursion-agafay-afternoon",
            name: "Agafay Desert Afternoon & Dinner Show",
            duration: "1_day",
            image: "/images/camel-riding/camel-ride-sunset.jpeg",
            gallery: [
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 4, pricePerPerson: 75 },
                { minPeople: 5, maxPeople: 15, pricePerPerson: 63 },
                { minPeople: 16, maxPeople: 50, pricePerPerson: 53 }
            ],
            includes: [
                "1h quad biking",
                "Camel ride",
                "Dinner show",
                "Argan oil cooperative visit",
                "Pool access",
                "Private transport (pickup & drop-off)"
            ],
            excludes: [
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Agafay Desert Afternoon",
                    description: "Departure at 3pm. Arrive in the Agafay Desert for an unforgettable afternoon and evening: visit the Argan oil cooperative, enjoy 1h of quad biking across the lunar landscape, take a camel ride at sunset, cool off with pool access, then indulge in a spectacular dinner show under the stars. Return to Marrakech around 10pm."
                }
            ]
        },
        {
            id: "excursion-imlil",
            name: "Imlil Day Trip - Atlas Mountains & Argan Village",
            duration: "1_day",
            image: "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
            gallery: [
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
                "/images/ourika/abderrahman-kamal-MilM52Qj32g-unsplash.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 3, pricePerPerson: 68 },
                { minPeople: 4, maxPeople: 10, pricePerPerson: 39 },
                { minPeople: 11, maxPeople: 30, pricePerPerson: 29 }
            ],
            includes: [
                "Lunch at a local home",
                "Local guide (2h guided walk)",
                "Argan oil cooperative visit",
                "Private air-conditioned van"
            ],
            excludes: [
                "Drinks",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Imlil, Atlas Mountains",
                    description: "Departure at 8:30am. Drive to Imlil via the scenic Atlas Mountain roads. Visit the Argan oil cooperative. Enjoy a 2-hour guided walk through Berber villages with breathtaking mountain views. Lunch at a local family home. Return via Moulay Brahim, Kik Plateau, and Lake Lalla Takerkoust. Arrive back in Marrakech around 4:30pm."
                }
            ]
        },
        {
            id: "excursion-imlil-agafay",
            name: "Imlil & Agafay - Full Day & Dinner Show",
            duration: "1_day",
            image: "/images/ourika/abderrahman-kamal-MilM52Qj32g-unsplash.jpg",
            gallery: [
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg",
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 4, pricePerPerson: 110 },
                { minPeople: 5, maxPeople: 10, pricePerPerson: 85 },
                { minPeople: 11, maxPeople: 30, pricePerPerson: 63 }
            ],
            includes: [
                "Lunch at Imlil (local home)",
                "Local guide in Imlil (2h guided walk)",
                "Tea at the women's Argan cooperative",
                "1h quad biking at Agafay",
                "Camel ride at Agafay",
                "Dinner show at Agafay",
                "Private transport"
            ],
            excludes: [
                "Drinks at Imlil",
                "Personal expenses",
                "Tips"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Imlil & Agafay - Mountains to Desert",
                    description: "Departure at 8am toward Imlil via Tahanaoute. Visit the women's Argan oil cooperative and continue to Asni. Arrive at Imlil and begin a 2-hour guided walk through stunning Berber mountain scenery. Lunch at a local family home. Afternoon: head to the Agafay Desert via Kik Plateau and Lake Lalla Takerkoust. Enjoy 1h quad biking, a camel ride at sunset, pool access, then an unforgettable dinner show under the stars. Return to Marrakech around 10pm."
                }
            ]
        }
    ],

    activities: {
        timeSlots: [
            { id: "morning", from: "09:00", to: "12:30" },
            { id: "afternoon", from: "14:00", to: "18:00" }
        ],
        experiences: [
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
            id: "airport",
            name: "Airport Transfer",
            image: "/images/transport/airport-transport.jpeg",
            description: "Reliable airport meet & greet service. Our driver waits for you at arrivals and takes you directly to your destination in comfort.",
            dayRate: 200,
            nightRate: 300,
            currency: "MAD",
            note: "Marrakech RAK Airport"
        },
        {
            id: "private",
            name: "Private Transfers",
            image: "/images/transport/private-transport.jpeg",
            description: "Comfortable private vehicle with a professional driver for intercity and regional transfers across Morocco.",
            currency: "MAD",
            destinations: [
                { name: "Agadir",           price1to7: 1600, price7plus: 2300 },
                { name: "Casablanca Airport", price1to7: 1600, price7plus: 2200 },
                { name: "Casablanca City",   price1to7: 1800, price7plus: 2400 },
                { name: "Essaouira",         price1to7: 1100, price7plus: 1600 },
                { name: "Ouarzazate",        price1to7: 1500, price7plus: 2300 },
                { name: "Imlil",             price1to7: 700,  price7plus: 1200 },
                { name: "Agafay",            price1to7: 600,  price7plus: 1100 },
                { name: "El Jadida",         price1to7: 1400, price7plus: 1900 },
                { name: "Safi",              price1to7: 1400, price7plus: 1900 },
                { name: "Ourika",            price1to7: 600,  price7plus: 1100 },
                { name: "Tanger",            price1to7: 4500, price7plus: 5600 },
                { name: "Fès",               price1to7: 3800, price7plus: 4800 },
                { name: "Rabat",             price1to7: 2100, price7plus: 3000 }
            ]
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
