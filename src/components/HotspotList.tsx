import { FC } from 'react';
import type { HotspotSpec } from '../content';
import { useNavigationStore } from '../store/navigation';

interface Props {
    hotspots: HotspotSpec[];
}

export const HotspotList: FC<Props> = ({ hotspots }) => {
    const { hotspot: active, setNav } = useNavigationStore();

    return (
        <ul
            style={{
                listStyle: 'none',
                margin: 0,
                padding: 24,
                fontFamily: 'Montserrat, sans‑serif',
                color: '#5a1e1b',
                fontSize: 24,
                minWidth: 240,
            }}
        >
            {hotspots.map((h) => (
                <li
                    key={h.id}
                    onClick={() => setNav({ hotspot: h.id })}
                    style={{
                        marginBottom: 16,
                        cursor: 'pointer',
                        opacity: h.id === active ? 1 : 0.4,
                    }}
                >
                    {h.id}
                </li>
            ))}
        </ul>
    );
};
