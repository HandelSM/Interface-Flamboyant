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
                        clipPath={`path('${h.svgPath}')`}
                        strokeWidth={3}
                    />
                ))}
            </svg>

            {/* invisible click targets */}
            {hotspots.map((h) => (
                <button
                    key={h.id}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        transformOrigin: '0 0',
                        transform: 'scale(1)',
                        clipPath: `path('${h.svgPath}')`,
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={() => setNav({ hotspot: h.id })}
                />
            ))}
        </div>
    );
};
