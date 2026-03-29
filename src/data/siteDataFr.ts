export const siteDataFr = {
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
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
                "/images/ourika/abderrahman-kamal-MilM52Qj32g-unsplash.jpg"
            ],
            pricing: [
                { minPeople: 2, maxPeople: 3, pricePerPerson: 65 },
                { minPeople: 4, maxPeople: 6, pricePerPerson: 43 },
                { minPeople: 7, maxPeople: 20, pricePerPerson: 32 }
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
            id: "airport",
            name: "Transfert Aéroport",
            image: "/images/transport/airport-transport.jpeg",
            description: "Service fiable d'accueil à l'aéroport. Notre chauffeur vous attend à l'arrivée et vous conduit directement à destination en tout confort.",
            dayRate: 200,
            nightRate: 300,
            currency: "MAD",
            note: "Aéroport Marrakech RAK"
        },
        {
            id: "private",
            name: "Transferts Privés",
            image: "/images/transport/private-transport.jpeg",
            description: "Véhicule privé confortable avec chauffeur professionnel pour vos transferts interurbains et régionaux à travers le Maroc.",
            currency: "MAD",
            destinations: [
                { name: "Agadir",              price1to7: 1600, price7plus: 2300 },
                { name: "Aéroport Casablanca", price1to7: 1600, price7plus: 2200 },
                { name: "Casablanca Ville",    price1to7: 1800, price7plus: 2400 },
                { name: "Essaouira",           price1to7: 1100, price7plus: 1600 },
                { name: "Ouarzazate",          price1to7: 1500, price7plus: 2300 },
                { name: "Imlil",               price1to7: 700,  price7plus: 1200 },
                { name: "Agafay",              price1to7: 600,  price7plus: 1100 },
                { name: "El Jadida",           price1to7: 1400, price7plus: 1900 },
                { name: "Safi",                price1to7: 1400, price7plus: 1900 },
                { name: "Ourika",              price1to7: 600,  price7plus: 1100 },
                { name: "Tanger",              price1to7: 4500, price7plus: 5600 },
                { name: "Fès",                 price1to7: 3800, price7plus: 4800 },
                { name: "Rabat",               price1to7: 2100, price7plus: 3000 }
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
