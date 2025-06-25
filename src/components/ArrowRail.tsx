import { FC } from 'react';
import { useNavigationStore } from '../store/navigation';

interface Props {
    arrows: { up?: string; right?: string; down?: string; left?: string };
    floorId: string;
}

const ArrowBtn: FC<{ onClick: () => void; symbol: string }> = ({ onClick, symbol }) => (
    <button
        onClick={onClick}
        style={{
            border: 'none',
            background: 'transparent',
            fontSize: 48,
            color: '#5a1e1b',
            cursor: 'pointer',
        }}
    >
        {symbol}
    </button>
);

export const ArrowRail: FC<Props> = ({ arrows, floorId }) => {
    const { setNav } = useNavigationStore();

    return (
        <div
            style={{
                width: 200,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                fontFamily: 'Utile, sans-serif',
                color: '#5a1e1b',
            }}
        >
            {/* seta up */}
            {arrows.up && (
                <ArrowBtn
                    symbol="▲"
                    onClick={() => setNav({ floor: arrows.up, hotspot: null })}
                />
            )}

            {/* linha nome + setas horizontais */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {arrows.left && (
                    <ArrowBtn
                        symbol="◀"
                        onClick={() => setNav({ floor: arrows.left, hotspot: null })}
                    />
                )}

                <span style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{floorId}</span>

                {arrows.right && (
                    <ArrowBtn
                        symbol="▶"
                        onClick={() => setNav({ floor: arrows.right, hotspot: null })}
                    />
                )}
            </div>

            {/* seta down */}
            {arrows.down && (
                <ArrowBtn
                    symbol="▼"
                    onClick={() => setNav({ floor: arrows.down, hotspot: null })}
                />
            )}
        </div>
    );
};

