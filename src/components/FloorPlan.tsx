import { FC } from 'react';
import type { HotspotSpec } from '../content';      // ①  IMPORT ***TYPE*** ONLY
import { useNavigationStore } from '../store/navigation';

interface Props {
    planImage: string;                              // ②  nome padronizado
    hotspots: HotspotSpec[];
}

export const FloorPlan: FC<Props> = ({ planImage, hotspots }) => {
    const { hotspot: active, setNav } = useNavigationStore();

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img
                src={planImage}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="floor plan"
            />

            {/* highlight */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                }}
            >
                {hotspots.map((h) => (
                    <path
                        key={h.id}
                        d={h.svgPath}
                        fill="none"
                        stroke={h.id === active ? 'red' : 'transparent'}
                        strokeWidth={3}
                    />
                ))}
            </svg>
        </div>
    );
};
