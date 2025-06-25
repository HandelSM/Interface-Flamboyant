import { FC } from 'react';
import type { HotspotSpec } from '../content';
import { useNavigationStore } from '../store/navigation';

interface Props {
    hotspots: HotspotSpec[];
}

export const HotspotList: FC<Props> = ({ hotspots }) => {
    const { hotspot: active, setNav } = useNavigationStore();

    return (
        <div
            style={{
                height: '100%',              // 100% of the column height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',    // centers vertically
                paddingLeft: 40,
            }}
        >
            <ul
                style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    width: 220,
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
                            fontWeight: h.id === active ? 700 : 300,
                        }}
                    >
                        {h.id}
                    </li>
                ))}
            </ul>
        </div>
    );    
};

