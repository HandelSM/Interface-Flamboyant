import { FC } from 'react';
import type { HotspotSpec } from '../content';      // ①  IMPORT ***TYPE*** ONLY
import { useNavigationStore } from '../store/navigation';

interface Props {
    planImage: string;                              // ②  nome padronizado
    hotspots: HotspotSpec[];
}

export const FloorPlan: FC<Props> = ({ planImage, hotspots }) => {
    const { hotspot: active, setNav } = useNavigationStore();

    const activeIdx = hotspots.findIndex((h) => h.id === active); // -1 se nenhum
    const planSrc = (() => {
        if (activeIdx < 0) return planImage;               // sem highlight
        const dot = planImage.lastIndexOf('.');            // separa extensão
        if (dot === -1) return planImage;                  // segurança
        console.log(`${planImage.slice(0, dot)}_${activeIdx+1}.png`)
        return `${planImage.slice(0, dot)}_${activeIdx+1}.png`;
    })();

    return (
        <div style={{ position: 'relative', overflow:'hidden', width: '100%', height: '100%', maxHeight:'100%' }}>
            <img
                src={planSrc}
                style={{ width: '100%', height: 'auto', maxHeight:'100%', objectFit: 'contain' }}
                alt="floor plan"
            />

        </div>
    );
};
