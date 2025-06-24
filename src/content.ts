// src/content.ts


export interface HotspotSpec {
    id: string;          // 'Car Wash'
    svgPath: string;     // string "M10 20 L30 20 …" (SVG path)  ← continua string
    media: string;       // pode ser JPG *ou* MP4
}

export interface FloorSpec {
    id: string;              // 'SS1'
    planImage: string;       // JPG/PNG da planta
    hotspots: HotspotSpec[];
    arrows: {                // define vizinhos
      up?: string;
      right?: string;
      down?: string;
      left?: string;
    };
}

export interface CategorySpec {
    id: string;                  // 'Subsolos'
    floors: FloorSpec[];
}

export const CONTENT: Record<string, CategorySpec[]> = {
    Legitimo: [
        {
            id: 'Subsolos',
            floors: [
                {
                    id: 'SS3',
                    planImage: 'public/assets/Imagens Finais/Legítimo/Subsolos/SS3/Planta SS3.jpg',
                    hotspots: [
                    {
                        id: 'Garagem',
                        svgPath: 'M50 80 L180 80 L180 140 L50 140 Z',
                        media: 'public/assets/Imagens Finais/Legítimo/Subsolos/SS3/Imagem Garagem.jpg',
                    },
                    ],
                    arrows: { up: 'SS2' },
                },

                {
                    id: 'SS2',
                    planImage: 'public/assets/Imagens Finais/Legítimo/Subsolos/SS2/C18_PB_02_Pavimento_garagem_SS2_EF.jpg',
                    hotspots: [
                        {
                            id: 'Garagem',
                            svgPath: 'M60 90 L170 90 L170 130 L60 130 Z',
                            media: 'public/assets/Imagens Finais/Legítimo/Subsolos/SS2/Imagem Garagem.jpg',
                        },
                    ],
                    arrows: { up: 'SS1', down: 'SS3' },
                },
        
                {
                    id: 'SS1',
                    planImage: 'public/assets/Imagens Finais/Legítimo/Subsolos/SS1/Planta SS1.jpg',
                    hotspots: [
                        {
                            id: 'Car Wash',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media: 'public/assets/Imagens Finais/Legítimo/Subsolos/SS1/Car Wash.jpg',
                        },
                        {
                            id: 'Lobby Legítimo',
                            svgPath: 'M130 220 L200 220 L200 280 L130 280 Z',
                            media: 'public/assets/Imagens Finais/Legítimo/Subsolos/SS1/Lobby Legítimo/Lobby.jpg',
                        },
                    ],
                    arrows: { up: 'Térreo', down: 'SS2' },
                },

                {
                    id: 'Térreo',
                    planImage: 'public/assets/Imagens Finais/Legítimo/Subsolos/Térreo/Planta Térreo.jpg',
                    hotspots: [
                        {
                            id: 'Bicicletário',
                            svgPath: 'M20 200 L100 200 L100 260 L20 260 Z',
                            media: 'public/assets/Imagens Finais/Legítimo/Subsolos/Térreo/Planta Térreo.jpg',
                        }
                    ],
                    arrows: { down: 'SS1' },
                },
            ],
        },
        {
            id: "Áreas Comuns",
            floors:[]
        },
        {
            id: "Apartamentos",
            floors:[]
        }
    ],
  
    Autentico: [/* … */],
    LeClubLacoste: [/* … */],
  };
  