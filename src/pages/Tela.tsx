import { FC } from 'react';
import { useNavigationStore } from '../store/navigation';
import { CONTENT } from '../content';

export const Tela: FC = () => {
    const { section, category, floor, hotspot } = useNavigationStore();

    /* default media = idle */
    let mediaSrc = '/assets/idle.mp4';

    /* só troca se um hotspot estiver selecionado */
    if (section && category && floor && hotspot) {
        mediaSrc =
            CONTENT[section]
                .find((c) => c.id === category)!
                .floors.find((f) => f.id === floor)!
                .hotspots.find((h) => h.id === hotspot)!.media;
    }

    const isVideo = mediaSrc.endsWith('.mp4');

    return isVideo ? (
        <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    ) : (
        <img
            src={mediaSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    );
};
