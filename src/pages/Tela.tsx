import { FC } from 'react';
import { useNavigationStore } from '../store/navigation';
import { CONTENT } from '../content';
import { SECTION_COVER, CATEGORY_COVER } from '../covers';

export const Tela: FC = () => {
    const { section, category, floor, hotspot } = useNavigationStore();

    /* ---------- Decide o arquivo a exibir ---------- */
    let mediaSrc: string;

    if (!section) {
        mediaSrc = '/assets/idle.mp4';
    } else if (!category) {
        mediaSrc = SECTION_COVER[section] ?? '/assets/idle.mp4';
    } else if (!hotspot) {
        mediaSrc =
            CATEGORY_COVER[section]?.[category] ??
            SECTION_COVER[section] ??
            '/assets/idle.mp4';
    } else {
        mediaSrc =
            CONTENT[section]
                .find((c) => c.id === category)!
                .floors.find((f) => f.id === floor)!
                .hotspots.find((h) => h.id === hotspot)!.media;
    }

    /* ---------- Renderiza <video> ou <img> ---------- */
    const isVideo = mediaSrc.endsWith('.mp4');

    if (isVideo) {
        return (
            <video
                src={mediaSrc}
                autoPlay
                loop
                muted
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        );
    }

    return (
        <img
            src={mediaSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    );
};
