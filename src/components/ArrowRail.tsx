import { FC } from 'react';
import { useNavigationStore } from '../store/navigation';

interface Props {
  arrows: { up?: string; right?: string; down?: string; left?: string };
  floorId: string;
}

const ArrowBtn: FC<{ symbol: string; size: number; onClick: () => void }> = ({
  symbol,
  size,
  onClick,
}) => (
  <button
    onClick={onClick}
    style={{
      border: 'none',
      background: 'transparent',
      fontSize: size,
      lineHeight: 1,
      color: '#5a1e1b',
      cursor: 'pointer',
    }}
  >
    {symbol}
  </button>
);

export const ArrowRail: FC<Props> = ({ arrows, floorId }) => {
  const { setNav } = useNavigationStore();

  const vSize = 56; // ▲ ▼
  const hSize = 48; // ◀ ▶

  return (
    <div
      style={{
        /* ⬇ REMOVIDO width:200 px – deixa o bloco assumir a largura do conteúdo */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',     // centra setas verticais na linha
        justifyContent: 'center',
        gap: 16,
        paddingLeft: 32,          // respiro em relação à planta
        position: 'relative',
        zIndex: 2,
        color: '#5a1e1b',
      }}
    >
      {arrows.up && (
        <ArrowBtn
          symbol="▲"
          size={vSize}
          onClick={() => setNav({ floor: arrows.up, hotspot: null })}
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {arrows.left && (
          <ArrowBtn
            symbol="◀"
            size={hSize}
            onClick={() => setNav({ floor: arrows.left, hotspot: null })}
          />
        )}

        <span style={{ fontSize: 36, fontWeight: 700, whiteSpace: 'nowrap' }}>
          {floorId}
        </span>

        {arrows.right && (
          <ArrowBtn
            symbol="▶"
            size={hSize}
            onClick={() => setNav({ floor: arrows.right, hotspot: null })}
          />
        )}
      </div>

      {arrows.down && (
        <ArrowBtn
          symbol="▼"
          size={vSize}
          onClick={() => setNav({ floor: arrows.down, hotspot: null })}
        />
      )}
    </div>
  );
};
