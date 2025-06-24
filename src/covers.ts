/* Caminhos base para capas – ajuste conforme a real estrutura do seu disco */

export const SECTION_COVER: Record<string, string> = {
    Legitimo: 'public/assets/Imagens Finais/Legítimo/LEGÍTIMO.png',
    Autentico: '/assets/Imagens Finais/Autêntico/AUTÊNTICO.png',
    LeClubLacoste: '/assets/Imagens Finais/Le Club Lacoste/LE CLUB LACOSTE.png',
};

export const CATEGORY_COVER: Record<string, Record<string, string>> = {
    Legitimo: {
        Subsolos: 'public/assets/Imagens Finais/Legítimo/Subsolos/Subsolos.png',
        // 'Areas Comuns': '…',
        // 'Apartamentos': '…',
    },
    Autentico: {
        Subsolos: 'public/assets/Imagens Finais/Legítimo/Subsolos/Subsolos.png',
    },
    LeClubLacoste: {
        // preencha quando precisar
    },
};
