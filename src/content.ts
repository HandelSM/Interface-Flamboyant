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
                    id: 'SS3',
                    planImage:
                        '/assets/Imagens Finais/Legitimo/Subsolos/SS3/Planta SS3_c.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M50 80 L180 80 L180 140 L50 140 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Subsolos/SS3/Imagem Garagem_c.jpg',
                        },
                    ],
                    arrows: { up: 'SS2' },
                },

                {
                    id: 'SS2',
                    planImage:
                        '/assets/Imagens Finais/Legitimo/Subsolos/SS2/C18_PB_02_Pavimento_garagem_SS2_EF_c.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Subsolos/SS2/Imagem Garagem_c.jpg',
                        },
                    ],
                    arrows: { up: 'SS1', down: 'SS3' },
                },

                {
                    id: 'SS1',
                    planImage:
                        '/assets/Imagens Finais/Legitimo/Subsolos/SS1/Planta SS1.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Subsolos/SS1/Imagem Garagem_c.jpg',
                        },
                        {
                            id: 'Lobby Legítimo',
                            svgPath: 'M130 220 L200 220 L200 280 L130 280 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Subsolos/SS1/Lobby Legítimo/Lobby_c.jpg'
                        },
                        {
                            id: 'Car Wash',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Subsolos/SS1/Car Wash_c.jpg',
                        },
                        {
                            id: 'Port Cochere',
                            svgPath: 'M130 220 L200 220 L200 280 L130 280 Z',
                            media:
                                '/assets/Imagens Finais/fachada-legitimo-autentico/C18_07_Embasamento_TN_EF_V2_c.jpg',
                        },
                    ],
                    arrows: { up: 'Térreo', down: 'SS2' },
                },

                {
                    id: 'Térreo',
                    planImage: '/assets/Imagens Finais/Legitimo/Subsolos/Térreo/Planta Térreo_c.jpg',
                    hotspots: [
                        {
                            id: 'Bicicletário',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Subsolos/Térreo/Bicicletário_c.jpg'
                        },
                    ],
                    arrows: { down: 'SS1' },
                },
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
                        '/assets/Imagens Finais/Legitimo/Areas-comuns-lazer-comum/Planta 1º Pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Mini Mercado',
                            svgPath: 'M10 10 L20 10 L20 20 L10 20 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-lazer-comum/Mini Mercado_c.jpg',
                        },
                        {
                            id: 'Churrasqueira',
                            svgPath: 'M10 30 L20 30 L20 40 L10 40 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-lazer-comum/Churrasqueira_c.jpg',
                        },
                        {
                            id: 'Playground',
                            svgPath: 'M10 50 L20 50 L20 60 L10 60 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-lazer-comum/Playground_c.jpg',
                        },
                        {
                            id: 'Piscina Infantil',
                            svgPath: 'M10 70 L20 70 L20 80 L10 80 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-lazer-comum/Piscina Infantil_c.jpg',
                        },
                        {
                            id: 'Espaço Pet',
                            svgPath: 'M10 90 L20 90 L20 100 L10 100 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-lazer-comum/Espaço Pet_c.jpg'
                        },
                    ],
                    arrows: { right: 'Lazer Exclusivo' },
                },

                {
                    id: 'Lazer Exclusivo',
                    planImage:
                        '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/1pavimento-lazer/Pavimento Lazer - 1º Pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Salão de Festas',
                            svgPath: 'M30 10 L40 10 L40 20 L30 20 Z',
                            media: '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/1pavimento-lazer/Salão de Festas 1º pavimento_c.jpg',
                        },
                        {
                            id: 'Brinquedoteca',
                            svgPath: 'M30 30 L40 30 L40 40 L30 40 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/1pavimento-lazer/Brinquedoteca_c.jpg',
                        },
                        {
                            id: 'Piscina Adulto',
                            svgPath: 'M30 50 L40 50 L40 60 L30 60 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/1pavimento-lazer/Piscina_c.jpg',
                        },
                    ],
                    arrows: { left: 'Lazer Comum', up: '2' },
                },

                {
                    id: '2',
                    planImage:
                        '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Wellness-mezanino-2-pavimento-lazer/Planta - Mezanino Lazer - Wellness_c.jpg',
                    hotspots: [
                        {
                            id: 'Pilates',
                            svgPath: 'M50 10 L60 10 L60 20 L50 20 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Wellness-mezanino-2-pavimento-lazer/Pilates_c.jpg',
                        },
                        {
                            id: 'Sala de Massagem',
                            svgPath: 'M50 30 L60 30 L60 40 L50 40 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Wellness-mezanino-2-pavimento-lazer/Sala de Massagem_c.jpg',
                        },
                        {
                            id: 'Sauna Seca',
                            svgPath: 'M50 50 L60 50 L60 60 L50 60 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Wellness-mezanino-2-pavimento-lazer/Sauna Seca_c.jpg',
                        },
                        {
                            id: 'Spa',
                            svgPath: 'M50 70 L60 70 L60 80 L50 80 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Wellness-mezanino-2-pavimento-lazer/Spa_c.jpg',
                        },
                        {
                            id: 'Espaço Beauty',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media:
                                '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Wellness-mezanino-2-pavimento-lazer/Espaço Beauty_c.jpg',
                        },
                    ],
                    arrows: { down: 'Lazer Exclusivo', up: '33' },
                },

                {
                    id: '33',
                    planImage: '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Salaode-festas-33-pavimento/Salão de Festas 33º Pavimento - Planta_c.jpg',
                    hotspots: [
                        {
                            id: 'Salão de Festas',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Salaode-festas-33-pavimento/Salão de Festas_c.jpg'
                        },
                    ],
                    arrows: { down: '2', up: '34'}
                },

                {
                    id: '34',
                    planImage: '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Academia-34-pavimento/Academia 34º pavimento_c.jpg',
                    hotspots: [
                        {
                            id: 'Academia',
                            svgPath: 'M50 90 L60 90 L60 100 L50 100 Z',
                            media: '/assets/Imagens Finais/Legitimo/Areas-comuns-exclusivas-legítimo/Academia-34-pavimento/Academia_c.jpg'
                        },
                    ],
                    arrows: { down: '2', up: '34'}
                }
            ],
        },

        {
            id: 'Apartamentos',
            floors: [],
        },
    ],

    Autentico: [],
    LeClubLacoste: [],
};
