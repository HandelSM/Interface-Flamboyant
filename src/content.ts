// src/content.ts


export interface HotspotSpec {
    id: string;
    svgPath: string;
    media: string;
}

export interface FloorSpec {
    id: string;
    planImage: string;
    hotspots: HotspotSpec[];
    arrows: { up?: string; right?: string; down?: string; left?: string };
}

export interface CategorySpec {
    id: string;
    floors: FloorSpec[];
}

export const CONTENT: Record<string, CategorySpec[]> = {
    Legitimo: 
    [
        /* --------------------------------------------------------------------
           SUBSOLOS
        -------------------------------------------------------------------- */
        {
            id: 'Subsolos',
            floors: [
                {
                    id: 'Térreo',
                    planImage: '/assets/imagens_finais/legitimo_1/subsolos_1/terreo/planta_terreo_c.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/subsolos_1/ss1_1/imagem_garagem_c.jpg',
                        },
                        {
                            id: 'Bicicletário',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/subsolos_1/terreo/bicicletario_c.jpg'
                        },
                    ],
                    arrows: { down: 'SS1' },
                },
                {
                    id: 'SS3',
                    planImage:
                        '/assets/imagens_finais/legitimo_1/subsolos_1/ss3_1/planta_ss3_c.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M50 80 L180 80 L180 140 L50 140 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/subsolos_1/ss3_1/imagem_garagem_c.jpg',
                        },
                    ],
                    arrows: { up: 'SS2' },
                },

                {
                    id: 'SS2',
                    planImage:
                        '/assets/imagens_finais/legitimo_1/subsolos_1/ss2_1/c18_pb_02_pavimento_garagem_ss2_ef_c.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/subsolos_1/ss2_1/imagem_garagem_c.jpg',
                        },
                    ],
                    arrows: { up: 'SS1', down: 'SS3' },
                },

                {
                    id: 'SS1',
                    planImage:
                        '/assets/imagens_finais/legitimo_1/subsolos_1/ss1_1/ss1.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/subsolos_1/ss1_1/imagem_garagem_c.jpg',
                        },
                        {
                            id: 'Lobby Legítimo',
                            svgPath: 'M130 220 L200 220 L200 280 L130 280 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/subsolos_1/ss1_1/lobby_legitimo/lobby_c_1.jpg'
                        },
                        {
                            id: 'Car Wash',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/subsolos_1/ss1_1/car_wash_c.jpg',
                        },
                        {
                            id: 'Port Cochere',
                            svgPath: 'M130 220 L200 220 L200 280 L130 280 Z',
                            media:
                                '/assets/imagens_finais/fachada-legitimo-autentico/c18_07_embasamento_tn_ef_v2_c_1.jpg',
                        },
                    ],
                    arrows: { up: 'Térreo', down: 'SS2' },
                }
            ],
        },

        /* --------------------------------------------------------------------
           ÁREAS COMUNS  (exemplo só do 1º pavimento comum e exclusivo)
        -------------------------------------------------------------------- */
        {
            id: 'Áreas Comuns',
            floors: [
                {
                    id: 'Lazer Comum',
                    planImage:
                        '/assets/imagens_finais/legitimo_1/areas-comuns-lazer-comum_1/planta_1pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Mini Mercado',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-lazer-comum_1/mini_mercado_c.jpg',
                        },
                        {
                            id: 'Churrasqueira',
                            svgPath: 'M10 30 L20 30 L20 40 L10 40 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-lazer-comum_1/churrasqueira_c_1.jpeg',
                        },
                        {
                            id: 'Playground',
                            svgPath: 'M10 50 L20 50 L20 60 L10 60 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-lazer-comum_1/playground_c_1.jpg',
                        },
                        {
                            id: 'Piscina Infantil',
                            svgPath: 'M10 70 L20 70 L20 80 L10 80 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-lazer-comum_1/piscina_infantil_c.jpg',
                        },
                        {
                            id: 'Espaço Pet',
                            svgPath: 'M10 90 L20 90 L20 100 L10 100 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-lazer-comum_1/espaco_pet_c.jpg'
                        },
                    ],
                    arrows: { right: 'Lazer Exclusivo' },
                },

                {
                    id: 'Lazer Exclusivo',
                    planImage:
                        '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/1pavimento-lazer/pavimento_lazer_-_1o_pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Salão de Festas',
                            svgPath: 'M30 10 L40 10 L40 20 L30 20 Z',
                            media: '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/1pavimento-lazer/salao_de_festas_1o_pavimento_c.jpg',
                        },
                        {
                            id: 'Brinquedoteca',
                            svgPath: 'M30 30 L40 30 L40 40 L30 40 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/1pavimento-lazer/brinquedoteca_c_1.jpg',
                        },
                        {
                            id: 'Piscina Adulto',
                            svgPath: 'M30 50 L40 50 L40 60 L30 60 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/1pavimento-lazer/piscina_c_1.jpg',
                        },
                    ],
                    arrows: { left: 'Lazer Comum', up: '2' },
                },

                {
                    id: '2',
                    planImage:
                        '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/wellness-mezanino-2-pavimento-lazer_1/planta_wellness.jpg',
                    hotspots: [
                        {
                            id: 'Pilates',
                            svgPath: 'M50 10 L60 10 L60 20 L50 20 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/wellness-mezanino-2-pavimento-lazer_1/pilates_c_1.jpg',
                        },
                        {
                            id: 'Sala de Massagem',
                            svgPath: 'M50 30 L60 30 L60 40 L50 40 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/wellness-mezanino-2-pavimento-lazer_1/sala_de_massagem_c.jpg',
                        },
                        {
                            id: 'Sauna Seca',
                            svgPath: 'M50 50 L60 50 L60 60 L50 60 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/wellness-mezanino-2-pavimento-lazer_1/sauna_seca_c.jpg',
                        },
                        {
                            id: 'Spa',
                            svgPath: 'M50 70 L60 70 L60 80 L50 80 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/wellness-mezanino-2-pavimento-lazer_1/spa_c_1.jpg',
                        },
                        {
                            id: 'Espaço Beauty',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/wellness-mezanino-2-pavimento-lazer_1/espaco_beauty_c.jpg',
                        },
                        {
                            id: 'Yoga e Pilates Solo',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media:
                                '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/wellness-mezanino-2-pavimento-lazer_1/yoga_e_pilates_solo_c.jpg',
                        },
                    ],
                    arrows: { down: 'Lazer Exclusivo', up: '33' },
                },

                {
                    id: '33',
                    planImage: '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/salao-de-festas-33-pavimento_1/planta_-_33pavimento.jpg',
                    hotspots: [
                        {
                            id: 'Salão de Festas',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/salao-de-festas-33-pavimento_1/salao_de_festas_c.jpg'
                        },
                    ],
                    arrows: { down: '2', up: '34'}
                },

                {
                    id: '34',
                    planImage: '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/academia-34-pavimento_1/academia_34o_pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Academia',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/legitimo_1/areas-comuns-exclusivas-legitimo/academia-34-pavimento_1/academia_c_1.jpeg'
                        },
                    ],
                    arrows: { down: '33'}
                }
            ],
        },

        {
            id: 'Apartamentos',
            floors:
            [
                {
                    id: '420 m²',
                    planImage: '/assets/imagens_finais/legitimo_1/apartamento_1/plantas_1/apartamento_420mop_3_suites.jpg',
                    hotspots: [
                        {
                            id: 'Varanda',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media: '/assets/imagens_finais/legitimo_1/apartamento_1/varanda_c_1.jpeg',
                        },
                        {
                            id: 'Living',
                            svgPath: 'M10 30 L20 30 L20 40 L10 40 Z',
                            media: '/assets/imagens_finais/legitimo_1/apartamento_1/living_c_1.jpg',
                        },
                        {
                            id: 'Sala Íntima',
                            svgPath: 'M10 50 L20 50 L20 60 L10 60 Z',
                            media: '/assets/imagens_finais/legitimo_1/apartamento_1/sala_intima_c.jpg',
                        },
                        {
                            id: 'Suíte Master',
                            svgPath: 'M10 70 L20 70 L20 80 L10 80 Z',
                            media: '/assets/imagens_finais/legitimo_1/apartamento_1/suite_master_c.jpg',
                        }
                    ],
                    arrows: { right: '420 m²' },
                },
                {
                    id: '420 m²',
                    planImage: '/assets/imagens_finais/legitimo_1/apartamento_1/plantas_1/apartamento_tipo_-_4_suites_-_420m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '420 m²', right: '420 m²'},
                },
                {
                    id: '420 m²',
                    planImage: '/assets/imagens_finais/legitimo_1/apartamento_1/plantas_1/apartamento_4202-_opcao_cozinha_fechada_c.jpg',
                    hotspots: [],
                    arrows: { left: '420 m²', right: '461 m²' },
                },
                {
                    id: '461 m²',
                    planImage: '/assets/imagens_finais/legitimo_1/apartamento_1/plantas_1/apartamento_tipo_house_-_4_suites_-_461m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '420 m²', right: '872 m²' },
                },
                {
                    id: '872 m²',
                    planImage: '/assets/imagens_finais/legitimo_1/apartamento_1/plantas_1/duplex_inferior_c.jpg',
                    hotspots: [],
                    arrows: { left: '461 m²', right: '872 m²' },
                },
                {
                    id: '872 m²',
                    planImage: '/assets/imagens_finais/legitimo_1/apartamento_1/plantas_1/duplex_superior_c.jpg',
                    hotspots: [],
                    arrows: { left: '872 m²' },
                },
            ],
        },
    ],

    Autentico: 
    [
        /* --------------------------------------------------------------------
           SUBSOLOS
        -------------------------------------------------------------------- */
        {
            id: 'Subsolos',
            floors: [
                {
                    id: 'Térreo',
                    planImage: '/assets/imagens_finais/autentico_1/subsolos_1/terreo_1/planta_terreo_c.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/subsolos_1/ss1_1/imagem_garagem_c.jpg',
                        },
                        {
                            id: 'Bicicletário',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/subsolos_1/terreo_1/bicicletario_c.jpg'
                        },
                    ],
                    arrows: { down: 'SS1' },
                },
                {
                    id: 'SS3',
                    planImage:
                        '/assets/imagens_finais/autentico_1/subsolos_1/ss3_1/planta_ss3_c.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M50 80 L180 80 L180 140 L50 140 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/subsolos_1/ss3_1/imagem_garagem_c.jpg',
                        },
                    ],
                    arrows: { up: 'SS2' },
                },

                {
                    id: 'SS2',
                    planImage:
                        '/assets/imagens_finais/autentico_1/subsolos_1/ss2_1/c18_pb_02_pavimento_garagem_ss2_ef_c_1.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/subsolos_1/ss2_1/imagem_garagem_c.jpg',
                        },
                    ],
                    arrows: { up: 'SS1', down: 'SS3' },
                },

                {
                    id: 'SS1',
                    planImage:
                        '/assets/imagens_finais/autentico_1/subsolos_1/ss1_1/ss1.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/subsolos_1/ss1_1/imagem_garagem_c.jpg',
                        },
                        {
                            id: 'Lobby Autêntico',
                            svgPath: 'M130 220 L200 220 L200 280 L130 280 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/subsolos_1/ss1_1/lobby_autentico/lobby_c_1.jpg'
                        },
                        {
                            id: 'Car Wash',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/subsolos_1/ss1_1/car_wash_c.jpg',
                        },
                        {
                            id: 'Port Cochere',
                            svgPath: 'M130 220 L200 220 L200 280 L130 280 Z',
                            media: '/assets/imagens_finais/fachada-legitimo-autentico/c18_07_embasamento_tn_ef_v2_c_1.jpg',
                        },
                    ],
                    arrows: { up: 'Térreo', down: 'SS2' },
                }
            ],
        },

        /* --------------------------------------------------------------------
           ÁREAS COMUNS
        -------------------------------------------------------------------- */
        {
            id: 'Áreas Comuns',
            floors: [
                {
                    id: 'Lazer Comum',
                    planImage:
                        '/assets/imagens_finais/autentico_1/area-comum-lazer-comum_1/areas-comuns-1pavimento_1/planta_1pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Mini Mercado',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/area-comum-lazer-comum_1/areas-comuns-1pavimento_1/mini_mercado_c.jpg',
                        },
                        {
                            id: 'Churrasqueira',
                            svgPath: 'M10 30 L20 30 L20 40 L10 40 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/area-comum-lazer-comum_1/areas-comuns-1pavimento_1/churrasqueira_c_1.jpeg',
                        },
                        {
                            id: 'Playground',
                            svgPath: 'M10 50 L20 50 L20 60 L10 60 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/area-comum-lazer-comum_1/areas-comuns-1pavimento_1/playground_c_1.jpg',
                        },
                        {
                            id: 'Piscina Infantil',
                            svgPath: 'M10 70 L20 70 L20 80 L10 80 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/area-comum-lazer-comum_1/areas-comuns-1pavimento_1/piscina_infantil_c.jpg',
                        },
                        {
                            id: 'Espaço Pet',
                            svgPath: 'M10 90 L20 90 L20 100 L10 100 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/area-comum-lazer-comum_1/areas-comuns-1pavimento_1/espaco_pet_c.jpg'
                        },
                    ],
                    arrows: { right: 'Lazer Exclusivo' },
                },

                {
                    id: 'Lazer Exclusivo',
                    planImage: '/assets/imagens_finais/autentico_1/area-comum-lazer-comum_1/areas-comuns-1pavimento_1/planta_1pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Salão de Festas Gourmet',
                            svgPath: 'M30 10 L40 10 L40 20 L30 20 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-lazer-exclusivo-autentico_1/salao_de_festas_gourmet/c18_17_salao_festas_02_ts_ef_c_1.jpg',
                        },
                        {
                            id: 'Salão de Festas',
                            svgPath: 'M30 10 L40 10 L40 20 L30 20 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-lazer-exclusivo-autentico_1/salao_de_festas/c18_16_salao_festas_ts_ef_c_1.jpeg',
                        },
                        {
                            id: 'Brinquedoteca',
                            svgPath: 'M30 30 L40 30 L40 40 L30 40 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-lazer-exclusivo-autentico_1/brinquedoteca_1/c18_18_brinquedoteca_ts_ef_c_1.jpeg'
                        },
                        {
                            id: 'Piscina Adulto',
                            svgPath: 'M30 50 L40 50 L40 60 L30 60 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-lazer-exclusivo-autentico_1/piscina_1/c18_08_piscina_adulto_ts_ef2_c_1.jpg'
                        },
                    ],
                    arrows: { left: 'Lazer Comum', up: '30' },
                },

                {
                    id: '30',
                    planImage:
                        '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-30pavimento-lazer-exclusivo-autentico_1/planta_30o_pavimento_-_academia/c18_pb_08__pavimento_lazer_30_ts_ef2_c.jpg',
                    hotspots: [
                        {
                            id: 'Ergonometria',
                            svgPath: 'M50 10 L60 10 L60 20 L50 20 Z',
                            media:
                                '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-30pavimento-lazer-exclusivo-autentico_1/c18_19_academia_01_ts_ef_c_1.jpg'
                        },
                        {
                            id: 'Musculação',
                            svgPath: 'M50 30 L60 30 L60 40 L50 40 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-30pavimento-lazer-exclusivo-autentico_1/c18_20_academia_02_ts_ef_c_1.jpg'
                        }
                    ],
                    arrows: { down: 'Lazer Exclusivo', up: '31' },
                },

                {
                    id: '31',
                    planImage: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-wellnes-lazer-exclusivo-autentico_1/planta_31pavimento_-_wellness/planta_31pavimento_-_wellness.jpg',
                    hotspots: [
                        {
                            id: 'Sauna Seca',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-wellnes-lazer-exclusivo-autentico_1/sauna_seca/c18_23_sauna_ts_ef_c_1.jpeg'
                        },
                        {
                            id: 'Sala de Massagem',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-wellnes-lazer-exclusivo-autentico_1/sala_de_massagem/c18_21_sala_massagem_ts_ef2_c_1.jpg'
                        },
                        {
                            id: 'Spa',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-wellnes-lazer-exclusivo-autentico_1/spa_1/c18_22_wellness_spa_ts_ef_c_1.jpg'
                        },
                        {
                            id: 'Espaço Beauty',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-wellnes-lazer-exclusivo-autentico_1/espaco_beauty/c18_26_espaco_beauty_ts_ef2_c_1.jpg'
                        },
                        {
                            id: 'Pilates',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-wellnes-lazer-exclusivo-autentico_1/pilates_1/c18_24_wellness_pilates_ts_ef_c_1.jpg'
                        },
                        {
                            id: 'Yoga',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/imagens_finais/autentico_1/areas-comuns-exclusivas-autentico_1/lazer-1pavimento-wellnes-lazer-exclusivo-autentico_1/yoga_1/c18_25_wellness_yoga_ts_ef_c_1.jpg'
                        },
                    ],
                    arrows: { down: '30'}
                }
            ],
        },

        {
            id: 'Apartamentos',
            floors: 
            [
                {
                    id: '250 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento250m_1/plantas_apartamento_250m/opcao_3_suites/apartamento_250m2_-_final_01_-_opcao_3_suites_c.jpg',
                    hotspots: [
                        {
                            id: 'Suíte Master',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento250m_1/suite_master_c.jpg',
                        },
                        {
                            id: 'Living',
                            svgPath: 'M10 30 L20 30 L20 40 L10 40 Z',
                            media: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento250m_1/living_c_1.jpg',
                        }
                    ],
                    arrows: { right: '250 m²' },
                },
                {
                    id: '250 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento250m_1/plantas_apartamento_250m/apartamento_tipo_-_4_suites/apartamento_tipo_-_4_suites_-_250m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '250 m²', right: '274 m²'},
                },
                {
                    id: '274 m²',
                    planImage: 'public/assets/imagens_finais/autentico_1/apartamentos_1/apartamento-tipo-house-4suites-274m_1/convertidos_1/c18_pb_20_tipo_house_sul_250m2_4suites_ef_c.jpg',
                    hotspots: [],
                    arrows: { left: '250 m²', right: '306 m²'},
                },
                {
                    id: '306 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento306m_1/plantas_1/apartamento_306m-_final_02_-_op03_suites.jpg',
                    hotspots: [
                        {
                            id: 'Suíte Master',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento306m_1/suite_master_c.jpg',
                            
                        },
                        {
                            id: 'Living',
                            svgPath: 'M10 30 L20 30 L20 40 L10 40 Z',
                            media: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento306m_1/living_c_1.jpg',
                        },
                        {
                            id: 'Varanda',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento306m_1/varanda_c_1.jpeg',
                        },
                    ],
                    arrows: { left: '274 m²', right: '306 m²' },
                },
                {
                    id: '306 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento306m_1/plantas_1/apartamento_tipo_-_final_02_-_4_suites_-_306m2/apartamento_tipo_-_final_02_-_4_suites_-_306m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '306 m²', right: '330 m²' },
                },
                {
                    id: '330 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/apartamento-tipo-house-4suites-330m_1/convertido_1/apartamento_tipo_house_-_4_suites_-_final_02-_33022m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '306 m²', right: '530 m²' },
                },
                {
                    id: '530 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/duplex-530m_1/convertido_1/pavimento_inferior_530m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '330 m²', right: '530 m²' },
                },
                {
                    id: '530 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/duplex-530m_1/convertido_1/pavimento_superior_530m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '530 m²', right: '649 m²'  },
                },
                {
                    id: '649 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/duplex-649m_1/convertido_1/pavimento_inferior_649m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '530 m²', right: '649 m²' },
                },
                {
                    id: '649 m²',
                    planImage: '/assets/imagens_finais/autentico_1/apartamentos_1/duplex-649m_1/convertido_1/pavimento_superior_649m2_c.jpg',
                    hotspots: [],
                    arrows: { left: '649 m²' },
                },
                
                
            ],
        },
    ],
    LeClubLacoste: [
        {
            id: 'Quadras',
            floors: [
                {
                    id: 'Lazer Le Club Lacoste',
                    planImage: '/assets/imagens_finais/le-club-lacoste_1/planta_1pavimento_c.jpg',
                    hotspots:
                    [
                        {
                            id: 'Quadra de Tênis',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media: '/assets/imagens_finais/le-club-lacoste_1/quadra_de_tenis_c.jpg',
                        },
                        {
                            id: 'Quadra Esportiva',
                            svgPath: 'M10 30 L20 30 L20 40 L10 40 Z',
                            media: '/assets/imagens_finais/le-club-lacoste_1/quadra_esportiva_c.jpg',
                        },
                        {
                            id: 'Quadra de Areia',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media: '/assets/imagens_finais/le-club-lacoste_1/quadra_de_areia_c.jpg',
                        },
                    ],
                    arrows: {}
                },
            ],
        },
    ],
    Fachada: []
};
