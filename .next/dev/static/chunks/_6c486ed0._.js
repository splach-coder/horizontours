(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/siteData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteData",
    ()=>siteData
]);
const siteData = {
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
            name: "3 Days Circuit - Merzouga Desert (2 Nights Outside)",
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
                    maxPeople: 3,
                    pricePerPerson: 318
                },
                {
                    minPeople: 4,
                    maxPeople: 7,
                    pricePerPerson: 265
                },
                {
                    minPeople: 8,
                    maxPeople: 20,
                    pricePerPerson: 165
                }
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
        },
        // ─────────────────────────────────────────────
        // MARRAKECH STAY PACKS
        // ─────────────────────────────────────────────
        {
            id: "pack-4-days-marrakech",
            name: "4-Day Marrakech Stay Pack",
            duration: "4_days",
            image: "/images/marrakech/marrakech1.jpg",
            gallery: [
                "/images/marrakech/marrakech1.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 163
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 119
                }
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
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [
                "/images/marrakech/marrakech1.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 195
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 146
                }
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
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 65
                },
                {
                    minPeople: 4,
                    maxPeople: 6,
                    pricePerPerson: 43
                },
                {
                    minPeople: 7,
                    maxPeople: 20,
                    pricePerPerson: 32
                }
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
            image: "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
            gallery: [
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 45
                },
                {
                    minPeople: 4,
                    maxPeople: 7,
                    pricePerPerson: 32
                },
                {
                    minPeople: 8,
                    maxPeople: 20,
                    pricePerPerson: 20
                }
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
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [
                "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg",
                "/images/essaouira/youssef-aboutaleb-ad1FM2Xj0QQ-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 57
                },
                {
                    minPeople: 4,
                    maxPeople: 20,
                    pricePerPerson: 37
                }
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
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg",
                "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 75
                },
                {
                    minPeople: 5,
                    maxPeople: 15,
                    pricePerPerson: 63
                },
                {
                    minPeople: 16,
                    maxPeople: 50,
                    pricePerPerson: 53
                }
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
            image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
            gallery: [
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 68
                },
                {
                    minPeople: 4,
                    maxPeople: 10,
                    pricePerPerson: 39
                },
                {
                    minPeople: 11,
                    maxPeople: 30,
                    pricePerPerson: 29
                }
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
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 110
                },
                {
                    minPeople: 5,
                    maxPeople: 10,
                    pricePerPerson: 85
                },
                {
                    minPeople: 11,
                    maxPeople: 30,
                    pricePerPerson: 63
                }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/siteDataFr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteDataFr",
    ()=>siteDataFr
]);
const siteDataFr = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        // ─────────────────────────────────────────────
        // CIRCUITS MULTI-JOURS
        // ─────────────────────────────────────────────
        {
            id: "circuit-5-days-south",
            name: "Circuit 5 jours 4 nuits à l'extérieur - Le Grand Sud & Désert",
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
                "Transport en privé van climatisé avec chauffeur parlant français et anglais",
                "Balade en dromadaire",
                "Guide à Aït Ben Haddou",
                "Hébergement en demi-pension (Ouarzazate, Tinghir, Camp Merzouga, Zagora)"
            ],
            excludes: [
                "Déjeuners",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Ouarzazate",
                    description: "Départ de Marrakech vers 8h. Visite de la Kasbah Aït Ben Haddou, du Studio de cinéma à Ouarzazate et de la Kasbah Taourirt. Nuit à Ouarzazate (demi-pension)."
                },
                {
                    day: 2,
                    title: "Ouarzazate - Tinghir",
                    description: "Départ d'Ouarzazate vers 8h. Arrivée à Boumalne Dadès, visite des Gorges du Dadès. Route vers Tinghir, déjeuner, visite des Gorges du Todgha et de la palmeraie du Draa. Nuit à Tinghir (demi-pension)."
                },
                {
                    day: 3,
                    title: "Tinghir - Merzouga",
                    description: "Départ vers 8h30 via Arfoud. Arrivée à Merzouga, balade en dromadaire, nuit dans un camp du désert."
                },
                {
                    day: 4,
                    title: "Merzouga - Zagora",
                    description: "Retour à l'auberge en dromadaire pour le petit-déjeuner. Départ vers Zagora via Alnif, Nkob, Tazarine. Nuit à Zagora."
                },
                {
                    day: 5,
                    title: "Zagora - Marrakech",
                    description: "Retour à Marrakech."
                }
            ]
        },
        {
            id: "circuit-3-days-merzouga",
            name: "Les 3 jours Merzouga - 2 nuits à l'extérieur",
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
                    maxPeople: 3,
                    pricePerPerson: 318
                },
                {
                    minPeople: 4,
                    maxPeople: 7,
                    pricePerPerson: 265
                },
                {
                    minPeople: 8,
                    maxPeople: 20,
                    pricePerPerson: 165
                }
            ],
            includes: [
                "Transport en privé van climatisé avec chauffeur",
                "Balade en dromadaire",
                "Guide à Aït Ben Haddou",
                "Hébergement en demi-pension"
            ],
            excludes: [
                "Déjeuners",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Boumalne Dadès",
                    description: "Départ de Marrakech via le col de Tichka (2260 m). Déjeuner à Aït Ben Haddou, visite de la Kasbah avec un guide local. Après-midi : route via Ouarzazate jusqu'à Boumalne Dadès. Nuit à l'hôtel en demi-pension."
                },
                {
                    day: 2,
                    title: "Boumalne Dadès - Merzouga",
                    description: "Visite des Gorges du Dadès. Arrivée à Tinghir, visite des Gorges du Todgha. Déjeuner sur la route vers Arfoud. Arrivée à Merzouga, balade en dromadaire jusqu'au camp. Nuit dans le camp du désert."
                },
                {
                    day: 3,
                    title: "Merzouga - Marrakech",
                    description: "Retour en dromadaire vers l'auberge pour le petit-déjeuner. Retour à Marrakech, arrivée vers 20h."
                }
            ]
        },
        {
            id: "circuit-8-days-imperial",
            name: "Circuit Désert et Villes Impériales - 8 jours 6 nuits",
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
                "Guides locaux",
                "Balade en dromadaire à Merzouga",
                "Hébergement en demi-pension"
            ],
            excludes: [
                "Entrées des monuments",
                "Déjeuners",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Ouarzazate",
                    description: "Départ de Marrakech vers 9h via le col de Tichka (2260m). Visite de la Kasbah Aït Ben Haddou avec guide local, déjeuner. Continue vers Ouarzazate. Nuit à l'hôtel (demi-pension)."
                },
                {
                    day: 2,
                    title: "Ouarzazate - Tinghir",
                    description: "Ouarzazate vers la Vallée des Roses. Arrivée aux Gorges du Dadès, visite. Continue vers Tinghir, déjeuner, visite des Gorges du Todgha et palmeraie du Draa. Nuit à Tinghir (demi-pension)."
                },
                {
                    day: 3,
                    title: "Tinghir - Merzouga",
                    description: "Tinghir vers Arfoud, déjeuner sur la route. Arrivée à Merzouga, thé de bienvenue, balade en dromadaire jusqu'au bivouac. Nuit."
                },
                {
                    day: 4,
                    title: "Merzouga - Fès",
                    description: "Merzouga vers Fès via Midelt et Ifrane. Nuit à l'hôtel (demi-pension)."
                },
                {
                    day: 5,
                    title: "Visite de Fès",
                    description: "Journée complète de visite de Fès (extérieur et médina) avec guide local. Nuit à l'hôtel (demi-pension)."
                },
                {
                    day: 6,
                    title: "Fès - Rabat",
                    description: "Fès vers Rabat. Visite de Volubilis et Moulay Idriss. Visite de Meknès avec guide local, déjeuner à Meknès. Nuit à Rabat (demi-pension)."
                },
                {
                    day: 7,
                    title: "Rabat - Marrakech",
                    description: "Rabat vers Marrakech. Visite de Rabat (Chellah, Kasbah des Oudayas, grandes avenues). Arrivée à Casablanca, déjeuner, visite de la Mosquée Hassan II et de la Corniche. Route vers Marrakech. Nuit à Marrakech."
                },
                {
                    day: 8,
                    title: "Marrakech & Agafay",
                    description: "Visite de Marrakech. Dîner spectacle au désert d'Agafay. Retour vers 22h."
                }
            ]
        },
        {
            id: "circuit-3-days-taliouine",
            name: "Circuit 3 Jours - Taliouine & Capitale du Safran",
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
                "Hébergement en demi-pension (Taliouine & Aït Ben Haddou)",
                "Guide à Aït Ben Haddou"
            ],
            excludes: [
                "Déjeuners",
                "Entrées studio et kasbah",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Taliouine",
                    description: "Départ de Marrakech via le lac Lalla Takerkoust, le plateau de Kik, Moulay Brahim et Asni. Déjeuner à Tizi n'Test. Nuit à Taliouine (demi-pension)."
                },
                {
                    day: 2,
                    title: "Taliouine - Aït Ben Haddou",
                    description: "Route via Taznakht. Visite du Studio de cinéma d'Ouarzazate et de la Kasbah. Nuit à Aït Ben Haddou (demi-pension)."
                },
                {
                    day: 3,
                    title: "Aït Ben Haddou - Marrakech",
                    description: "Visite de la Kasbah Aït Ben Haddou (Patrimoine mondial de l'UNESCO). Route vers Telouet pour le déjeuner. Retour à Marrakech via le col de Tichka (2260m)."
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
                "Hébergement demi-pension"
            ],
            excludes: [
                "Déjeuners",
                "Boissons",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Marrakech - Essaouira",
                    description: "Départ vers 8h30. Arrivée à Essaouira, déjeuner, visite guidée de la ville (3h). Nuit à Essaouira (demi-pension)."
                },
                {
                    day: 2,
                    title: "Essaouira - Agadir",
                    description: "Route côtière panoramique jusqu'à Agadir. Déjeuner. Visite d'Agadir Oufella, Souk El Had et la côte. Nuit à Agadir (demi-pension)."
                },
                {
                    day: 3,
                    title: "Agadir - Taroudant - Marrakech",
                    description: "Route vers Taroudant, visite de la cité ancienne. Déjeuner. Retour à Marrakech via Tizi n'Test."
                }
            ]
        },
        // ─────────────────────────────────────────────
        // PACKS SÉJOUR MARRAKECH
        // ─────────────────────────────────────────────
        {
            id: "pack-4-days-marrakech",
            name: "Pack 4 Jours de Séjour à Marrakech",
            duration: "4_days",
            image: "/images/marrakech/marrakech1.jpg",
            gallery: [
                "/images/marrakech/marrakech1.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 163
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 119
                }
            ],
            includes: [
                "Transferts aéroport arrivée et départ",
                "Visite de ville 6h en véhicule privé (tour du rempart, circuit de la palmeraie, grands avenues, Jardin Majorelle, Jardin de la Menara, Palais Bahia, Tombeaux Saadiens)",
                "Les 3 Vallées et villages berbères (plateau de Kik, Moulay Brahim, Asni, vallée de l'Ourika, maison berbère, coopérative de l'argan, cascades avec guide, repas au bord de la rivière)",
                "Désert d'Agafay après-midi et soirée (1h quad, balade dromadaire, dîner spectacle, accès piscine)",
                "Chauffeur parlant français et anglais",
                "Van climatisé en privé"
            ],
            excludes: [
                "Repas (sauf déjeuner à l'Ourika)",
                "Entrées des monuments et jardins",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrivée & Transfert aéroport",
                    description: "Bienvenue à Marrakech ! Transfert privé de l'aéroport vers votre hébergement. Temps libre pour vous installer et découvrir la ville à votre rythme."
                },
                {
                    day: 2,
                    title: "Visite de Ville de Marrakech (6h)",
                    description: "Découvrez Marrakech en véhicule privé pendant 6 heures : tour du rempart, circuit de la palmeraie, grands avenues, Jardin Majorelle, Jardin de la Menara, Palais Bahia et Tombeaux Saadiens. Chauffeur parlant français et anglais."
                },
                {
                    day: 3,
                    title: "Les 3 Vallées et Villages Berbères",
                    description: "Départ vers 8h30. Visite du lac Lalla Takerkoust, plateau de Kik, Moulay Brahim et Asni. Après-midi dans la vallée de l'Ourika : visite d'une maison berbère, coopérative de l'argan, déjeuner au bord de la rivière à Setti Fatma, balade avec guide local jusqu'aux cascades. Retour vers 17h30."
                },
                {
                    day: 4,
                    title: "Désert d'Agafay Après-midi & Transfert aéroport",
                    description: "Départ vers 14h pour le désert d'Agafay : 1h de quad, balade en dromadaire, accès piscine, coucher de soleil et dîner spectacle. Retour vers 22h. Transfert privé vers l'aéroport pour votre départ."
                }
            ]
        },
        {
            id: "pack-5-days-marrakech",
            name: "Pack 5 Jours de Séjour à Marrakech",
            duration: "5_days",
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [
                "/images/marrakech/marrakech1.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 5,
                    pricePerPerson: 195
                },
                {
                    minPeople: 6,
                    maxPeople: 20,
                    pricePerPerson: 146
                }
            ],
            includes: [
                "Transferts aéroport arrivée et départ",
                "Visite de ville 6h en véhicule privé",
                "Désert d'Agafay après-midi et soirée (1h quad, balade dromadaire, dîner spectacle, accès piscine)",
                "Les 3 Vallées et villages berbères journée complète (plateau de Kik, Moulay Brahim, Asni, vallée de l'Ourika, guide local, déjeuner au bord de la rivière, coopérative de l'argan)",
                "Essaouira pour la journée en van privé aller-retour",
                "Van climatisé en privé"
            ],
            excludes: [
                "Déjeuner à Marrakech",
                "Entrées des monuments et jardins",
                "Déjeuner à Essaouira",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrivée & Transfert aéroport",
                    description: "Bienvenue à Marrakech ! Transfert privé de l'aéroport vers votre hébergement. Temps libre pour explorer."
                },
                {
                    day: 2,
                    title: "Visite de Ville de Marrakech (6h)",
                    description: "Découvrez Marrakech en véhicule privé pendant 6h : tour du rempart, circuit de la palmeraie, grands avenues, Jardin Majorelle, Jardin de la Menara, Palais Bahia et Tombeaux Saadiens."
                },
                {
                    day: 3,
                    title: "Désert d'Agafay Après-midi & Soirée",
                    description: "Départ vers 14h pour le désert d'Agafay : 1h de quad, balade en dromadaire, accès piscine, coucher de soleil époustouflant et dîner spectacle inoubliable. Retour vers 22h."
                },
                {
                    day: 4,
                    title: "Les 3 Vallées et Villages Berbères",
                    description: "Départ vers 8h30. Visite du lac Lalla Takerkoust, plateau de Kik, Moulay Brahim et Asni. Après-midi dans la vallée de l'Ourika : maison berbère, coopérative de l'argan, déjeuner au bord de la rivière à Setti Fatma, balade guidée jusqu'aux cascades. Retour vers 17h30."
                },
                {
                    day: 5,
                    title: "Essaouira Journée Complète & Transfert aéroport",
                    description: "Départ vers 8h pour la charmante ville bleue d'Essaouira. Explorez la médina, les remparts et le port de pêche. Retour vers 19h. Transfert privé vers l'aéroport pour votre départ."
                }
            ]
        },
        // ─────────────────────────────────────────────
        // EXCURSIONS À LA JOURNÉE
        // ─────────────────────────────────────────────
        {
            id: "day-trip-three-valleys",
            name: "Les 3 Vallées et Villages Berbères",
            duration: "1_day",
            image: "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
            gallery: [
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 65
                },
                {
                    minPeople: 4,
                    maxPeople: 6,
                    pricePerPerson: 43
                },
                {
                    minPeople: 7,
                    maxPeople: 20,
                    pricePerPerson: 32
                }
            ],
            includes: [
                "Van climatisé en privé",
                "Chauffeur parlant français ou anglais",
                "Guide local (balade aux cascades)",
                "Déjeuner au bord de la rivière (Setti Fatma)",
                "Visite d'une maison berbère",
                "Visite de la coopérative de l'huile d'argan",
                "Thé chez l'habitant"
            ],
            excludes: [
                "Boissons",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Les 3 Vallées et Villages Berbères",
                    description: "Départ vers 8h30. Route via le lac Lalla Takerkoust, le plateau de Kik, Moulay Brahim et Asni. Après-midi dans la vallée de l'Ourika : visite d'une maison berbère, découverte de la coopérative de l'huile d'argan, déjeuner au bord de la rivière à Setti Fatma, puis balade guidée jusqu'aux cascades. Thé chez l'habitant inclus. Retour à Marrakech vers 17h30."
                }
            ]
        },
        {
            id: "excursion-ourika-valley",
            name: "Vallée de l'Ourika - Journée avec Repas & Guide",
            duration: "1_day",
            image: "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
            gallery: [
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 45
                },
                {
                    minPeople: 4,
                    maxPeople: 7,
                    pricePerPerson: 32
                },
                {
                    minPeople: 8,
                    maxPeople: 20,
                    pricePerPerson: 20
                }
            ],
            includes: [
                "Transport en privé (van climatisé)",
                "Guide local (balade aux cascades)",
                "Déjeuner",
                "Thé chez l'habitant"
            ],
            excludes: [
                "Boissons",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Vallée de l'Ourika",
                    description: "Départ vers 9h. Route jusqu'à la magnifique vallée de l'Ourika. Visite d'une maison berbère, balade guidée jusqu'aux cascades impressionnantes, déjeuner au bord de la rivière. Thé chez l'habitant. Retour à Marrakech vers 16h30."
                }
            ]
        },
        {
            id: "excursion-essaouira",
            name: "Essaouira pour la Journée - Transport Privé",
            duration: "1_day",
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [
                "/images/essaouira/rigel-No_Y3bn4lNQ-unsplash.jpg",
                "/images/essaouira/youssef-aboutaleb-ad1FM2Xj0QQ-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 57
                },
                {
                    minPeople: 4,
                    maxPeople: 20,
                    pricePerPerson: 37
                }
            ],
            includes: [
                "Van climatisé en privé (aller-retour)"
            ],
            excludes: [
                "Déjeuner",
                "Boissons",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Essaouira",
                    description: "Départ vers 8h pour la charmante ville bleue et blanche d'Essaouira. Explorez la médina classée à l'UNESCO, le port de pêche, les remparts et la scène artistique vibrante à votre rythme. Retour à Marrakech vers 19h."
                }
            ]
        },
        {
            id: "excursion-agafay-afternoon",
            name: "Désert d'Agafay Après-midi & Dîner Spectacle",
            duration: "1_day",
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg",
                "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 75
                },
                {
                    minPeople: 5,
                    maxPeople: 15,
                    pricePerPerson: 63
                },
                {
                    minPeople: 16,
                    maxPeople: 50,
                    pricePerPerson: 53
                }
            ],
            includes: [
                "1h de quad",
                "Balade en dromadaire",
                "Dîner spectacle",
                "Visite de la coopérative de l'huile d'argan",
                "Accès piscine",
                "Transport en privé (prise en charge)"
            ],
            excludes: [
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Désert d'Agafay Après-midi",
                    description: "Départ vers 15h. Arrivée dans le désert d'Agafay pour une après-midi et soirée inoubliables : visite de la coopérative de l'huile d'argan, 1h de quad dans le paysage lunaire, balade en dromadaire au coucher du soleil, accès piscine, puis un spectaculaire dîner spectacle sous les étoiles. Retour à Marrakech vers 22h."
                }
            ]
        },
        {
            id: "excursion-imlil",
            name: "Imlil pour la Journée - Atlas & Village d'Argan",
            duration: "1_day",
            image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
            gallery: [
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg",
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 3,
                    pricePerPerson: 68
                },
                {
                    minPeople: 4,
                    maxPeople: 10,
                    pricePerPerson: 39
                },
                {
                    minPeople: 11,
                    maxPeople: 30,
                    pricePerPerson: 29
                }
            ],
            includes: [
                "Déjeuner chez l'habitant",
                "Guide local (balade de 2h)",
                "Visite de la coopérative de l'huile d'argan",
                "Van climatisé en privé"
            ],
            excludes: [
                "Boissons",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Imlil, Atlas",
                    description: "Départ vers 8h30. Route jusqu'à Imlil via les routes panoramiques de l'Atlas. Visite de la coopérative de l'huile d'argan. Balade guidée de 2h à travers les villages berbères avec des vues époustouflantes sur les montagnes. Déjeuner chez une famille locale. Retour via Moulay Brahim, le plateau de Kik et le lac Lalla Takerkoust. Arrivée à Marrakech vers 16h30."
                }
            ]
        },
        {
            id: "excursion-imlil-agafay",
            name: "Imlil & Agafay - Journée Complète & Dîner Spectacle",
            duration: "1_day",
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/ourika/matthew-fainman-3yonP2JaGTU-unsplash.jpg",
                "/images/camel-riding/camel-ride-sunset.jpeg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg"
            ],
            pricing: [
                {
                    minPeople: 2,
                    maxPeople: 4,
                    pricePerPerson: 110
                },
                {
                    minPeople: 5,
                    maxPeople: 10,
                    pricePerPerson: 85
                },
                {
                    minPeople: 11,
                    maxPeople: 30,
                    pricePerPerson: 63
                }
            ],
            includes: [
                "Déjeuner à Imlil (chez l'habitant)",
                "Guide local à Imlil (balade de 2h)",
                "Thé à la coopérative féminine de l'argan",
                "1h de quad à Agafay",
                "Balade en dromadaire à Agafay",
                "Dîner spectacle à Agafay",
                "Transport en privé"
            ],
            excludes: [
                "Boissons à Imlil",
                "Dépenses personnelles",
                "Pourboires"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Imlil & Agafay - De la Montagne au Désert",
                    description: "Départ vers 8h direction Imlil via Tahanaoute. Visite de la coopérative féminine de l'huile d'argan, puis continue via Asni jusqu'à Imlil. Commencez une balade de 2h avec un guide local dans les paysages berbères de montagne. Déjeuner chez une famille locale. Après-midi : route vers le désert d'Agafay via le plateau de Kik et le lac Lalla Takerkoust. Profitez d'1h de quad, d'une balade en dromadaire au coucher du soleil, de l'accès piscine, puis d'un dîner spectacle inoubliable sous les étoiles. Retour à Marrakech vers 22h."
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/getSiteData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSiteData",
    ()=>getSiteData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteDataFr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteDataFr.ts [app-client] (ecmascript)");
;
;
function getSiteData(locale) {
    return locale === 'fr' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteDataFr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteDataFr"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/[locale]/packages/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$getSiteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/getSiteData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function PackagesPage({ params }) {
    _s();
    const { locale } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(params);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])('ListingPage');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.get('search') || searchParams.get('destination');
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$getSiteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSiteData"])(locale);
    const allPackages = data.packages || [];
    const packages = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "PackagesPage.useMemo[packages]": ()=>{
            if (!query) return allPackages;
            const q = query.toLowerCase();
            return allPackages.filter({
                "PackagesPage.useMemo[packages]": (p)=>p.name.toLowerCase().includes(q) || p.location && p.location.toLowerCase().includes(q)
            }["PackagesPage.useMemo[packages]"]);
        }
    }["PackagesPage.useMemo[packages]"], [
        allPackages,
        query
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-neutral-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-screen w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/essaouira/rigel-ibisQEDxODo-unsplash.jpg",
                                alt: "Morocco Packages",
                                fill: true,
                                className: "object-cover",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/packages/page.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 h-full flex flex-col justify-end pb-24 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-primary bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6",
                                            children: t('tag')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl md:text-7xl lg:text-8xl font-medium text-white font-poppins mb-6 leading-[1.1]",
                                            children: [
                                                locale === 'fr' ? 'Forfaits' : 'Curated',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic",
                                                    children: locale === 'fr' ? 'Complets' : 'Packages'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 76
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 text-xl md:text-2xl max-w-2xl font-light leading-relaxed",
                                            children: t('packagesSubtitle')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-8 h-8 text-white/60"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/packages/page.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/packages/page.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-neutral-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 md:px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-4xl font-medium text-neutral-dark font-poppins mb-2",
                                            children: locale === 'fr' ? 'Tous les Forfaits' : 'All Packages'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-500",
                                            children: [
                                                packages.length,
                                                " ",
                                                locale === 'fr' ? 'forfaits disponibles' : 'packages available'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}/services`,
                                    className: "inline-flex items-center gap-2 text-primary font-medium hover:underline",
                                    children: [
                                        locale === 'fr' ? 'Voir tous les services' : 'View all services',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: packages.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/packages/${item.id}`,
                                        className: "block group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-[220px] overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: item.image || '/images/hero-marrakech.jpg',
                                                            alt: item.name,
                                                            fill: true,
                                                            className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-3 h-3 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                                    lineNumber: 116,
                                                                    columnNumber: 49
                                                                }, this),
                                                                locale === 'fr' ? 'Journée complète' : 'Full day'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "w-3 h-3 text-yellow-500 fill-yellow-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 49
                                                                }, this),
                                                                "4.9"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-neutral-dark mb-2 group-hover:text-primary transition-colors line-clamp-1",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4",
                                                            children: item.desc || (locale === 'fr' ? 'Découvrez le meilleur du Maroc avec ce forfait complet.' : 'Experience the best of Morocco with this curated package.')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pt-4 border-t border-neutral-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-neutral-400 text-xs",
                                                                            children: locale === 'fr' ? 'À partir de' : 'From'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "block text-xl font-bold text-primary",
                                                                            children: [
                                                                                "€",
                                                                                item.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1.5 text-neutral-dark text-sm font-medium group-hover:text-primary transition-colors",
                                                                    children: [
                                                                        locale === 'fr' ? 'Détails' : 'Details',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 33
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/packages/page.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[locale]/packages/page.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/packages/page.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/packages/page.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(PackagesPage, "YVUnxu5Y2AbzQiaYZgUKzTMN6sA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PackagesPage;
var _c;
__turbopack_context__.k.register(_c, "PackagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_6c486ed0._.js.map