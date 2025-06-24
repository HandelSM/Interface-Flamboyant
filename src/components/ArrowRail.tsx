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
                width: 240,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 24,
                fontFamily: 'Montserrat, sans‑serif',
                color: '#5a1e1b',
                fontSize: 28,
            }}
        >
            {arrows.up && <ArrowBtn onClick={() => setNav({ floor: arrows.up, hotspot: null })} symbol="▲" />}
            {arrows.right && <ArrowBtn onClick={() => setNav({ floor: arrows.right, hotspot: null })} symbol="▶" />}
            {arrows.down && <ArrowBtn onClick={() => setNav({ floor: arrows.down, hotspot: null })} symbol="▼" />}
            {arrows.left && <ArrowBtn onClick={() => setNav({ floor: arrows.left, hotspot: null })} symbol="◀" />}

            <div style={{ marginTop: 32 }}>{floorId}</div>
        </div>
    );
};
